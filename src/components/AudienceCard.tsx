'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface AudienceCardProps {
  title: string;
  description?: string;
  href: string;
  icon: React.ReactNode;
  iconBg?: string;
  className?: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({
  title,
  description,
  href,
  icon,
  iconBg = 'bg-primary',
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
          group relative bg-white rounded-xl shadow-lg hover:shadow-2xl 
          transition-all duration-300 p-8 text-center h-full border border-gray-100
          hover:border-primary/20 cursor-pointer overflow-hidden
          ${className}
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className={`
            inline-flex items-center justify-center w-20 h-20 rounded-2xl 
            ${iconBg} text-white shadow-lg group-hover:scale-110 
            transition-transform duration-300 mb-4
          `}>
            <div className="text-3xl">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {description && (
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {description}
            </p>
          )}

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors">
              <span className="mr-2">Get Started</span>
              <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
      </motion.div>
    </Link>
  );
};

export default AudienceCard;