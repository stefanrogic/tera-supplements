const images = import.meta.glob("/src/assets/productImages/*");

const getImgUrl = (chosenName) => {
  let url;
  Object.keys(images).forEach((img) => {
    const name = img.split("/").find((_, i) => i === 4);

    if (name === chosenName) {
      url = img;
    }
  });
  return url;
};

//! FIX: SAME PRODUCTS WITH DIFFERENT VOLUMES SHOULD HAVE ONE OBJECT INSTEAD OF MULTIPLE
export const allProducts = [
  {
    productName: "Vitamin D 2500 IU",
    productSlug: "vitamin-d-2500-120",
    productPrice: 45.99,
    discountPercent: 20,
    volume: "120 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl(`vitamin-d-2500-120.png`),
    productFilter: [
      { filter: "price", value: "$40 - $50" },
      { filter: "volume", value: "120 tablets/capsules" },
    ],
  },
  {
    productName: "Vitamin C",
    productSlug: "vitamin-c-120",
    productPrice: 40.99,
    discountPercent: 20,
    volume: "120 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("vitamin-c-120.png"),
    productFilter: [
      { filter: "price", value: "$40 - $50" },
      { filter: "volume", value: "120 tablets/capsules" },
    ],
  },
  {
    productName: "Vitamin D 5000 IU",
    productSlug: "vitamin-d-5000-60",
    productPrice: 29.99,
    discountPercent: 20,
    volume: "60 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("vitamin-d-5000-60.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "volume", value: "60 tablets/capsules" },
    ],
  },
  {
    productName: "Vitamin C",
    productSlug: "vitamin-c-90",
    productPrice: 24.99,
    discountPercent: 20,
    volume: "90 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("vitamin-c-90.png"),
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "volume", value: "90 tablets/capsules" },
    ],
  },

  {
    productName: "Creatine Monohydrate",
    productSlug: "creatine-monohydrate-500",
    productPrice: 32.99,
    volume: "500g",
    productCategory: "Creatine",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("creatine-monohydrate-500.png"),
    productFilter: [
      { filter: "price", value: "$30 - $40" },
      { filter: "weight", value: "500g" },
    ],
  },

  {
    productName: "Creatine Monohydrate",
    productSlug: "creatine-monohydrate-300",
    productPrice: 25.99,
    volume: "300g",
    productCategory: "Creatine",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("creatine-monohydrate-300.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "300g" },
    ],
  },
  {
    productName: "Whey Protein",
    productSlug: "whey-protein-500",
    productPrice: 13.99,
    volume: "500g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("whey-protein-500.png"),
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy" },
    ],
  },
  {
    productName: "Whey Protein",
    productSlug: "whey-protein-1000",
    productPrice: 26.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("whey-protein-1000.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy" },
    ],
  },

  {
    productName: "Pea Protein Isolate",
    productSlug: "pea-protein-1000",
    productPrice: 30.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("pea-protein-1000.png"),
    productFilter: [
      { filter: "price", value: "$30 - $40" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },

  {
    productName: "Pea Protein Isolate",
    productSlug: "pea-protein-500",
    productPrice: 21.99,
    volume: "500g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("pea-protein-500.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },

  {
    productName: "Rice Protein Isolate",
    productSlug: "rice-protein-1000",
    productPrice: 23.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("rice-protein-1000.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },

  {
    productName: "Casein",
    productSlug: "casein-1000",
    productPrice: 23.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("casein-1000.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy" },
    ],
  },
  {
    productName: "Casein",
    productSlug: "casein-500",
    productPrice: 13.99,
    volume: "500g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("casein-500.png"),
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "weight", value: "500g" },
      { filter: "protein", value: "Dairy" },
    ],
  },
  {
    productName: "Hemp Protein",
    productSlug: "hemp-protein-1000",
    productPrice: 23.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("hemp-protein-1000.png"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },
  {
    productName: "Hemp Protein",
    productSlug: "hemp-protein-500",
    productPrice: 12.99,
    volume: "500g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: getImgUrl("hemp-protein-500.png"),
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "weight", value: "500g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },
];
