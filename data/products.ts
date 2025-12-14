export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  variants: string[];
  printifyUrl: string;
  category: 'Tees' | 'Hoodies' | 'Accessories';
  description: string;
}

export const categories = ['Tees', 'Hoodies', 'Accessories'] as const;

export const products: Product[] = [
  // Tees
  {
    id: 'tee-1',
    name: 'Classic Spot Tee',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    price: '$24.99',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    printifyUrl: 'https://printify.com/product/tee',
    category: 'Tees',
    description: 'Premium cotton comfort with iconic Spot branding',
  },
  {
    id: 'tee-2',
    name: 'Spot Vintage Tee',
    imageUrl: 'https://images.unsplash.com/photo-1583743089696-4b8d73a1c4e7?w=400&h=400&fit=crop',
    price: '$27.99',
    variants: ['S', 'M', 'L', 'XL'],
    printifyUrl: 'https://printify.com/product/vintage-tee',
    category: 'Tees',
    description: 'Retro-inspired design celebrating digital memories',
  },
  {
    id: 'tee-3',
    name: 'Spot Logo Tee',
    imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop',
    price: '$22.99',
    variants: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    printifyUrl: 'https://printify.com/product/logo-tee',
    category: 'Tees',
    description: 'Minimalist Spot logo on soft, breathable fabric',
  },
  // Hoodies
  {
    id: 'hoodie-1',
    name: 'Spot Comfort Hoodie',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    price: '$49.99',
    variants: ['S', 'M', 'L', 'XL'],
    printifyUrl: 'https://printify.com/product/comfort-hoodie',
    category: 'Hoodies',
    description: 'Cozy fleece-lined hoodie for ultimate comfort',
  },
  {
    id: 'hoodie-2',
    name: 'Spot Zip Hoodie',
    imageUrl: 'https://images.unsplash.com/photo-1578587018452-8927c10fa5cc?w=400&h=400&fit=crop',
    price: '$54.99',
    variants: ['M', 'L', 'XL', 'XXL'],
    printifyUrl: 'https://printify.com/product/zip-hoodie',
    category: 'Hoodies',
    description: 'Full-zip comfort with spacious kangaroo pocket',
  },
  {
    id: 'hoodie-3',
    name: 'Spot Tech Hoodie',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
    price: '$59.99',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    printifyUrl: 'https://printify.com/product/tech-hoodie',
    category: 'Hoodies',
    description: 'Performance moisture-wicking technology meets style',
  },
  // Accessories
  {
    id: 'accessory-1',
    name: 'Spot Cap',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop',
    price: '$19.99',
    variants: ['Adjustable'],
    printifyUrl: 'https://printify.com/product/spot-cap',
    category: 'Accessories',
    description: 'Classic snapback with embroidered Spot logo',
  },
  {
    id: 'accessory-2',
    name: 'Spot Tote Bag',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    price: '$16.99',
    variants: ['Canvas', 'Cotton'],
    printifyUrl: 'https://printify.com/product/spot-tote',
    category: 'Accessories',
    description: 'Eco-friendly tote perfect for daily essentials',
  },
  {
    id: 'accessory-3',
    name: 'Spot Sticker Pack',
    imageUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&h=400&fit=crop',
    price: '$8.99',
    variants: ['Matte', 'Glossy'],
    printifyUrl: 'https://printify.com/product/spot-stickers',
    category: 'Accessories',
    description: 'Waterproof vinyl stickers in premium Spot designs',
  },
];