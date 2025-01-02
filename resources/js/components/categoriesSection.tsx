import image2 from '@/assets/images/Container-2.png';
import image3 from '@/assets/images/Container-3.png';
import image4 from '@/assets/images/Container-4.png';
import image1 from '@/assets/images/Container.png';

import { useState } from 'react';
import { Link } from './ui';

interface Category {
  title: string;
  image: string;
  href: string;
  description?: string;
}

interface CategoryCardProps extends Category {
  priority?: boolean;
}

function CategoryCard({ title, image, href, description, priority = false }: CategoryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-none transition-transform duration-300 hover:-translate-y-1 "
      aria-label={`View ${title} category`}
    >
      <div className="aspect-[3/4] relative bg-gray-100">
        <img
          src={image}
          alt={description || `${title} category image`}
          className={`
            absolute inset-0 h-full w-full object-cover transition-all duration-300
            group-hover:scale-105
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
      </div>

      <div className="relative bottom-2 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 280 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 41.4273V107.993C0 107.993 44.631 108.828 83.2438 92.187C121.857 75.5456 213.69 53.9182 279.809 107.158C280.239 100.919 279.809 0 279.809 0H0.0942532L0 41.4273Z"
            fill="#FF2600"
            className="transition-colors duration-300 group-hover:fill-red-700"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3
            className="text-center pb-4 font-medium text-white drop-shadow-md transform -translate-y-2
            text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

const categories: Category[] = [
  {
    title: 'Chocolate',
    image: image1,
    href: '/categories/chocolate',
    description: 'Explore our premium chocolate selection'
  },
  {
    title: 'Confectionery',
    image: image2,
    href: '/categories/confectionery',
    description: 'Discover our artisanal confectionery range'
  },
  {
    title: 'Wafers',
    image: image3,
    href: '/categories/wafers',
    description: 'Browse our crispy wafer collection'
  },
  {
    title: 'Pastry',
    image: image4,
    href: '/categories/pastry',
    description: 'View our freshly baked pastries'
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 ">
      <div className="text-center mb-8 sm:mb-12">
        <h2
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
          text-sm sm:text-base"
        >
          Categories
        </h2>
        <p
          className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-normal
          max-w-xl sm:max-w-2xl mx-auto px-4"
        >
          The best confectionery for your enjoyment
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8
        xl:grid-cols-4 2xl:gap-10"
      >
        {categories.map((category, index) => (
          <CategoryCard key={category.title} {...category} priority={index < 2} />
        ))}
      </div>
    </section>
  );
}
