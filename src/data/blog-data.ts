export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  coverImage: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'sustainable-paper-innovations',
    title: 'Sustainable Paper Innovations for 2023',
    excerpt:
      'Discover the latest innovations in sustainable paper production that are revolutionizing the industry and reducing environmental impact.',
    content: `
The paper industry has been undergoing a significant transformation in recent years, with sustainability at the forefront of innovation. As we move further into 2023, several groundbreaking technologies and approaches are reshaping how we produce and use paper products.

## Algae-Based Paper

One of the most exciting developments is the use of algae as a raw material for paper production. Unlike traditional wood pulp, algae grows rapidly, requires minimal resources, and can be harvested without causing deforestation. Companies like AlgaePaper are leading the way, creating high-quality paper products that have a carbon-negative footprint.

## Waste Reduction Technologies

New closed-loop manufacturing systems are dramatically reducing water usage and chemical waste in paper production. These systems recycle nearly 100% of the water used in the manufacturing process and convert production byproducts into useful materials rather than waste.

## Stone Paper

Made from calcium carbonate (limestone) and a small amount of non-toxic resin, stone paper requires no water, no bleach, and no trees in its production. It's also naturally water-resistant and more durable than traditional paper, making it ideal for outdoor use and reducing the need for plastic alternatives.

## The Future is Green

As consumers become increasingly environmentally conscious, the demand for sustainable paper products continues to grow. By embracing these innovations, the paper industry is not only reducing its environmental impact but also creating new opportunities for growth and differentiation in a competitive market.

The journey toward truly sustainable paper production is ongoing, but with these innovations, we're making significant strides in the right direction.
    `,
    date: 'June 15, 2023',
    author: 'Emma Green',
    coverImage: '/blog-paper.jpg',
  },
  {
    id: '2',
    slug: 'reducing-carbon-footprint',
    title: 'How BUTTR is Reducing Carbon Footprint in Paper Production',
    excerpt:
      'Learn about our innovative approaches to minimize carbon emissions throughout our paper manufacturing process.',
    content: `
At BUTTR, sustainability isn't just a buzzword—it's the foundation of everything we do. Our commitment to reducing our carbon footprint has led us to implement innovative solutions throughout our manufacturing process.

## Renewable Energy Integration

Our production facilities now run on 85% renewable energy, with a combination of solar panels, wind turbines, and hydroelectric power. This transition has reduced our carbon emissions by over 60% compared to traditional paper manufacturing methods.

## Sustainable Forestry Practices

We source our raw materials exclusively from FSC-certified forests that are managed sustainably. For every tree harvested, three new ones are planted, ensuring that our paper production actually contributes to forest growth rather than depletion.

## Efficient Transportation

By optimizing our logistics network and transitioning to electric delivery vehicles for local distribution, we've cut transportation-related emissions by 40% in the past two years.

## Carbon Offset Programs

For emissions we cannot yet eliminate, we invest in verified carbon offset programs that support reforestation, renewable energy development, and community-based sustainability initiatives around the world.

## Measuring Our Impact

Transparency is key to our sustainability efforts. We conduct regular third-party audits of our carbon footprint and publish the results annually, holding ourselves accountable to continuous improvement.

Through these combined efforts, BUTTR is setting a new standard for environmental responsibility in the paper industry. We believe that beautiful, high-quality paper products shouldn't come at the expense of our planet's health.
    `,
    date: 'May 22, 2023',
    author: 'Michael Rivers',
    coverImage: '/blog-paper.jpg',
  },
  {
    id: '3',
    slug: 'recycled-paper-myths',
    title: 'Debunking Common Myths About Recycled Paper',
    excerpt:
      'We address and correct the most common misconceptions about recycled paper products and their quality.',
    content: `
Despite the growing popularity of recycled paper products, several persistent myths continue to influence consumer perceptions and purchasing decisions. Let's separate fact from fiction when it comes to recycled paper.

## Myth 1: Recycled Paper is Lower Quality

Many people believe that recycled paper is inherently inferior to virgin paper—rougher, weaker, or less suitable for important documents. In reality, modern recycling technologies have advanced significantly, allowing for the production of high-quality recycled paper that meets or exceeds the performance of virgin paper in most applications.

## Myth 2: Recycled Paper is More Expensive

While there was a time when recycled paper commanded a premium price, economies of scale and improved production efficiencies have largely eliminated this gap. In many cases, recycled paper products are now comparably priced to their virgin counterparts, and the environmental benefits come at no additional cost.

## Myth 3: Recycled Paper Can't Be White

Some consumers believe that recycled paper must be brown or gray due to the mixing of different colored papers in the recycling process. However, modern de-inking processes can produce recycled paper that is just as bright and white as virgin paper, without requiring harmful bleaching chemicals.

## Myth 4: Paper Can Only Be Recycled a Few Times

While it's true that paper fibers shorten with each recycling cycle, this doesn't mean paper can only be recycled once or twice. Most paper can be recycled 5-7 times before the fibers become too short to be useful, and even then, these short fibers can be used in other applications like egg cartons or insulation.

## Myth 5: Recycling Paper Doesn't Make a Difference

Perhaps the most harmful myth is that paper recycling doesn't significantly benefit the environment. In fact, recycling paper reduces landfill waste, saves energy, reduces greenhouse gas emissions, and decreases the demand for virgin wood pulp, helping to preserve forests.

By understanding the truth about recycled paper, consumers can make more informed choices that align with both their needs and their environmental values.
    `,
    date: 'April 10, 2023',
    author: 'Sophia Chen',
    coverImage: '/blog-paper.jpg',
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
