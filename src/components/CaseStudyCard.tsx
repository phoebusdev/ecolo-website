'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { ExpandingArrow } from '@/components/shared/icons';

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  result: string;
  resultDescription?: string;
  imageUrl: string;
  href: string;
  featured?: boolean;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  industry,
  challenge,
  result,
  resultDescription,
  imageUrl,
  href,
  featured = false,
  className = ''
}) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
        className={`
          group bg-white rounded-2xl shadow-xl hover:shadow-2xl 
          transition-all duration-300 overflow-hidden border border-gray-100
          hover:border-primary/30 cursor-pointer
          ${featured ? 'lg:flex lg:items-center' : ''}
          ${className}
        `}
      >
        {/* Image Section */}
        <div className={`relative overflow-hidden ${
          featured ? 'lg:w-1/2' : 'aspect-video'
        }`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          />
          
          {/* Industry Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-primary font-semibold px-3 py-1 rounded-full text-sm">
              {industry}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className={`p-8 ${featured ? 'lg:w-1/2 lg:p-10' : ''}`}>
          {/* Client Info */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              <span className="text-primary font-bold text-base">
                {client.split(' ').map(word => word[0]).join('').substring(0, 2)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                {client}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <FiMapPin className="h-3 w-3 mr-1" />
                <span>Municipal Facility</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h4 className={`font-heading font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors ${
            featured ? 'text-3xl' : 'text-2xl'
          }`}>
            {title}
          </h4>

          {/* Challenge */}
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Challenge</h5>
            <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
              {challenge}
            </p>
          </div>

          {/* Result */}
          <div className="mb-8">
            <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Result</h5>
            <div className="bg-secondary/10 rounded-xl p-6">
              <div className={`font-bold text-secondary mb-2 ${
                featured ? 'text-4xl' : 'text-3xl'
              }`}>
                {result}
              </div>
              {resultDescription && (
                <p className="text-gray-700 text-base">
                  {resultDescription}
                </p>
              )}
            </div>
          </div>

          {/* Read More Link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
              <span className="mr-3 text-lg">Read Full Case Study</span>
              <ExpandingArrow className="h-5 w-5 text-current" />
            </div>

            {featured && (
              <div className="hidden lg:flex space-x-1">
                <div className="w-2.5 h-2.5 bg-secondary/30 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-secondary/60 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
      </motion.div>
    </Link>
  );
};

export default CaseStudyCard;