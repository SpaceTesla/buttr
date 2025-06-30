import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Store | BUTTR Sustainable Papers',
  description:
    'Shop our collection of 100% recycled, tree-free, premium quality sustainable papers and products.',
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 