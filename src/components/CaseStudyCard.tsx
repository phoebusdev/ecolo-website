'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

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
          group bg-white rounded-2xl shadow-lg hover:shadow-2xl 
          transition-all duration-300 overflow-hidden border border-gray-100
          hover:border-primary/20 cursor-pointer
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
        <div className={`p-6 ${featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
          {/* Client Info */}
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-primary font-bold text-sm">
                {client.split(' ').map(word => word[0]).join('').substring(0, 2)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {client}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <FiMapPin className="h-3 w-3 mr-1" />
                <span>Municipal Facility</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h4 className={`font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h4>

          {/* Challenge */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Challenge</h5>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {challenge}
            </p>
          </div>

          {/* Result */}
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Result</h5>
            <div className="bg-secondary/10 rounded-lg p-4">
              <div className={`font-bold text-secondary mb-1 ${
                featured ? 'text-3xl' : 'text-2xl'
              }`}>
                {result}
              </div>
              {resultDescription && (
                <p className="text-gray-700 text-sm">
                  {resultDescription}
                </p>
              )}
            </div>
          </div>

          {/* Read More Link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
              <span className="mr-2">Read Full Case Study</span>
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>

            {featured && (
              <div className="hidden lg:flex space-x-1">
                <div className="w-2 h-2 bg-secondary/30 rounded-full"></div>
                <div className="w-2 h-2 bg-secondary/60 rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
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