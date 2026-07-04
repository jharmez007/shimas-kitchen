export type MenuCategory =
  | "Pizza"
  | "Cakes"
  | "Meat Pies"
  | "Small Chops"
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