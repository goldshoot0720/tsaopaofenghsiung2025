import { createRequestHandler } from '@cloudflare/next-on-pages';

export default {
  async fetch(request, env, ctx) {
    return createRequestHandler({
      buildOutputDir: '.vercel/output',
    })(request, env, ctx);
  },
};