'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TrustBar: React.FC = () => {
  // Client logos and certifications
  const logos = [
    { name: "City of Toronto", type: "client" },
    { name: "ECOLOGO", type: "certification" },
    { name: "Los Angeles County", type: "client" },
    { name: "ISO 9001", type: "certification" },
    { name: "Vancouver Metro", type: "client" },
    { name: "ISO 14001", type: "certification" },
    { name: "Montreal Port", type: "client" },
    { name: "Fortune 500", type: "client" },
    { name: "OHSAS 18001", type: "certification" },
    { name: "Denver Municipality", type: "client" }
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Trusted by municipalities, Fortune 500 companies, and certified by leading organizations worldwide
          </p>
        </div>
        
        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [-1200, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] h-20"
              >
                {logo.type === 'certification' ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {logo.name.includes('ISO') ? 'ISO' : 'ECO'}
                      </span>
                    </div>
                    <div className="text-gray-700 font-semibold text-sm">
                      {logo.name}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {logo.name.split(' ')[0].substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {logo.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Statistics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-primary mb-2">50</div>
            <div className="text-gray-600">Years of Innovation</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Technical Support</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;