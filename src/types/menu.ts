export type MenuOption = {
  name: string;
  values: string[];
  prices?: number[];
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number | null;
  priceLabel?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  notes?: string[];
  options?: MenuOption[];
  items: MenuItem[];
};

export type MenuData = {
  restaurant: string;
  menuTitle: string;
  currency: string;
  vegetarianOnly: boolean;
  taxNote: string;
  contact: {
    orderPhone: string;
    displayPhone: string;
    address: string;
  };
  categories: MenuCategory[];
};
