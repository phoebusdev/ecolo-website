'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiAlertTriangle, FiTool, FiAward } from 'react-icons/fi';

interface PageProps {
  params: Promise<{ industry: string }>;
}

interface CaseStudy {
  client: string;
  challenge?: string;
  solution?: string;
  result: string;
  investment?: string;
  roi?: string;
}

interface IndustryData {
  page_header: string;
  icon: string;
  challenges: {
    title: string;
    items: string[];
  };
  solution?: {
    title: string;
    description: string;
    recommended_products: string[];
    recommended_equipment: string[];
  };
  solutions?: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
  };
  case_studies: CaseStudy[];
  benefits?: {
    title: string;
    items: string[];
  };
  cta?: string;
}

// Industry data from the content JSON
const industryData: Record<string, IndustryData> = {
  wastewater: {
    page_header: "Odor Control Solutions for Wastewater Treatment Facilities",
    icon: "🏭",
    challenges: {
      title: "The Challenge",
      items: [
        "H₂S emissions from treatment processes causing corrosion and health concerns",
        "Sludge processing creating intense organic odors",
        "Lagoon emissions affecting large areas",
        "Regulatory compliance and emission limits",
        "Community complaints and public relations",
        "Worker safety and OSHA requirements"
      ]
    },
    solution: {
      title: "The Ecolo Solution",
      description: "Comprehensive odor management from headworks to biosolids",
      recommended_products: [
        "AirSolution 9312 for general plant odor control",
        "AirSolution 9204 for high H₂S areas",
        "Pond-X for lagoon treatment",
        "BioStreme 2000 for digesters"
      ],
      recommended_equipment: [
        "AMC-5000 for perimeter control",
        "ACU.53 for building exhaust treatment",
        "HydroFoamer for wet well application"
      ]
    },
    case_studies: [
      {
        client: "City of Toronto WWTP",
        result: "90% reduction in odor complaints",
        investment: "$125,000",
        roi: "6 months (avoided fines)"
      },
      {
        client: "Los Angeles County Sanitation",
        result: "Achieved compliance with SCAQMD Rule 410",
        investment: "$280,000",
        roi: "Immediate compliance achieved"
      }
    ],
    cta: "Schedule a Free Site Assessment"
  },
  "solid-waste": {
    page_header: "Odor Control Solutions for Solid Waste & Landfills",
    icon: "♻️",
    challenges: {
      title: "The Challenge",
      items: [
        "Methane and landfill gas emissions",
        "Leachate collection system odors",
        "Transfer station and tipping floor odors",
        "Working face odor control",
        "Perimeter and property line compliance"
      ]
    },
    solution: {
      title: "The Ecolo Solution",
      description: "Comprehensive waste facility odor management",
      recommended_products: ["AirSolution 9312", "XStreme V100"],
      recommended_equipment: ["AMC-5000", "ACU.53"]
    },
    case_studies: [
      {
        client: "Metro Vancouver Transfer Station",
        result: "Eliminated property line violations",
        investment: "$85,000",
        roi: "8 months"
      }
    ]
  },
  cannabis: {
    page_header: "Odor Control Solutions for Cannabis Cultivation",
    icon: "🌱",
    challenges: {
      title: "The Challenge",
      items: [
        "Terpene emissions during flowering",
        "Harvest and drying room odors",
        "Local ordinance compliance",
        "Maintaining strain characteristics while controlling odor",
        "Neighbor relations in mixed-use areas"
      ]
    },
    solution: {
      title: "The Ecolo Solution",
      description: "Specialized terpene control while preserving product quality",
      recommended_products: ["AirSolution 415 Cannabis Terpene Control", "XStreme V200"],
      recommended_equipment: ["ACU.15", "AirPro Big"]
    },
    case_studies: [
      {
        client: "Denver Cultivation Facility",
        result: "100% ordinance compliance maintained",
        investment: "$45,000",
        roi: "Immediate compliance"
      }
    ]
  },
  hospitality: {
    page_header: "Odor Control Solutions for Hospitality",
    icon: "🏨",
    challenges: {
      title: "The Challenge",
      items: [
        "Kitchen exhaust and grease trap odors",
        "Garbage room and loading dock smells",
        "Guest satisfaction scores",
        "Brand standards compliance",
        "Multi-tenant building considerations"
      ]
    },
    solution: {
      title: "The Ecolo Solution",
      description: "Guest experience enhancement through strategic scent management",
      recommended_products: ["AirSolution 510", "AirSensory Pro"],
      recommended_equipment: ["AirPro Mini", "ACU.15"]
    },
    case_studies: [
      {
        client: "Hilton Downtown",
        result: "15% increase in guest satisfaction scores",
        investment: "$35,000",
        roi: "12 months"
      }
    ]
  },
  "industrial-processing": {
    page_header: "Odor Control Solutions for Industrial Processing",
    icon: "⚙️",
    challenges: {
      title: "The Challenge",
      items: [
        "Chemical processing emissions",
        "Rendering and protein processing",
        "Paint booth and coating operations",
        "Regulatory compliance"
      ]
    },
    solution: {
      title: "The Ecolo Solution",
      description: "Industrial-grade odor control for demanding environments",
      recommended_products: ["AirSolution 9312", "XStreme V100"],
      recommended_equipment: ["AMC-5000", "ACU.53"]
    },
    case_studies: [
      {
        client: "Industrial Processing Plant",
        result: "Zero emission violations in 2 years",
        investment: "$150,000",
        roi: "10 months"
      }
    ]
  },
  "food-beverage": {
    page_header: "Odor Control Solutions for Food & Beverage",
    icon: "🍽️",
    challenges: {
      title: "The Challenge",
      items: [
        "Processing waste odors",
        "Protein rendering smells",
        "Fermentation odors",
        "Wastewater pretreatment"
      ]
    },
    solution: {
      title: "The Ecolo Solution",
      description: "Food-safe odor control solutions",
      recommended_products: ["AirSolution 510", "BioStreme 2000"],
      recommended_equipment: ["ACU.15", "HydroFoamer"]
    },
    case_studies: [
      {
        client: "Food Processing Facility",
        result: "Eliminated community complaints",
        investment: "$65,000",
        roi: "6 months"
      }
    ]
  }
};

