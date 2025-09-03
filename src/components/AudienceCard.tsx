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
          group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
          transition-all duration-300 p-10 text-center h-full border border-gray-100
          hover:border-primary/30 cursor-pointer overflow-hidden
          ${className}
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <div className="relative z-10 mb-8">
          <div className={`
            inline-flex items-center justify-center w-24 h-24 rounded-2xl 
            ${iconBg} text-white shadow-xl group-hover:scale-110 
            transition-transform duration-300 mb-6
          `}>
            <div className="text-4xl">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {description && (
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {description}
            </p>
          )}

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors">
              <span className="mr-3 text-lg">Get Started</span>
              <FiArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
      </motion.div>
    </Link>
  );
};

export default AudienceCard;