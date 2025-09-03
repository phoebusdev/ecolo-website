'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiSettings, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

const equipmentSystems = [
  {
    name: "AMC-5000",
    fullName: "Automated Misting Controller",
    href: "/equipment/amc-5000",
    icon: "🎛️",
    description: "High-capacity automated misting system for large perimeter applications",
    specs: {
      coverage: "Up to 10,000 linear feet",
      nozzles: "Up to 500 nozzles",
      pressure: "1000 PSI",
      tank: "55-550 gallons"
    },
    features: ["GPS-based seasonal adjustments", "Remote monitoring", "Multiple zone control", "Variable injection rates"],
    idealFor: "Landfill perimeters, large industrial sites",
    compatibleChemistry: ["AirSolution", "BioStreme"]
  },
  {
    name: "ACU.53",
    fullName: "Airborne Control Unit 53",
    href: "/equipment/acu-53",
    icon: "🌪️",
    description: "High-volume airborne control unit for industrial odor management",
    specs: {
      output: "53 gallons per day",
      coverage: "50,000 sq ft",
      dropletSize: "10-30 microns",
      power: "110V/single-phase"
    },
    features: ["Programmable scheduling", "Weather compensation", "Low maintenance", "Stainless steel construction"],
    idealFor: "Transfer stations, wastewater plants",
    compatibleChemistry: ["AirSolution", "XStreme"]
  },
  {
    name: "ACU.15",
    fullName: "Compact Control Unit 15",
    href: "/equipment/acu-15",
    icon: "📦",
    description: "Compact airborne control unit for smaller facilities and targeted applications",
    specs: {
      output: "15 gallons per day",
      coverage: "15,000 sq ft",
      power: "110V",
      dimensions: "24\" x 18\" x 36\""
    },
    features: ["Compact footprint", "Easy installation", "Timer control", "Low operating cost"],
    idealFor: "Small facilities, indoor applications",
    compatibleChemistry: ["AirSolution"]
  },
  {
    name: "AirPro Mini",
    fullName: "Programmable Mini Dispenser",
    href: "/equipment/airpro-mini",
    icon: "📱",
    description: "Smart programmable dispenser for commercial and office environments",
    specs: {
      coverage: "3,000 sq ft",
      battery: "2 x AA, 12-month life",
      programming: "7-day scheduler",
      mounting: "Wall or standalone"
    },
    features: ["WiFi enabled", "Mobile app control", "Usage analytics", "Programmable schedules"],
    idealFor: "Offices, restrooms, small commercial spaces",
    compatibleChemistry: ["AirSensory", "XStreme"]
  },
  {
    name: "AirPro Big",
    fullName: "Industrial Dispenser System",
    href: "/equipment/airpro-big",
    icon: "🏭",
    description: "Industrial-grade programmable dispenser for large commercial applications",
    specs: {
      coverage: "10,000 sq ft",
      power: "110V or battery",
      programming: "WiFi enabled, app control",
      capacity: "Large cartridge system"
    },
    features: ["Industrial durability", "Remote monitoring", "Advanced scheduling", "Multi-zone control"],
    idealFor: "Warehouses, large commercial spaces",
    compatibleChemistry: ["XStreme", "AirSensory"]
  },
  {
    name: "HydroFoamer",
    fullName: "Foam Application System",
    href: "/equipment/hydrofoamer",
    icon: "💨",
    description: "Specialized foam application system for vertical surfaces and drain treatment",
    specs: {
      foamExpansion: "10:1 to 100:1",
      output: "50 GPM",
      reach: "30 feet vertical",
      portability: "Wheeled unit"
    },
    features: ["Variable foam density", "Extended contact time", "Portable design", "Easy cleaning"],
    idealFor: "Drain cleaning, vertical surface treatment",
    compatibleChemistry: ["BioStreme"]
  }
];

export default function EquipmentPage() {
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
              className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6"
            >
              Advanced Delivery
              <span className="text-primary block">Equipment Systems</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Precision-engineered application equipment designed to maximize the effectiveness 
              of our odor control chemistry. From automated misting to smart dispensers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
                <FiSettings className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-gray-700">Automated Operation</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
                <FiTrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-gray-700">Maximum Efficiency</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
                <FiShield className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-700">Industrial Grade</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Systems Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipmentSystems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={system.href}>
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20 cursor-pointer h-full">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-4">{system.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                          {system.name}
                        </h3>
                        <p className="text-primary font-semibold text-sm mb-2">{system.fullName}</p>
                        <p className="text-gray-600 text-sm">{system.description}</p>
                      </div>
                    </div>

                    {/* Key Specs */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Key Specifications</div>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(system.specs).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Key Features</div>
                      <div className="grid grid-cols-2 gap-2">
                        {system.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <FiZap className="h-3 w-3 text-green-600 mr-1 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <div className="text-sm font-semibold text-blue-800 mb-1">Ideal Applications</div>
                      <div className="text-blue-700 text-sm">{system.idealFor}</div>
                    </div>

                    {/* Compatible Chemistry */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Compatible Chemistry:</div>
                      <div className="flex flex-wrap gap-2">
                        {system.compatibleChemistry.map((chem, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {chem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
                        <span className="text-sm mr-2">View Specifications</span>
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

      {/* Equipment Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Equipment by Application Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right delivery system for your specific odor control needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gray-50 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Large Scale Systems</h3>
              <p className="text-gray-600 mb-6">For landfills, wastewater plants, and industrial facilities requiring extensive coverage</p>
              <div className="space-y-2">
                <div className="text-primary font-medium">• AMC-5000 Misting Controller</div>
                <div className="text-primary font-medium">• ACU.53 High-Volume Unit</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gray-50 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Commercial Systems</h3>
              <p className="text-gray-600 mb-6">Perfect for commercial buildings, hotels, and mid-size facilities</p>
              <div className="space-y-2">
                <div className="text-green-600 font-medium">• ACU.15 Compact Unit</div>
                <div className="text-green-600 font-medium">• AirPro Big Dispenser</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-gray-50 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Specialized Systems</h3>
              <p className="text-gray-600 mb-6">Targeted solutions for specific applications and environments</p>
              <div className="space-y-2">
                <div className="text-blue-600 font-medium">• AirPro Mini Smart Dispenser</div>
                <div className="text-blue-600 font-medium">• HydroFoamer Application System</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Ecolo Equipment?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiSettings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Precision Engineering</h3>
              <p className="text-gray-600 text-sm">Designed specifically for optimal chemistry delivery and maximum odor control effectiveness</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Smart Automation</h3>
              <p className="text-gray-600 text-sm">GPS-based controls, weather compensation, and remote monitoring for optimal performance</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiShield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Industrial Durability</h3>
              <p className="text-gray-600 text-sm">Built to withstand harsh environments with stainless steel construction and weather resistance</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FiZap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Energy Efficient</h3>
              <p className="text-gray-600 text-sm">Low power consumption, battery options, and smart scheduling reduce operational costs</p>
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
            <h2 className="text-3xl font-heading font-bold mb-4">
              Need Help Selecting Equipment?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our application engineers will help you choose the right delivery system for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Get Equipment Consultation</span>
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
              >
                View Compatible Chemistry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
