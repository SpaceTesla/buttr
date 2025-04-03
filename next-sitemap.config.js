/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.buttrpaper.com',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: ['/admin/*', '/dashboard/*'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
};
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.buttrpaper.com',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: [
    '/admin/*',
    '/dashboard/*',
    '/api/*',
    '/server-sitemap.xml',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/dashboard', '/api'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
  },
  generateIndexSitemap: true,
  sitemapSize: 7000, // split into multiple sitemaps if exceeds this
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for specific paths
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    if (path.startsWith('/store')) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // Default transformation for all other paths
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
