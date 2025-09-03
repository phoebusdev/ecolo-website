'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiMapPin, FiStar, FiArrowRight, FiDownload, FiTrendingUp, FiPhone } from 'react-icons/fi';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import CTAButton from '@/components/CTAButton';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@1/countries-110m.json";

const currentPartners: Array<{ name: string; coordinates: [number, number]; status: string }> = [
  { name: "USA West", coordinates: [-120, 37], status: "Active Partner" },
  { name: "Eastern Canada", coordinates: [-75, 45], status: "Active Partner" },
  { name: "UAE", coordinates: [55, 25], status: "Active Partner" }
];

const opportunities: Array<{ name: string; coordinates: [number, number]; opportunity: string }> = [
  { name: "USA Southeast", coordinates: [-85, 33], opportunity: "High Growth" },
  { name: "Mexico", coordinates: [-102, 23], opportunity: "Emerging Market" },
  { name: "Western Europe", coordinates: [3, 50], opportunity: "Expansion" },
  { name: "Southeast Asia", coordinates: [110, 0], opportunity: "New Territory" }
];

export default function DistributorPageClient() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    website: '',
    current_business_type: '',
    target_territory: '',
    target_industries: [],
    annual_revenue_range: '',
    sales_team_size: '',
    years_in_business: '',
    current_product_lines: '',
    why_ecolo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, selectedOptions } = e.target;
    const values = Array.from(selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, [name]: values }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your application! We\'ll review it and respond within 48 hours.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      company_name: '',
      contact_name: '',
      email: '',
      phone: '',
      website: '',
      current_business_type: '',
      target_territory: '',
      target_industries: [],
      annual_revenue_range: '',
      sales_team_size: '',
      years_in_business: '',
      current_product_lines: '',
      why_ecolo: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-light text-white mb-6">
              Build Your Business with a <span className="text-accent">Global Leader</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our network of successful partners worldwide and grow with proven, science-backed odor control solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton variant="accent" size="large" href="#apply">
                Apply Now
              </CTAButton>
              <CTAButton variant="outline" size="large" href="#benefits">
                Learn More
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-light text-gray-900 mb-6"
            >
              The Ecolo Advantage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Five key reasons why our partners choose Ecolo for their odor control business
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiAward className="h-8 w-8" />,
                title: "Proven, Science-Backed Products",
                description: "50 years of R&D, proprietary formulations that outperform competitors with real, measurable results",
                color: "bg-primary"
              },
              {
                icon: <FiUsers className="h-8 w-8" />,
                title: "Extensive Training & Marketing Support",
                description: "Comprehensive onboarding, technical training, co-branded materials, and ongoing sales support",
                color: "bg-secondary"
              },
              {
                icon: <FiMapPin className="h-8 w-8" />,
                title: "Exclusive Territory Opportunities",
                description: "Protected territories with significant growth potential and first-mover advantage",
                color: "bg-accent"
              },
              {
                icon: <FiTrendingUp className="h-8 w-8" />,
                title: "High-Performance Margin Structure",
                description: "Industry-leading margins with volume incentives and performance bonuses",
                color: "bg-primary"
              },
              {
                icon: <FiPhone className="h-8 w-8" />,
                title: "World-Class Technical Support",
                description: "Direct access to our chemists and application engineers for customer solutions",
                color: "bg-secondary"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-medium text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-light text-gray-900 mb-6"
            >
              Our Global Partner Network
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Active partners worldwide and exciting new opportunities for growth
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
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
              
              {/* Current Partners */}
              {currentPartners.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={8} fill="#10B981" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={-15}
                    style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 400, fill: "#10B981" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
              
              {/* Opportunities */}
              {opportunities.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={8} fill="#F59E0B" stroke="#fff" strokeWidth={2} opacity={0.8} />
                  <text
                    textAnchor="middle"
                    y={-15}
                    style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 400, fill: "#F59E0B" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
            
            <div className="flex flex-col sm:flex-row gap-8 mt-6 justify-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-normal">Active Partners</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-normal">Partnership Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-light text-gray-900 mb-6"
            >
              Partner Success Stories
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                partner: "WasteControl Solutions",
                location: "California, USA",
                quote: "Partnering with Ecolo transformed our business. Their products solve problems others can't, and the support team treats us like family.",
                metric: "300% revenue growth in 3 years",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                name: "Mike Johnson, CEO"
              },
              {
                partner: "EnviroTech Middle East",
                location: "Dubai, UAE",
                quote: "The technical support from Ecolo is unmatched. They're true partners in our success, not just suppliers.",
                metric: "$2M in sales first year",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                name: "Sarah Al-Rahman, Director"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-primary font-normal">{testimonial.partner}</div>
                      <div className="text-gray-600 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-medium text-accent">{testimonial.metric.split(' ')[0]}</div>
                    <div className="text-gray-600 text-sm">{testimonial.metric.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-light text-gray-900 mb-6"
            >
              Your Journey to Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our proven 4-step process to get you up and running successfully
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: 1,
                title: "Initial Consultation",
                description: "Discuss your market, experience, and goals with our partnership team"
              },
              {
                number: 2,
                title: "Territory Analysis",
                description: "Evaluate market potential and define your protected territory"
              },
              {
                number: 3,
                title: "Agreement & Onboarding",
                description: "Formalize partnership and begin comprehensive training program"
              },
              {
                number: 4,
                title: "Launch & Support",
                description: "Go to market with full Ecolo backing and ongoing support"
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-medium mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading font-medium text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FiArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-light text-gray-900 mb-6"
            >
              Apply to Become a Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Tell us about your business and let&apos;s explore the opportunity together
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-normal text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-normal text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-normal text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-normal text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="current_business_type" className="block text-sm font-normal text-gray-700 mb-2">
                    Current Business Type *
                  </label>
                  <select
                    id="current_business_type"
                    name="current_business_type"
                    value={formData.current_business_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select Business Type</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Manufacturer's Rep">Manufacturer&apos;s Rep</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="target_territory" className="block text-sm font-normal text-gray-700 mb-2">
                    Target Territory *
                  </label>
                  <input
                    type="text"
                    id="target_territory"
                    name="target_territory"
                    value={formData.target_territory}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="e.g., Southeast USA, Western Europe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="annual_revenue_range" className="block text-sm font-normal text-gray-700 mb-2">
                    Annual Revenue Range
                  </label>
                  <select
                    id="annual_revenue_range"
                    name="annual_revenue_range"
                    value={formData.annual_revenue_range}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select Range</option>
                    <option value="<$1M">&lt;$1M</option>
                    <option value="$1-5M">$1-5M</option>
                    <option value="$5-10M">$5-10M</option>
                    <option value="$10M+">$10M+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="sales_team_size" className="block text-sm font-normal text-gray-700 mb-2">
                    Sales Team Size
                  </label>
                  <input
                    type="number"
                    id="sales_team_size"
                    name="sales_team_size"
                    value={formData.sales_team_size}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="target_industries" className="block text-sm font-normal text-gray-700 mb-2">
                  Target Industries (hold Ctrl/Cmd to select multiple)
                </label>
                <select
                  id="target_industries"
                  name="target_industries"
                  multiple
                  value={formData.target_industries}
                  onChange={handleMultiSelectChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors h-24"
                >
                  <option value="Wastewater">Wastewater</option>
                  <option value="Solid Waste">Solid Waste</option>
                  <option value="Cannabis">Cannabis</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Municipal">Municipal</option>
                </select>
              </div>

              <div>
                <label htmlFor="current_product_lines" className="block text-sm font-normal text-gray-700 mb-2">
                  Current Product Lines
                </label>
                <textarea
                  id="current_product_lines"
                  name="current_product_lines"
                  rows={3}
                  value={formData.current_product_lines}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Describe your current product portfolio"
                />
              </div>

              <div>
                <label htmlFor="why_ecolo" className="block text-sm font-normal text-gray-700 mb-2">
                  Why do you want to partner with Ecolo? *
                </label>
                <textarea
                  id="why_ecolo"
                  name="why_ecolo"
                  rows={4}
                  value={formData.why_ecolo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your interest in our partnership opportunity"
                />
              </div>

              <div className="pt-6">
                <CTAButton
                  variant="primary"
                  size="large"
                  fullWidth
                  loading={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </CTAButton>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  We&apos;ll review your application and respond within 48 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-light text-gray-900 mb-6"
            >
              Partner Resources
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Download comprehensive resources to learn more about our partnership opportunity
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Distributor Prospectus",
                description: "Complete overview of partnership opportunity",
                type: "PDF",
                icon: <FiDownload className="h-6 w-6" />
              },
              {
                title: "Product Catalog",
                description: "Full product line specifications",
                type: "PDF",
                icon: <FiDownload className="h-6 w-6" />
              },
              {
                title: "Technical Manual",
                description: "Detailed technical documentation",
                type: "PDF",
                icon: <FiDownload className="h-6 w-6" />
              },
              {
                title: "Marketing Toolkit",
                description: "Sales materials and brand assets",
                type: "ZIP",
                icon: <FiDownload className="h-6 w-6" />
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <span className="text-xs font-normal bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="text-primary font-normal text-sm flex items-center group-hover:text-primary-dark transition-colors">
                  Download Now
                  <FiArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}