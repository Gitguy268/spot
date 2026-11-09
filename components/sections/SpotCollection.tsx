'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { products, categories, type Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const animationDelay = `${index * 0.1}s`;

  const handleProductClick = useCallback(() => {
    // Analytics event for product click
    const event = new CustomEvent('product_click', {
      detail: {
        category: product.category,
        productId: product.id,
      },
    });
    window.dispatchEvent(event);
  }, [product.category, product.id]);

  return (
    <div
      className="w-full"
      style={{
        animation: `fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        animationDelay,
        opacity: 0,
      }}
    >
      <div
        className="rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md focus-ring"
        style={{ backgroundColor: '#F5F4EB' }}
      >
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover"
            quality={80}
          />
        </div>
        <div className="p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-sm lg:text-base text-gray-700 mb-4 leading-relaxed">
            {product.description}
          </p>
          
          {/* Variants */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.variants.map((variant) => (
              <span
                key={variant}
                className="px-2 py-1 text-xs font-medium rounded-md"
                style={{
                  backgroundColor: '#171717',
                  color: '#F5F4EB',
                }}
              >
                {variant}
              </span>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              {product.price}
            </span>
            <a
              href={product.printifyUrl}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-ring hover:shadow-md"
              style={{
                backgroundColor: '#171717',
                color: '#F5F4EB',
              }}
              aria-label={`Buy ${product.name} for ${product.price}`}
              onClick={handleProductClick}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TabButtonProps {
  category: typeof categories[number];
  isActive: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

function TabButton({ category, isActive, onClick, onKeyDown }: TabButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-ring ${
        isActive
          ? 'shadow-md'
          : 'hover:shadow-sm'
      }`}
      style={{
        backgroundColor: isActive ? '#171717' : '#F5F4EB',
        color: isActive ? '#F5F4EB' : '#171717',
      }}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${category.toLowerCase()}`}
      tabIndex={isActive ? 0 : -1}
      id={`tab-${category.toLowerCase()}`}
    >
      {category}
    </button>
  );
}

export default function SpotCollection() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('Tees');

  const handleTabChange = useCallback((category: typeof categories[number]) => {
    setActiveCategory(category);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const currentIndex = categories.indexOf(activeCategory);
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
        break;
      case 'ArrowRight':
        newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = categories.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveCategory(categories[newIndex]);
  }, [activeCategory]);

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section className="w-full py-12 lg:py-20 px-4 lg:px-8" aria-labelledby="spot-collection-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-12 section-fade-in">
          <h2
            id="spot-collection-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Spot Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Wear your memories with pride. Premium Spot merchandise for everyday moments.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="mb-8 lg:mb-12"
          role="tablist"
          aria-label="Product categories"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <TabButton
                key={category}
                category={category}
                isActive={category === activeCategory}
                onClick={() => handleTabChange(category)}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory.toLowerCase()}`}
          aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
        >
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <ProductCard
                  product={product}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}