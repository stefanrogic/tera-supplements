import casein500 from "../assets/productImages/casein-500.png";
import casein1000 from "../assets/productImages/casein-1000.png";
import hemp500 from "../assets/productImages/hemp-protein-500.png";
import hemp1000 from "../assets/productImages/hemp-protein-1000.png";
import pea500 from "../assets/productImages/pea-protein-500.png";
import pea1000 from "../assets/productImages/pea-protein-500.png";
// import rice500 from "../assets/productImages/rice-protein-500.png";
import rice1000 from "../assets/productImages/rice-protein-1000.png";
import whey500 from "../assets/productImages/whey-protein-500.png";
import whey1000 from "../assets/productImages/whey-protein-1000.png";

import creatine300 from "../assets/productImages/creatine-monohydrate-300.png";
import creatine500 from "../assets/productImages/creatine-monohydrate-500.png";

import vitaminC90 from "../assets/productImages/vitamin-c-90.png";
import vitaminC120 from "../assets/productImages/vitamin-c-120.png";
import vitaminD2500120 from "../assets/productImages/vitamin-d-2500-120.png";
import vitaminD500060 from "../assets/productImages/vitamin-d-5000-60.png";

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
    productImg: vitaminD2500120,
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
    productImg: vitaminC120,
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
    productImg: vitaminD500060,
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
    productImg: vitaminC90,
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
    productImg: creatine500,
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
    productImg: creatine300,
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
    productImg: whey500,
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
    productImg: whey1000,
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
    productImg: pea1000,
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
    productImg: pea500,
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
    productImg: rice1000,
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
    productImg: casein1000,
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
    productImg: casein500,
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
    productImg: hemp1000,
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
    productImg: hemp500,
    productFilter: [
      { filter: "price", value: "$10 - $20" },
      { filter: "weight", value: "500g" },
      { filter: "protein", value: "Dairy Free" },
    ],
  },
];
