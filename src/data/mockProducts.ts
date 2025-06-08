import type { Product } from "../pages/Store";

export const mockProducts: Product[] = [
  // Moda Masculina
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL600_SR600,600_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },

  // Moda Feminina
  {
    id: 4,
    title: "Women Solid Short Sleeve Boat Neck",
    price: 18.9,
    description: "95% Rayon, 5% Spandex. Fabric provides stretch.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 4.1, count: 150 },
  },
  {
    id: 5,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "Lightweight, roomy and highly breathable.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 90 },
  },
  {
    id: 6,
    title: "DANVOUY Women's T Shirt Casual Cotton",
    price: 12.99,
    description: "Features round neck, short sleeve, letter print.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 4.2, count: 230 },
  },

  // Joias
  {
    id: 7,
    title: "John Hardy Women's Legends Naga Gold",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 8,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.7, count: 300 },
  },
  {
    id: 9,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Ring.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.2, count: 140 },
  },

  // Eletrônicos
  {
    id: 10,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    description: "Super ultra-wide 49 inch screen with 32:9 aspect ratio.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 4.6, count: 1000 },
  },
  {
    id: 11,
    title: "WD 4TB Gaming Drive Works with Playstation 4",
    price: 114,
    description: "Portable external hard drive designed for PS4.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 12,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description: "Easy upgrade for faster boot-up, shutdown, application load and response.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 4.9, count: 650 },
  },
];
