import type { SiteContent } from "./types";

import { defaultContent } from "./defaults";

// 以預設資料作為結構樣板檢查型別：
// 物件逐鍵比對、陣列以樣板的第一個元素檢查每個項目。
function check(value: unknown, template: unknown, path: string, errors: string[]) {
  if (typeof template === "string") {
    if (typeof value !== "string") errors.push(`${path} 應為文字`);

    return;
  }

  if (Array.isArray(template)) {
    if (!Array.isArray(value)) {
      errors.push(`${path} 應為陣列`);

      return;
    }
    if (template.length === 0) return;
    value.forEach((item, i) => check(item, template[0], `${path}[${i}]`, errors));

    return;
  }

  if (template && typeof template === "object") {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      errors.push(`${path} 應為物件`);

      return;
    }
    for (const key of Object.keys(template)) {
      check(
        (value as Record<string, unknown>)[key],
        (template as Record<string, unknown>)[key],
        path ? `${path}.${key}` : key,
        errors,
      );
    }
  }
}

export type SectionKey = keyof SiteContent;

export const sectionKeys = Object.keys(defaultContent) as SectionKey[];

export function validateSection(key: SectionKey, value: unknown): string[] {
  const errors: string[] = [];

  check(value, defaultContent[key], key, errors);

  return errors;
}

export function validateContent(value: unknown): string[] {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return ["內容應為 JSON 物件"];
  }

  return sectionKeys.flatMap((key) =>
    validateSection(key, (value as Record<string, unknown>)[key]),
  );
}

// 讀取時使用：壞掉或缺少的區塊退回預設值，網站永遠可以渲染。
export function normalizeContent(value: unknown): SiteContent {
  const raw = (value && typeof value === "object" ? value : {}) as Record<string, unknown>;
  const result = { ...defaultContent } as Record<SectionKey, unknown>;

  for (const key of sectionKeys) {
    if (validateSection(key, raw[key]).length === 0) result[key] = raw[key];
  }

  return result as unknown as SiteContent;
}
