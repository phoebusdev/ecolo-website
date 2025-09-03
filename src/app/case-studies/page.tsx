'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiFilter, FiMapPin, FiTrendingUp } from 'react-icons/fi';

const caseStudies = [
  {
    id: "toronto-wastewater",
    title: "City of Toronto Wastewater Plant Success",
    client: "City of Toronto",
    industry: "Wastewater",
    location: "Toronto, Canada",
    challenge: "Residents complained about odors from the Ashbridges Bay Treatment Plant affecting nearby communities",
    solution: "Installed perimeter misting system with AirSolution 9312 and AMC-5000 controller",
    result: "90% reduction in odor complaints within 60 days",
    investment: "$125,000",
    roi: "6 months (avoided fines)",
    productFamily: "AirSolution",
    region: "North America",
    image: "wastewater_plant.jpg"
  },
  {
    id: "denver-cannabis",
    title: "Denver Cannabis Cultivation Compliance",
    client: "GreenLeaf Cultivation",
    industry: "Cannabis",
    location: "Denver, Colorado",
    challenge: "City ordinance required zero detectable odor at property line during flowering season",
    solution: "AirSolution 415 Cannabis Terpene Control with strategically placed ACU.15 units",
    result: "100% compliance maintained, zero violations in 18 months",
    investment: "$45,000",
    roi: "Immediate compliance achieved",
    productFamily: "AirSolution",
    region: "North America",
    image: "cannabis_facility.jpg"
  },
  {
    id: "hilton-hospitality",
    title: "Hilton Downtown Guest Satisfaction",
    client: "Hilton Downtown",
    industry: "Hospitality",
    location: "Vancouver, Canada", 
    challenge: "Kitchen exhaust affecting outdoor dining area and guest complaints about garbage room odors",
    solution: "AirSolution 510 with rooftop ACU.15 plus AirSensory Pro dispensers in common areas",
    result: "15% increase in guest satisfaction scores, elimination of odor complaints",
    investment: "$35,000",
    roi: "12 months through improved ratings",
    productFamily: "AirSolution",
    region: "North America",
    image: "hotel_exterior.jpg"
  },
  {
    id: "vancouver-transfer-station",
    title: "Metro Vancouver Solid Waste Success",
    client: "Metro Vancouver Transfer Station",
    industry: "Solid Waste",
    location: "Vancouver, Canada",
    challenge: "Property line odor violations and community complaints from transfer operations",
    solution: "AMC-5000 perimeter misting system with AirSolution 9312 neutralizer",
    result: "Eliminated property line violations, zero complaints in 2 years",
    investment: "$85,000",
    roi: "8 months (avoided penalties)",
    productFamily: "AirSolution",
    region: "North America",
    image: "transfer_station.jpg"
  },
  {
    id: "singapore-food-processing",
    title: "Singapore Food Processing Plant",
    client: "Asia Pacific Foods",
    industry: "Food & Beverage",
    location: "Singapore",
    challenge: "Protein processing odors affecting neighboring residential areas",
    solution: "Combination of AirSolution 510 and BioStreme 2000 for wastewater pretreatment",
    result: "Eliminated community complaints, achieved regulatory compliance",
    investment: "$65,000",
    roi: "6 months",
    productFamily: "AirSolution",
    region: "APAC",
    image: "food_processing.jpg"
  },
  {
    id: "dubai-industrial",
    title: "Dubai Industrial Park Success",
    client: "Emirates Industrial Complex",
    industry: "Industrial",
    location: "Dubai, UAE",
    challenge: "Multiple industrial facilities creating cumulative odor impact",
    solution: "Large-scale AMC-5000 system with multiple zones and XStreme V100 vapor technology",
    result: "Zero emission violations in 2 years of operation",
    investment: "$150,000",
    roi: "10 months",
    productFamily: "XStreme", 
    region: "Middle East",
    image: "industrial_complex.jpg"
  }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];
  const products = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.productFamily)))];
  const regions = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.region)))];

  const filteredCaseStudies = caseStudies.filter(cs => {
    return (selectedIndustry === 'All' || cs.industry === selectedIndustry) &&
           (selectedProduct === 'All' || cs.productFamily === selectedProduct) &&
           (selectedRegion === 'All' || cs.region === selectedRegion);
  });

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
              Real Results from
              <span className="text-primary block">Real Customers</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Explore success stories from clients worldwide who have solved their odor challenges 
              with Ecolo&apos;s proven solutions and achieved measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center mb-4">
              <FiFilter className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Filter Case Studies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Product Family</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  {products.map(product => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/case-studies/${study.id}`}>
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 cursor-pointer h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <FiMapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{study.location}</span>
                      </div>
                      <div className="flex space-x-1">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-medium text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-primary font-medium text-sm mb-3">{study.client}</p>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {study.challenge}
                    </p>

                    {/* Results Highlight */}
                    <div className="bg-green-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center mb-1">
                        <FiTrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-sm font-medium text-green-800">Key Result</span>
                      </div>
                      <p className="text-green-700 text-sm">{study.result}</p>
                    </div>

                    {/* Investment & ROI */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center bg-gray-50 rounded-lg p-2">
                        <div className="text-lg font-medium text-primary">{study.investment}</div>
                        <div className="text-xs text-gray-500">Investment</div>
                      </div>
                      <div className="text-center bg-gray-50 rounded-lg p-2">
                        <div className="text-lg font-medium text-green-600">{study.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-normal">
                          {study.productFamily}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-primary font-normal group-hover:text-primary-dark transition-colors">
                        <span className="text-sm mr-1">Read More</span>
                        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">
              Proven Track Record of Success
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-medium text-primary mb-2">2000+</div>
              <div className="text-gray-700">Successful Installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium text-green-600 mb-2">95%</div>
              <div className="text-gray-700">Average Odor Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium text-purple-600 mb-2">12</div>
              <div className="text-gray-700">Months Avg ROI</div>
            </div>
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
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you achieve similar results at your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Schedule Your Assessment</span>
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
              >
                Explore Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
