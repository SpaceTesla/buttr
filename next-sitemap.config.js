/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://buttrpaper.in',
  generateRobotsTxt: false, // Set to false since you already have robots.txt
  outDir: 'public',
  exclude: ['/admin/*', '/dashboard/*'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
};
