import { allProducts } from "./productList";

const getFilters = (category, filter) => {
  let categoryFilters = [];
  const filteredArr = allProducts.filter((p) => p.productCategory === category.charAt(0).toUpperCase() + category.slice(1));
  filteredArr.map((p) => {
    p.productFilter.map((f) => f.filter === filter && categoryFilters.unshift(f.value));
  });
  return [...new Set(categoryFilters)];
};

export const filters = [
  {
    category: "protein",
    section: "protein",
    children: getFilters("protein", "protein"),
  },
  {
    category: "protein",
    section: "price",
    children: getFilters("protein", "price"),
  },
  {
    category: "protein",
    section: "weight",
    children: getFilters("protein", "weight"),
  },

  { category: "creatine", section: "price", children: getFilters("creatine", "price") },
  { category: "creatine", section: "weight", children: getFilters("creatine", "weight") },
  { category: "vitamins", section: "price", children: getFilters("vitamins", "price") },
  { category: "vitamins", section: "volume", children: getFilters("vitamins", "volume") },
  { category: "food", section: "price", children: getFilters("food", "price") },
  { category: "clothing", section: "price", children: getFilters("clothing", "price") },
];
