'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiSettings, FiTool, FiMapPin } from 'react-icons/fi';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import HeroVideo from '@/components/HeroVideo';
import AudienceCard from '@/components/AudienceCard';
import TrustBar from '@/components/TrustBar';
import CTAButton from '@/components/CTAButton';
import ProductCard from '@/components/ProductCard';
import CaseStudyCard from '@/components/CaseStudyCard';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@1/countries-110m.json";

const markers: Array<{ name: string; coordinates: [number, number] }> = [
  { name: "Montreal", coordinates: [-73.6, 45.5] },
  { name: "Houston", coordinates: [-95.4, 29.8] },
  { name: "Shanghai", coordinates: [121.5, 31.2] },
];

export default function Home() {
  const productFamilies = [
    {
      name: "AirSolution",
      tagline: "Water-Based Counteractants",
      description: "Chemical odor neutralizers that transform molecules at the molecular level",
      icon: "💧",
      href: "/products/airsolution"
    },
    {
      name: "XStreme",
      tagline: "Vapor Phase Technology", 
      description: "Essential oil-based vapor technology for continuous airborne control",
      icon: "☁️",
      href: "/products/xstreme"
    },
    {
      name: "AirSensory",
      tagline: "Programmable Dispensers",
      description: "Smart dispensing systems for consistent odor control and scent marketing",
      icon: "⏰",
      href: "/products/airsensory"
    },
    {
      name: "BioStreme",
      tagline: "Biological Solutions",
      description: "Beneficial bacteria formulations that digest odor-causing compounds",
      icon: "🦠",
      href: "/products/biostreme"
    },
    {
      name: "GelTech",
      tagline: "Controlled Release Gels",
      description: "Long-lasting gel formulations for passive odor control",
      icon: "🧪",
      href: "/products/geltech"
    },
    {
      name: "Pond-X",
      tagline: "Lagoon Treatment",
      description: "Specialized formulations for treating lagoons and holding tanks",
      icon: "🌊",
      href: "/products/pond-x"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <HeroVideo
          headline="Advanced Odor Neutralization. Not Masking."
          subheadline="Global leader in science-driven odor control solutions for over 50 years"
          ctaText="Explore Solutions"
          ctaLink="#solutions"
        />
      </section>

      {/* Main Content */}
      <div id="content">
        {/* Audience Navigator Section */}
        <section id="solutions" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8"
              >
                Find Your Solution
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto"
              >
                Whether you&apos;re a distributor, facility manager, or researcher, we have the right odor control solution for your needs.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <AudienceCard
                  title="I Am a Distributor / OEM"
                  description="Partner with us to grow your business with proven, science-backed odor control solutions"
                  href="/distributor"
                  icon={<FiUsers />}
                  iconBg="bg-accent"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <AudienceCard
                  title="I Need a Solution for My Facility"
                  description="Discover industry-specific solutions tailored to your operational challenges"
                  href="/industries"
                  icon={<FiSettings />}
                  iconBg="bg-primary"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <AudienceCard
                  title="I Want to Learn the Science"
                  description="Explore our counteractant technology and understand how true neutralization works"
                  href="/technology"
                  icon={<FiTool />}
                  iconBg="bg-secondary"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Product Family Showcase */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8"
              >
                Our Product Families
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto"
              >
                Six specialized product families, each engineered for specific applications and odor control challenges.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {productFamilies.map((family, index) => (
                <motion.div
                  key={family.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    name={family.name}
                    tagline={family.tagline}
                    description={family.description}
                    icon={family.icon}
                    href={family.href}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <CTAButton variant="primary" size="large" href="/products">
                View All Products
              </CTAButton>
            </motion.div>
          </div>
        </section>

        {/* Global Footprint Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8"
              >
                Global Footprint
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8"
              >
                Serving customers in 50+ countries with local support and global expertise.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-12 mb-16"
            >
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 100,
                  center: [0, 20]
                }}
                className="w-full h-96"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E5E7EB"
                        stroke="#D1D5DB"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#0066CC" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle r={8} fill="#0066CC" stroke="#fff" strokeWidth={2} />
                    <text
                      textAnchor="middle"
                      y={-15}
                      style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 500, fill: "#374151" }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </motion.div>

            {/* Regional Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {[
                { region: "North America", countries: 2, highlight: true },
                { region: "APAC", countries: 15, highlight: false },
                { region: "Middle East", countries: 8, highlight: false },
                { region: "Europe", countries: 12, highlight: false },
              ].map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl p-8 shadow-xl ${
                    region.highlight ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <FiMapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{region.region}</h3>
                  <p className="text-2xl font-bold text-primary mb-1">{region.countries}</p>
                  <p className="text-gray-600 text-sm">Countries Served</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8"
              >
                Success Stories
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto"
              >
                Real results from facilities worldwide who chose Ecolo for their odor control challenges.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <CaseStudyCard
                title="Municipal Wastewater Success"
                client="City of Toronto"
                industry="Wastewater"
                challenge="Residents complained about odors from the Ashbridges Bay Treatment Plant affecting the surrounding community"
                result="90% Reduction in Odor Complaints"
                resultDescription="Within 60 days of implementing our perimeter misting system"
                imageUrl="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                href="/case-studies/toronto-wastewater"
                featured
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <CTAButton variant="ghost" size="large" href="/case-studies">
                View All Case Studies
              </CTAButton>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-gradient-to-br from-primary to-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-heading font-bold text-white mb-8"
            >
              Ready to Eliminate Odor?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl text-blue-100 max-w-4xl mx-auto mb-10"
            >
              Contact our experts today for a free consultation and discover how our proven solutions can solve your odor control challenges.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <CTAButton variant="accent" size="large" href="/contact">
                Contact Our Experts
              </CTAButton>
              
              <CTAButton variant="outline" size="large" href="/distributor">
                Become a Partner
              </CTAButton>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
