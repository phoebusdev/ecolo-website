'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';

const industries = [
  {
    name: "Wastewater Treatment",
    href: "/industries/wastewater",
    icon: "🏭",
    description: "Comprehensive odor management from headworks to biosolids processing",
    challenges: "H₂S emissions, sludge processing odors, regulatory compliance",
    solutions: "Chemical neutralization, perimeter control, lagoon treatment",
    stats: {
      facilities: "500+ Facilities",
      reduction: "Up to 95% Odor Reduction",
      compliance: "100% Regulatory Compliance"
    }
  },
  {
    name: "Solid Waste & Landfills",
    href: "/industries/solid-waste",
    icon: "♻️",
    description: "Advanced odor control for transfer stations, landfills, and waste processing",
    challenges: "Methane emissions, leachate odors, working face control",
    solutions: "Perimeter misting systems, vapor phase technology",
    stats: {
      facilities: "300+ Sites",
      coverage: "Linear Miles Protected",
      efficiency: "24/7 Automated Control"
    }
  },
  {
    name: "Cannabis Cultivation",
    href: "/industries/cannabis",
    icon: "🌱",
    description: "Specialized terpene control while preserving product integrity",
    challenges: "Flowering odors, local ordinances, neighbor relations",
    solutions: "Targeted terpene neutralization, smart dispensing systems",
    stats: {
      facilities: "200+ Grows",
      compliance: "100% Ordinance Compliance",
      maintained: "Product Quality Preserved"
    }
  },
  {
    name: "Hospitality",
    href: "/industries/hospitality",
    icon: "🏨",
    description: "Guest experience enhancement through strategic scent management",
    challenges: "Kitchen exhaust, garbage areas, guest satisfaction",
    solutions: "Programmable dispensers, odor neutralization systems",
    stats: {
      properties: "1000+ Properties",
      satisfaction: "15% Guest Satisfaction Increase",
      brands: "Major Hotel Brands"
    }
  },
  {
    name: "Industrial Processing",
    href: "/industries/industrial-processing",
    icon: "⚙️",
    description: "Odor control for chemical processing, rendering, and manufacturing",
    challenges: "Chemical emissions, worker safety, community relations",
    solutions: "Industrial vapor systems, chemical counteractants",
    stats: {
      plants: "400+ Plants",
      safety: "Improved Worker Safety",
      emissions: "Emission Reduction"
    }
  },
  {
    name: "Food & Beverage",
    href: "/industries/food-beverage",
    icon: "🍽️",
    description: "Odor management for processing, wastewater pretreatment, and facilities",
    challenges: "Processing waste odors, fermentation smells, wastewater",
    solutions: "Biological treatment, chemical neutralization, vapor control",
    stats: {
      facilities: "250+ Facilities",
      processing: "All Processing Types",
      compliance: "FDA/USDA Compliant"
    }
  }
];

export default function IndustriesPage() {
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
              Industry-Specific
              <span className="text-primary block">Odor Control Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Every industry has unique odor challenges. Our specialized solutions are engineered 
              to address your specific regulatory, operational, and community requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
                <FiShield className="h-5 w-5 text-primary mr-2" />
                <span className="font-normal text-gray-700">Regulatory Compliance</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
                <FiTrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-normal text-gray-700">Proven ROI</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
                <FiUsers className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-normal text-gray-700">Community Relations</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={industry.href}>
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20 cursor-pointer h-full">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-4">{industry.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-medium text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{industry.description}</p>
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="space-y-4 mb-6">
                      <div className="bg-red-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-red-800 mb-1">Common Challenges</div>
                        <div className="text-red-700 text-sm">{industry.challenges}</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-green-800 mb-1">Our Solutions</div>
                        <div className="text-green-700 text-sm">{industry.solutions}</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(industry.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-medium text-primary">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary font-normal group-hover:text-primary-dark transition-colors">
                        <span className="text-sm mr-2">View Solutions</span>
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

      {/* Success Stories Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From municipal facilities to private enterprises, our solutions deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-medium text-primary mb-2">2000+</div>
              <div className="text-gray-700 font-normal">Facilities Served</div>
              <div className="text-gray-500 text-sm">Across all industries</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-medium text-green-600 mb-2">95%</div>
              <div className="text-gray-700 font-normal">Odor Reduction</div>
              <div className="text-gray-500 text-sm">Average effectiveness</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-medium text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-normal">Countries</div>
              <div className="text-gray-500 text-sm">Global presence</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-medium text-purple-600 mb-2">50</div>
              <div className="text-gray-700 font-normal">Years</div>
              <div className="text-gray-500 text-sm">Of innovation</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">
              Why Choose Ecolo for Your Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FiShield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-3">Regulatory Expertise</h3>
              <p className="text-gray-600">Deep understanding of industry-specific regulations, emission limits, and compliance requirements across all sectors.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FiTrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-3">Proven ROI</h3>
              <p className="text-gray-600">Measurable returns through reduced complaints, avoided fines, improved worker conditions, and enhanced community relations.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-3">Technical Support</h3>
              <p className="text-gray-600">Dedicated application engineers, 24/7 support, on-site assessments, and ongoing optimization for your specific challenges.</p>
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
              Ready to Solve Your Industry&apos;s Odor Challenges?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our industry experts will assess your specific needs and recommend the most effective solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Schedule Site Assessment</span>
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
