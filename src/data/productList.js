// import defaultPackageAlt from "../assets/defaultPackageAlt.png";

const convertGoogleDriveLink = (link) => `https://drive.google.com/uc?export=view&id=${link.split("/").find((_, i) => i === 5)}`;

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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1zgr5Y-jGcj6RXjucW0-J5-4DFPZQEBbq/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1Ulsa5i_mZz5YDgrsxbA6kU2ll1sHs-SA/view?usp=drive_link"),
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "volume", value: "60 tablets/capsules" },
    ],
  },
  {
    productName: "Vitamin D 2500 IU",
    productSlug: "vitamin-d-2500-120",
    productPrice: 45.99,
    discountPercent: 20,
    volume: "120 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1EJqZn_P5BpgHT3f9RAebulJC4k1jMWFJ/view?usp=drive_link"),
    productFilter: [
      { filter: "price", value: "$40 - $50" },
      { filter: "volume", value: "120 tablets/capsules" },
    ],
  },
  {
    productName: "Vitamin D 2500 IU",
    productSlug: "vitamin-d-2500-60",
    productPrice: 25.99,
    discountPercent: 20,
    volume: "60 Capsules",
    productCategory: "Vitamins",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1FKKH4_QlNaqbC9b6vT4_CPYkRDTZQ0Yo/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1SaQVxohDWtBuLIef4VBAixgundMVyZZR/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1Pm4DOBVXWHJiqkSuJNjIf1uH274WDbbz/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1_3Yv-8Ix0DGGMSzTaMvSqkJnEd4eU0VA/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1fVsBKPeI0rcLvQp6DOALv6Cy8MK-DMNt/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/12HvHYvJVTxhEnYCFBCn1-Es_PNgtvrcU/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/14OdUXzTilCHq2daKpJLFn7gpDZJOb3AY/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1eVO58kHT0v46GFXLyNNA9yCJ2ownYtxW/view?usp=drive_link"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },

  {
    productName: "Casein",
    productSlug: "casein-protein-1000",
    productPrice: 23.99,
    volume: "1000g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1IUl7leZnCm8spqL8_WdTuBzJuRDRUplL/view?usp=drive_link"),
    productFilter: [
      { filter: "price", value: "$20 - $30" },
      { filter: "weight", value: "1000g" },
      { filter: "protein", value: "Dairy" },
    ],
  },
  {
    productName: "Casein",
    productSlug: "casein-protein-500",
    productPrice: 13.99,
    volume: "500g",
    productCategory: "Protein",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor urna placerat eros accumsan tincidunt. Ut eu accumsan urna. Donec lobortis faucibus mollis. Integer dolor.",
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1qGO8aQYBwJAlvfpkvs-4YDv_QZ-sy4l4/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1M3_ZeQKUMfjyW0FXqP1l4rwcXXULT1P7/view?usp=drive_link"),
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
    productImg: convertGoogleDriveLink("https://drive.google.com/file/d/1PLA06X56t3_mBuGcWIGE7jtwXdRtWP_5/view?usp=drive_link"),
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "weight", value: "500g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },
];
