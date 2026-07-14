export type MenuCategory =
  | "Pizza"
  | "Cakes"
  | "Dairy"
  | "Meat Pies"
  | "Small Chops"
  | "Snacks"
  | "Soups"
  | "Stews";

export interface MenuOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
  options: MenuOption[];
}