export default function IndustryPage({ params }: PageProps) {
  const [industry, setIndustry] = React.useState<string>('');
  
  React.useEffect(() => {
    params.then(({ industry }) => setIndustry(industry));
  }, [params]);

  const data = industryData[industry];

  if (!data) {
    return null; // Loading state while params resolve
  }

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
              <div className="text-6xl mr-4">{data.icon}</div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
                  {data.page_header}
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium text-gray-700">Industry Expert Solutions</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium text-gray-700">Regulatory Compliance</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium text-gray-700">Proven Results</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <FiAlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-heading font-bold text-gray-900">
                  {data.challenges.title}
                </h2>
              </div>
              <div className="space-y-4">
                {data.challenges.items.map((challenge: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            {data.solution && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <FiCheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-heading font-bold text-gray-900">
                    {data.solution.title}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6">{data.solution.description}</p>
                
                {/* Recommended Products */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Products:</h3>
                  <div className="space-y-2">
                    {data.solution.recommended_products.map((product: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <FiCheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Equipment */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Equipment:</h3>
                  <div className="space-y-2">
                    {data.solution.recommended_equipment.map((equipment: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <FiTool className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{equipment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients in your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.case_studies.map((study: CaseStudy, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <FiAward className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {study.client}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="text-sm font-semibold text-green-800 mb-1">Result Achieved</div>
                    <div className="text-green-700">{study.result}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-800">{study.investment}</div>
                      <div className="text-xs text-blue-600">Investment</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-800">{study.roi}</div>
                      <div className="text-xs text-purple-600">ROI Timeline</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              From assessment to optimization, we ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Site Assessment", desc: "Comprehensive evaluation of odor sources and impact areas" },
              { step: 2, title: "Solution Design", desc: "Custom system design based on your specific challenges" },
              { step: 3, title: "Installation", desc: "Professional installation with minimal disruption" },
              { step: 4, title: "Optimization", desc: "Ongoing monitoring and system optimization" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              {data.cta || "Ready to Get Started?"}
            </h2>
            <p className="text-xl text-primary-light mb-8">
              Our industry experts will work with you to design the perfect odor control solution for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Schedule Site Assessment</span>
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}