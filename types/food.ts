export type Category = "Pizza" | "Burgers" | "Salads" | "Desserts" | "Beverages";

export interface Food {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  badge?: string;
  featured?: boolean;
}
