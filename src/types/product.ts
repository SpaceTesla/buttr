export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images?: string[];
  image?: string; // Keep for backward compatibility
  tags: string[];
  description: string;
}
