export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  link: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cigarette-butt-recycling',
    title: 'Transforming Cigarette Butts into Sustainable Products',
    excerpt:
      'Learn how Code Effort Private Limited is recycling billions of cigarette butts into sustainable products, from textiles to paper.',
    date: 'June 15, 2023',
    coverImage: '/blog-paper.jpg',
    link: 'https://www.linkedin.com/posts/akanksharathi_sustainability-recycling-upcycling-ugcPost-7283358913532497920-JDIu',
  },
  {
    id: '2',
    slug: 'pollution-control-day',
    title: 'Code Effort: Six Years of Cigarette Butt Recycling',
    excerpt:
      'From 300 butts per day to 6 million daily - discover how Code Effort is transforming cigarette waste into sustainable products.',
    date: 'December 2, 2023',
    coverImage: '/blog-paper.jpg',
    link: 'https://www.linkedin.com/posts/mrnaman_pollutioncontrolday-sustainability-bhopalgastragedy-ugcPost-7269351286746079232-FWNt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7_RuoBsSBbswody3AfU4sNVdE0-sa8ryQ',
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
