'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiTruck, FiAward } from 'react-icons/fi';
import DataTable from '@/components/DataTable';
import SelectorTool from '@/components/SelectorTool';

interface ProductFamilyPageProps {
  params: {
    family: string;
  };
}

interface Product {
  name?: string;
  sku?: string;
  description?: string;
  key_benefits?: string[];
  applications?: string[] | string;
  technical_specs?: Record<string, string>;
  image?: string;
  target_odors?: string;
  ph?: string;
  dilution_rate?: string;
  coverage?: string;
  scent_options?: string[];
  features?: string[];
  application_rate?: string;
  duration?: string;
  dosage?: string;
}

interface DeliverySystem {
  name: string;
  description: string;
  features?: string[];
  icon?: string;
}

interface FamilyData {
  header: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  };
  overview?: {
    description: string;
    key_features: string[];
    benefits: string[];
  };
  how_it_works?: {
    title: string;
    steps: string[];
  };
  key_benefits?: string[];
  product_selector?: {
    filters: {
      target_odor: string[];
      industry: string[];
      concentration?: string[];
      product_form?: string[];
      scent?: string[];
    };
  };
  products: Product[];
  recommended_delivery_systems?: DeliverySystem[];
  applications?: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
  } | string[];
}

// Product family data from the content JSON
const familyData: Record<string, FamilyData> = {
  airsolution: {
    header: {
      title: "AirSolution",
      subtitle: "Water-Based Counteractants",
      description: "Our flagship line of water-based odor neutralizers that chemically transform odor molecules into non-odorous compounds",
      icon: "💧"
    },
    how_it_works: {
      title: "How AirSolution Works",
      steps: [
        "Atomized micro-droplets are dispersed into the air",
        "Active ingredients bind to odor molecules (H₂S, ammonia, mercaptans)",
        "Chemical transformation creates larger, odorless molecules that fall out of breathing zone"
      ]
    },
    key_benefits: [
      "Immediate odor neutralization (not masking)",
      "Safe for people, pets, and plants",
      "ECOLOGO certified formulations available",
      "Dilutable concentrates for economical use",
      "Multiple scent options or neutral available"
    ],
    applications: [
      "Wastewater treatment plants",
      "Transfer stations",
      "Industrial facilities",
      "Commercial buildings",
      "Outdoor perimeter control"
    ],
    product_selector: {
      filters: {
        target_odor: ["H₂S", "Ammonia", "Mercaptans", "Terpenes", "Grease", "General Organic"],
        industry: ["Wastewater", "Solid Waste", "Cannabis", "Hospitality", "Industrial", "Municipal"],
        scent: ["Citrus", "Forest", "Cherry", "Neutral", "Fresh Linen", "Custom"]
      }
    },
    products: [
      {
        sku: "AirSolution 9204",
        name: "Heavy Duty Sulfur Control",
        target_odors: "H₂S, Mercaptans",
        ph: "7.0-8.0",
        dilution_rate: "1:100 to 1:500",
        coverage: "10,000 sq ft per gallon",
        scent_options: ["Citrus", "Neutral"],
        applications: "Wastewater, Industrial"
      },
      {
        sku: "AirSolution 9312",
        name: "Universal Odor Neutralizer",
        target_odors: "All organic odors",
        ph: "6.5-7.5",
        dilution_rate: "1:50 to 1:200",
        coverage: "5,000 sq ft per gallon",
        scent_options: ["Forest", "Cherry", "Neutral"],
        applications: "All industries"
      },
      {
        sku: "AirSolution 320",
        name: "Ammonia Neutralizer",
        target_odors: "Ammonia, Amines",
        ph: "6.0-7.0",
        dilution_rate: "1:100 to 1:300",
        coverage: "8,000 sq ft per gallon",
        scent_options: ["Neutral only"],
        applications: "Composting, Agriculture"
      },
      {
        sku: "AirSolution 415",
        name: "Cannabis Terpene Control",
        target_odors: "Terpenes, VOCs",
        ph: "7.0",
        dilution_rate: "1:200 to 1:400",
        coverage: "7,500 sq ft per gallon",
        scent_options: ["Light Citrus", "Neutral"],
        applications: "Cannabis facilities"
      },
      {
        sku: "AirSolution 510",
        name: "Grease & Kitchen Odor Control",
        target_odors: "Grease, Food odors",
        ph: "8.0-9.0",
        dilution_rate: "1:50 to 1:100",
        coverage: "3,000 sq ft per gallon",
        scent_options: ["Fresh Linen", "Citrus"],
        applications: "Hospitality, Restaurants"
      }
    ],
    recommended_delivery_systems: [
      {
        name: "AMC-5000",
        description: "Automated Misting Controller for large perimeter applications"
      },
      {
        name: "ACU.53",
        description: "High-volume airborne control unit for industrial sites"
      },
      {
        name: "ACU.15",
        description: "Compact unit for smaller facilities"
      }
    ]
  },
  xstreme: {
    header: {
      title: "XStreme",
      subtitle: "Vapor Phase Technology",
      description: "Essential oil-based vapor technology for continuous airborne odor control",
      icon: "☁️"
    },
    key_benefits: [
      "Continuous vapor phase protection",
      "Essential oil-based technology",
      "Large area coverage",
      "Minimal maintenance required"
    ],
    products: [
      {
        sku: "XStreme V100",
        name: "Industrial Vapor",
        applications: "Large warehouses, Processing plants"
      },
      {
        sku: "XStreme V200",
        name: "Commercial Vapor",
        applications: "Retail, Offices, Hotels"
      }
    ],
    recommended_delivery_systems: [
      { name: "AirPro Mini", description: "Compact vapor dispenser" },
      { name: "AirPro Big", description: "Industrial vapor dispenser" }
    ]
  },
  airsensory: {
    header: {
      title: "AirSensory",
      subtitle: "Programmable Scent Management",
      description: "Smart dispensing systems for consistent odor control and scent marketing",
      icon: "⏰"
    },
    key_benefits: [
      "WiFi-enabled smart control",
      "Mobile app management",
      "Usage analytics and reporting",
      "Programmable schedules"
    ],
    products: [
      {
        sku: "AirSensory Pro",
        name: "Smart Scent Dispenser",
        features: ["WiFi enabled", "Mobile app control", "Usage analytics"]
      }
    ]
  },
  biostreme: {
    header: {
      title: "BioStreme",
      subtitle: "Biological Odor Management",
      description: "Beneficial bacteria formulations that digest odor-causing organic compounds",
      icon: "🦠"
    },
    key_benefits: [
      "Natural biological treatment",
      "Long-term odor control",
      "Environmentally safe bacteria",
      "Reduces organic waste buildup"
    ],
    products: [
      {
        sku: "BioStreme 2000",
        name: "Lagoon Treatment",
        application_rate: "1 gallon per 100,000 gallons water"
      },
      {
        sku: "BioStreme 3000",
        name: "Grease Trap Treatment",
        application_rate: "4 oz per trap weekly"
      }
    ]
  },
  geltech: {
    header: {
      title: "GelTech",
      subtitle: "Controlled Release Gel Systems",
      description: "Long-lasting gel formulations for passive odor control",
      icon: "🧪"
    },
    key_benefits: [
      "30-60 day duration",
      "No power required",
      "Weather resistant",
      "Passive odor control"
    ],
    products: [
      {
        sku: "GelTech Block",
        name: "Controlled Release Gel Block",
        duration: "30-60 days",
        coverage: "1,000 sq ft"
      }
    ]
  },
  "pond-x": {
    header: {
      title: "Pond-X",
      subtitle: "Large Water Body Treatment",
      description: "Specialized formulations for treating lagoons, ponds, and holding tanks",
      icon: "🌊"
    },
    key_benefits: [
      "Large water body treatment",
      "Lagoon odor control",
      "Concentrated formulations",
      "Cost-effective dosing"
    ],
    products: [
      {
        sku: "Pond-X Ultra",
        name: "Lagoon Treatment Concentrate",
        dosage: "1 gallon per acre-foot"
      }
    ]
  }
};

