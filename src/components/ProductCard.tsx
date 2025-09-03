'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

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
          group bg-white rounded-xl shadow-lg hover:shadow-2xl 
          transition-all duration-300 p-6 border border-gray-100
          hover:border-primary/20 cursor-pointer h-full
          ${className}
        `}
      >
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{icon}</div>
          <div>
            <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-primary font-medium">{tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
            <span className="text-sm mr-2">Learn More</span>
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
          
          {/* Indicator dots */}
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
      </motion.div>
    </Link>
  );
};

export default ProductCard;