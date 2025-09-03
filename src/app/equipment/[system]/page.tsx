'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiDownload } from 'react-icons/fi';

interface PageProps {
  params: Promise<{ system: string }>;
}

interface SystemData {
  name: string;
  icon: string;
  description: string;
  specs: Record<string, string>;
  features: string[];
  applications?: string[];
  benefits?: string[];
  image?: string;
  brochure?: string;
  idealFor?: string;
  compatibleChemistry?: string[];
}

const systemData: Record<string, SystemData> = {
  'amc-5000': {
    name: "AMC-5000 Automated Misting Controller",
    icon: "🎛️",
    description: "High-capacity automated misting system for large perimeter applications",
    specs: {
      coverage: "Up to 10,000 linear feet",
      nozzles: "Up to 500 nozzles", 
      pressure: "1000 PSI",
      tankCapacity: "55-550 gallons",
      power: "220V/3-phase",
      control: "PLC with HMI touchscreen"
    },
    features: [
      "GPS-based seasonal adjustments",
      "Remote monitoring capability", 
      "Multiple zone control",
      "Variable injection rates"
    ],
    idealFor: "Landfill perimeters, large industrial sites",
    compatibleChemistry: ["AirSolution", "BioStreme"]
  },
  'acu-53': {
    name: "ACU.53 Airborne Control Unit",
    icon: "🌪️",
    description: "High-volume airborne control unit for industrial odor management",
    specs: {
      output: "53 gallons per day",
      coverage: "50,000 sq ft",
      dropletSize: "10-30 microns",
      power: "110V/single-phase",
      dimensions: "48\" x 24\" x 60\""
    },
    features: [
      "Programmable scheduling",
      "Weather compensation",
      "Low maintenance design",
      "Stainless steel construction"
    ],
    idealFor: "Transfer stations, wastewater plants",
    compatibleChemistry: ["AirSolution", "XStreme"]
  },
  'acu-15': {
    name: "ACU.15 Compact Control Unit",
    icon: "📦",
    description: "Compact airborne control unit for smaller facilities",
    specs: {
      output: "15 gallons per day",
      coverage: "15,000 sq ft", 
      power: "110V",
      dimensions: "24\" x 18\" x 36\""
    },
    features: [
      "Compact footprint",
      "Easy installation",
      "Timer control",
      "Low operating cost"
    ],
    idealFor: "Small facilities, indoor applications",
    compatibleChemistry: ["AirSolution"]
  },
  'airpro-mini': {
    name: "AirPro Mini Programmable Dispenser",
    icon: "📱",
    description: "Smart programmable dispenser for commercial environments",
    specs: {
      coverage: "3,000 sq ft",
      battery: "2 x AA, 12-month life",
      programming: "7-day scheduler",
      mounting: "Wall or standalone"
    },
    features: [
      "WiFi enabled",
      "Mobile app control", 
      "Usage analytics",
      "Programmable schedules"
    ],
    idealFor: "Offices, restrooms, small commercial",
    compatibleChemistry: ["AirSensory", "XStreme"]
  },
  'airpro-big': {
    name: "AirPro Big Industrial Dispenser",
    icon: "🏭",
    description: "Industrial-grade programmable dispenser for large spaces",
    specs: {
      coverage: "10,000 sq ft",
      power: "110V or battery",
      programming: "WiFi enabled, app control",
      capacity: "Large cartridge system"
    },
    features: [
      "Industrial durability",
      "Remote monitoring",
      "Advanced scheduling", 
      "Multi-zone control"
    ],
    idealFor: "Warehouses, large commercial spaces",
    compatibleChemistry: ["XStreme", "AirSensory"]
  },
  'hydrofoamer': {
    name: "HydroFoamer Foam Application System",
    icon: "💨",
    description: "Specialized foam application system for vertical surfaces",
    specs: {
      foamExpansion: "10:1 to 100:1",
      output: "50 GPM",
      reach: "30 feet vertical",
      portability: "Wheeled unit"
    },
    features: [
      "Variable foam density",
      "Extended contact time",
      "Portable design",
      "Easy cleaning"
    ],
    idealFor: "Drain cleaning, vertical surface treatment",
    compatibleChemistry: ["BioStreme"]
  }
};

export default function EquipmentSystemPage({ params }: PageProps) {
  const [system, setSystem] = React.useState<string>('');
  
  React.useEffect(() => {
    params.then(({ system }) => setSystem(system));
  }, [params]);

  const data = systemData[system];

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl mr-4">{data.icon}</div>
              <h1 className="text-4xl md:text-6xl font-heading font-light text-gray-900">
                {data.name}
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-light text-gray-900 mb-8">Technical Specifications</h2>
              <div className="space-y-6">
                {Object.entries(data.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="text-gray-700 font-normal capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-primary font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-light text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {data.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <FiCheck className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {data.idealFor && (
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-lg font-medium text-blue-900 mb-2">Ideal Applications</h4>
                  <p className="text-blue-800">{data.idealFor}</p>
                </div>
              )}

              {data.compatibleChemistry && (
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Compatible Chemistry</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.compatibleChemistry.map((chem: string, idx: number) => (
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-normal">
                        {chem}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-light mb-4">
            Ready to Install {data.name}?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Contact our technical team for installation guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              <span>Get Installation Support</span>
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center">
              <FiDownload className="mr-2 h-5 w-5" />
              Download Spec Sheet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}