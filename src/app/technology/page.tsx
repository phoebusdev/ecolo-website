'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiDownload, FiTool, FiActivity, FiZap } from 'react-icons/fi';
import CTAButton from '@/components/CTAButton';

const TechnologyPage: React.FC = () => {
  const comparisonData = [
    {
      method: "Ecolo Counteractants",
      effectiveness: "95-99%",
      initialCost: "Medium",
      operatingCost: "Low", 
      environmentalImpact: "Environmentally Safe",
      maintenance: "Minimal",
      coverageArea: "Unlimited",
      isEcolo: true
    },
    {
      method: "Carbon Filters",
      effectiveness: "60-80%",
      initialCost: "High",
      operatingCost: "High",
      environmentalImpact: "Safe",
      maintenance: "Frequent Replacement",
      coverageArea: "Limited"
    },
    {
      method: "Masking Agents", 
      effectiveness: "20-40%",
      initialCost: "Low",
      operatingCost: "Medium",
      environmentalImpact: "Variable",
      maintenance: "Continuous Application",
      coverageArea: "Limited"
    },
    {
      method: "Ozone Generators",
      effectiveness: "50-70%", 
      initialCost: "High",
      operatingCost: "High",
      environmentalImpact: "Potentially Hazardous",
      maintenance: "Regular Service",
      coverageArea: "Limited"
    },
    {
      method: "Biological Treatment",
      effectiveness: "70-85%",
      initialCost: "Medium", 
      operatingCost: "Low",
      environmentalImpact: "Safe",
      maintenance: "Regular Monitoring",
      coverageArea: "Site-Specific"
    }
  ];

  const methods = [
    {
      name: "Chemical Neutralization",
      productLine: "AirSolution",
      description: "Water-based formulations that chemically bind with odor molecules at the molecular level",
      bestFor: "Immediate results, high-concentration areas",
      icon: <FiTool className="h-8 w-8" />
    },
    {
      name: "Biological Management", 
      productLine: "BioStreme",
      description: "Beneficial bacteria that consume odor-causing organic compounds",
      bestFor: "Long-term treatment, organic waste",
      icon: <FiActivity className="h-8 w-8" />
    },
    {
      name: "Vapor Diffusion",
      productLine: "XStreme", 
      description: "Essential oil-based vapor phase technology for airborne odor control",
      bestFor: "Large spaces, continuous protection",
      icon: <FiZap className="h-8 w-8" />
    }
  ];

  const highlights = [
    "ISO 9001:2015 Certified",
    "ISO 14001:2015 Environmental Management", 
    "In-house laboratory with PhD chemists",
    "Continuous product innovation since 1975",
    "Over 100 proprietary formulations"
  ];

  const targetMolecules = ["H₂S", "Mercaptans", "Ammonia", "Organic Sulfides"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6"
          >
            The Science of True Odor Neutralization
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how our counteractant technology actually transforms odor molecules into non-odorous compounds, 
            rather than simply masking them with stronger scents.
          </motion.p>
        </div>
      </section>

      {/* Problem with Masking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                The Problem with Masking
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Traditional masking agents simply cover odors with stronger scents, leading to temporary relief 
                and often creating worse smell combinations. They don&apos;t eliminate the source molecules.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiXCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Temporary relief only</span>
                </div>
                <div className="flex items-center">
                  <FiXCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Creates conflicting odor combinations</span>
                </div>
                <div className="flex items-center">
                  <FiXCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Doesn&apos;t address the root cause</span>
                </div>
                <div className="flex items-center">
                  <FiXCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Requires continuous application</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Masking Agent Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-red-700">Odor molecules remain present</span>
                  </div>
                  <div className="text-2xl text-center my-4">+</div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-red-700">Fragrance molecules overlay</span>
                  </div>
                  <div className="text-2xl text-center my-4">=</div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-red-700">Mixed, often worse odor perception</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecolo Solution - Counteractant Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              The Ecolo Solution - Counteractant Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Ecolo&apos;s active ingredients bind to and transform H₂S, mercaptans, and ammonia into larger, odorless molecules
            </motion.p>
          </div>

          {/* Animated Molecular Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          >
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Molecular Transformation Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Before */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-red-600 mb-4">Before Treatment</h4>
                <div className="space-y-3">
                  {targetMolecules.map((molecule, index) => (
                    <motion.div
                      key={molecule}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-red-100 rounded-full py-2 px-4 text-red-800 font-mono text-sm"
                    >
                      {molecule}
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">Small, volatile odor molecules</p>
              </div>

              {/* Process */}
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <FiTool className="h-8 w-8 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-primary mb-2">Counteractant Binding</h4>
                <p className="text-sm text-gray-600">Active ingredients chemically bind to odor molecules</p>
              </div>

              {/* After */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-secondary mb-4">After Treatment</h4>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-secondary/10 rounded-lg py-6 px-4 border-2 border-secondary/20"
                >
                  <div className="text-secondary font-mono text-lg mb-2">Large Molecule</div>
                  <div className="text-secondary text-sm">Non-volatile, odorless</div>
                </motion.div>
                <p className="text-sm text-gray-600 mt-4">Transformed into larger, odorless compounds</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 text-center mb-16"
          >
            Technology Comparison
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Method</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Effectiveness</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Initial Cost</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Operating Cost</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Environmental Impact</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Maintenance</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Coverage Area</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.method}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`border-t ${
                      row.isEcolo 
                        ? 'bg-primary/5 border-primary/20' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className={`px-6 py-4 font-semibold ${
                      row.isEcolo ? 'text-primary' : 'text-gray-900'
                    }`}>
                      {row.method}
                      {row.isEcolo && (
                        <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-white">
                          Our Solution
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.effectiveness}</td>
                    <td className="px-6 py-4 text-gray-700">{row.initialCost}</td>
                    <td className="px-6 py-4 text-gray-700">{row.operatingCost}</td>
                    <td className="px-6 py-4 text-gray-700">{row.environmentalImpact}</td>
                    <td className="px-6 py-4 text-gray-700">{row.maintenance}</td>
                    <td className="px-6 py-4 text-gray-700">{row.coverageArea}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Our Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 text-center mb-16"
          >
            Our Three Core Technological Approaches
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-primary">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{method.name}</h3>
                    <p className="text-primary font-medium text-sm">{method.productLine}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {method.description}
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-500 font-medium">Best For:</p>
                  <p className="text-sm text-gray-700">{method.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                R&D & Quality
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                50-year legacy, ISO-certified facilities, and continuous innovation drive our commitment 
                to developing the most effective odor control solutions in the industry.
              </p>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <FiCheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50</div>
                <div className="text-sm text-gray-700">Years of Innovation</div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                <div className="text-sm text-gray-700">Proprietary Formulations</div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">PhD</div>
                <div className="text-sm text-gray-700">Chemists In-House</div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">ISO</div>
                <div className="text-sm text-gray-700">Certified Facilities</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Need a Technical Data Sheet?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Download our comprehensive technology white paper with detailed molecular analysis, 
              case studies, and application guidelines.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Get Instant Access</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select className="px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">Select Industry</option>
                  <option value="wastewater">Wastewater</option>
                  <option value="solid-waste">Solid Waste</option>
                  <option value="cannabis">Cannabis</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="industrial">Industrial</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <CTAButton variant="accent" size="large" icon="external">
                <FiDownload className="mr-2 h-5 w-5" />
                Download Technology White Paper
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;