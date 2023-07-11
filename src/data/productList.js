import defaultPackageAlt from "../assets/defaultPackageAlt.png";

//! FIX: SAME PRODUCTS WITH DIFFERENT VOLUMES SHOULD HAVE ONE OBJECT INSTEAD OF MULTIPLE
export const allProducts = [
  {
    productName: "Vitamin C",
    productSlug: "vitamin-c-120",
    productPrice: 40.99,
    discountPercent: 20,
    volume: "120 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$30 - $40" },
      { filter: "volume", value: "120 tablets/capsules" },
    ],
  },
  {
    productName: "Vitamin C",
    productSlug: "vitamin-c-60",
    productPrice: 20.99,
    discountPercent: 20,
    volume: "60 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "volume", value: "60 tablets/capsules" },
    ],
  },
  {
    productName: "Creatine Monohydrate",
    productSlug: "creatine-monohydrate-powder-500",
    productPrice: 32.99,
    volume: "500g",
    productCategory: "Creatine",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$30 - $40" },
      { filter: "weight", value: "500g" },
    ],
  },
  {
    productName: "Creatine Monohydrate",
    productSlug: "creatine-monohydrate-powder-300",
    productPrice: 25.99,
    volume: "300g",
    productCategory: "Creatine",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "300g" },
    ],
  },

  {
    productName: "Pea Protein Isolate",
    productSlug: "pea-protein",
    productPrice: 30.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$30 - $40" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },

  {
    productName: "Rice Protein Isolate",
    productSlug: "rice-protein",
    productPrice: 23.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },

  {
    productName: "Casein",
    productSlug: "casein-protein",
    productPrice: 23.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy" },
    ],
  },
  {
    productName: "Whey Protein",
    productSlug: "whey-protein",
    productPrice: 26.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy" },
    ],
  },
  {
    productName: "Hemp Protein",
    productSlug: "whey-protein",
    productPrice: 12.99,
    volume: "5000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: defaultPackageAlt,
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "weight", value: "500g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },
];
