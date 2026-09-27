export interface LinkItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  src: string;
  title: string;
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  notes: string[];
  documents: LinkItem[];
  links: LinkItem[];
}

export interface Member {
  name: string;
  title: string;
  relation: string[];
  unit: string;
  unitsite: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface YearbookEntry {
  text: string;
  tip: string;
}

export interface Mirror extends LinkItem {
  qr?: string;
}

export interface SiteContent {
  home: {
    eyebrow: string;
    headline: string;
    subline: string;
    blogs: LinkItem[];
    gallery: GalleryItem[];
  };
  experience: Milestone[];
  members: {
    leader: Member;
    list: Member[];
    fallback: Omit<Member, "name">;
  };
  review: {
    title: string;
    cover: GalleryItem;
    shortCut: {
      label: string;
      sources: string[];
      captions: string;
    };
    facts: Fact[];
  };
  yearbook: {
    title: string;
    entries: YearbookEntry[];
    footer: string;
  };
  about: {
    browsers: string[];
    thanks: string[];
    mirrors: Mirror[];
  };
}

export type ContentSource = "blob" | "default";

export interface ContentResult {
  content: SiteContent;
  source: ContentSource;
  updatedAt: string | null;
}
