import menuSource from "../../data/menu.json";
import type { MenuData } from "@/types/menu";

export const menu = menuSource as MenuData;

export const menuItems = menu.categories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryId: category.id,
    categoryName: category.name,
    categoryNotes: category.notes ?? [],
    categoryOptions: category.options ?? [],
  })),
);