export default function ProductFamilyPage({ params }: ProductFamilyPageProps) {
  const [filters, setFilters] = useState({});
  const family = familyData[params.family];

  if (!family) {
    notFound();
  }

  const filteredProducts = family.products?.filter((product: Product) => {
    if (!filters || Object.keys(filters).length === 0) return true;
    
    // Basic filtering logic - can be enhanced
    for (const [category, values] of Object.entries(filters)) {
      const filterValues = values as string[];
      if (filterValues.length === 0) continue;
      
      // Check if product matches any of the filter values
      let matches = false;
      if (category === 'target_odor' && product.target_odors) {
        matches = filterValues.some(value => product.target_odors!.includes(value));
      } else if (category === 'applications' && product.applications) {
        const applications = Array.isArray(product.applications) ? product.applications : [product.applications];
        matches = filterValues.some(value => applications.includes(value));
      }
      
      if (!matches) return false;
    }
    
    return true;
  }) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="text-6xl mr-4">{family.header.icon}</div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
                  {family.header.title}
                </h1>
                <p className="text-xl text-primary font-semibold">{family.header.subtitle}</p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              {family.header.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {family.how_it_works && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                {family.how_it_works.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {family.how_it_works.steps.map((step: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits */}
      {family.key_benefits && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {family.key_benefits.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <FiCheck className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Selector */}
      {family.product_selector && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SelectorTool
              filters={family.product_selector.filters}
              onFiltersChange={setFilters}
            />
          </div>
        </section>
      )}

      {/* Product Data Table */}
      {family.products && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DataTable products={filteredProducts} />
          </div>
        </section>
      )}

      {/* Recommended Delivery Systems */}
      {family.recommended_delivery_systems && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Recommended Delivery Systems
              </h2>
              <p className="text-xl text-gray-600">
                Optimize performance with our engineered application equipment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {family.recommended_delivery_systems.map((system: DeliverySystem, index: number) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTruck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                    {system.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{system.description}</p>
                  <Link
                    href={`/equipment/${system.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                  >
                    View Specifications
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {family.applications && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-xl text-white p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Ideal Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.isArray(family.applications) 
                  ? family.applications.map((application: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <FiAward className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        <span>{application}</span>
                      </motion.div>
                    ))
                  : typeof family.applications === 'object' && family.applications.items
                    ? family.applications.items.map((application, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <FiAward className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                          <span>{application.name}</span>
                        </motion.div>
                      ))
                    : null
                }
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Implement {family.header.title}?
            </h2>
            <p className="text-xl text-primary-light mb-8">
              Our technical team will help you select the right products and application methods for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Get Technical Support</span>
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}