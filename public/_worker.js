const ROOT_EN = {
  '/': '/en/',
  '/about': '/en/about/',
  '/contact': '/en/contact/',
  '/privacy-policy': '/en/privacy-policy/',
  '/terms': '/en/terms/',
  '/thank-you': '/en/thank-you/',
  '/saved-invoices': '/en/saved-invoices/',
};

// Map old prefixed-English URLs back to the unprefixed (canonical) URLs.
const EN_TO_ROOT = {
  '/en/': '/',
  '/en/about': '/about',
  '/en/contact': '/contact',
  '/en/privacy-policy': '/privacy-policy',
  '/en/terms': '/terms',
  '/en/thank-you': '/thank-you',
  '/en/saved-invoices': '/saved-invoices',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const rootTarget = ROOT_EN[url.pathname];
    if (rootTarget) {
      // Serve the English page at the canonical root URL without a redirect.
      return env.ASSETS.fetch(new Request(url.origin + rootTarget, request));
    }
    const enMap = EN_TO_ROOT[url.pathname];
    if (enMap) {
      return Response.redirect(new URL(enMap, url.origin), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
