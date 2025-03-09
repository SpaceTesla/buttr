// types/product.ts
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  isNew: boolean;
  isBestseller: boolean;
  tags: string[];
  description: string;
};
