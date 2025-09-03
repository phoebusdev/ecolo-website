'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExpandingArrow } from '@/components/shared/icons';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  tagline,
  description,
  icon,
  href,
  className = ''
}) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        className={`
          group bg-white rounded-2xl shadow-lg hover:shadow-2xl 
          transition-all duration-300 p-8 border border-gray-100
          hover:border-primary/30 cursor-pointer h-full
          ${className}
        `}
      >
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="text-5xl mr-5">{icon}</div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-base text-primary font-medium">{tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8 text-base flex-grow">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
            <span className="text-base mr-2">Learn More</span>
            <ExpandingArrow className="h-5 w-5 text-current" />
          </div>
          
          {/* Indicator dots */}
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-primary/30 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-primary/60 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
      </motion.div>
    </Link>
  );
};

export default ProductCard;