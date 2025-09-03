'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const productFamilies = [
  {
    name: "AirSolution",
    tagline: "Water-Based Counteractants",
    description: "Our flagship line of water-based odor neutralizers that chemically transform odor molecules into non-odorous compounds",
    icon: "💧",
    href: "/products/airsolution",
    applications: ["Wastewater treatment", "Transfer stations", "Industrial facilities"],
    keyBenefit: "Immediate odor neutralization"
  },
  {
    name: "XStreme",
    tagline: "Vapor Phase Technology", 
    description: "Essential oil-based vapor technology for continuous airborne odor control in large spaces",
    icon: "☁️",
    href: "/products/xstreme",
    applications: ["Large warehouses", "Processing plants", "Commercial spaces"],
    keyBenefit: "Continuous protection"
  },
  {
    name: "AirSensory",
    tagline: "Programmable Scent Management",
    description: "Smart dispensing systems for consistent odor control and scent marketing with WiFi connectivity",
    icon: "⏰",
    href: "/products/airsensory",
    applications: ["Retail spaces", "Hotels", "Offices"],
    keyBenefit: "Smart control"
  },
  {
    name: "BioStreme",
    tagline: "Biological Odor Management",
    description: "Beneficial bacteria formulations that digest odor-causing organic compounds naturally",
    icon: "🦠",
    href: "/products/biostreme",
    applications: ["Lagoons", "Grease traps", "Organic waste"],
    keyBenefit: "Long-term treatment"
  },
  {
    name: "GelTech",
    tagline: "Controlled Release Gel Systems",
    description: "Long-lasting gel formulations for passive odor control in challenging environments",
    icon: "🧪",
    href: "/products/geltech",
    applications: ["Remote locations", "Temporary solutions", "Maintenance areas"],
    keyBenefit: "30-60 day duration"
  },
  {
    name: "Pond-X",
    tagline: "Large Water Body Treatment",
    description: "Specialized formulations for treating lagoons, ponds, and holding tanks effectively",
    icon: "🌊",
    href: "/products/pond-x",
    applications: ["Lagoons", "Holding tanks", "Water treatment"],
    keyBenefit: "Large area coverage"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-heading font-light text-gray-900 mb-6"
            >
              Complete Odor Control
              <span className="text-primary block">Product Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Six specialized product families engineered to neutralize odors at the molecular level. 
              From immediate chemical neutralization to long-term biological solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-normal text-gray-700">50+ Years of Innovation</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-normal text-gray-700">100+ Proprietary Formulations</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-normal text-gray-700">ISO Certified</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Families Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFamilies.map((family, index) => (
              <motion.div
                key={family.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={family.href}>
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20 cursor-pointer h-full">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-4">{family.icon}</div>
                      <div>
                        <h3 className="text-2xl font-heading font-medium text-gray-900 group-hover:text-primary transition-colors">
                          {family.name}
                        </h3>
                        <p className="text-primary font-medium text-sm">{family.tagline}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {family.description}
                    </p>

                    {/* Key Benefit */}
                    <div className="bg-primary/5 rounded-lg p-4 mb-6">
                      <div className="text-sm font-medium text-primary mb-1">Key Benefit</div>
                      <div className="text-gray-900 font-medium">{family.keyBenefit}</div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <div className="text-sm font-normal text-gray-700 mb-2">Ideal Applications:</div>
                      <div className="flex flex-wrap gap-2">
                        {family.applications.map((app, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary font-normal group-hover:text-primary-dark transition-colors">
                        <span className="text-sm mr-2">Explore Products</span>
                        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                      
                      {/* Indicator dots */}
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">
              Three Core Technological Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products leverage advanced chemistry to neutralize odors, not mask them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-4">Chemical Neutralization</h3>
              <p className="text-gray-600 mb-4">Water-based formulations that chemically bind with odor molecules at the molecular level</p>
              <div className="text-sm text-primary font-medium">AirSolution Family</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🦠</span>
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-4">Biological Management</h3>
              <p className="text-gray-600 mb-4">Beneficial bacteria that consume odor-causing organic compounds naturally</p>
              <div className="text-sm text-green-600 font-medium">BioStreme Family</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💨</span>
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-4">Vapor Diffusion</h3>
              <p className="text-gray-600 mb-4">Essential oil-based vapor phase technology for airborne odor control</p>
              <div className="text-sm text-blue-600 font-medium">XStreme Family</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-light mb-4">
              Need Help Selecting the Right Product?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our application engineers will help you find the perfect solution for your specific odor control challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Contact Our Experts</span>
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/technology"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
              >
                Learn the Science
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}