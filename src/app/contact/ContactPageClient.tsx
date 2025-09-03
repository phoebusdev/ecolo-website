'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiUsers, FiTool, FiHeadphones, FiStar, FiGlobe } from 'react-icons/fi';
import CTAButton from '@/components/CTAButton';

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry_type: '',
    industry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiry_type: '',
      industry: '',
      message: ''
    });
  };

  const departments = [
    {
      name: "General Inquiries",
      email: "info@ecolo.com",
      phone: "+1-514-555-0100",
      hours: "Mon-Fri 8AM-6PM EST",
      icon: <FiUsers className="h-8 w-8" />,
      color: "bg-primary",
      description: "Product information, pricing, and general questions"
    },
    {
      name: "Sales & Distributor Opportunities",
      email: "sales@ecolo.com",
      phone: "+1-514-555-0101",
      hours: "Mon-Fri 8AM-6PM EST",
      icon: <FiTool className="h-8 w-8" />,
      color: "bg-secondary",
      description: "New customer inquiries and partnership opportunities",
      ctaLink: "/distributor"
    },
    {
      name: "Technical Support",
      email: "support@ecolo.com",
      phone: "+1-514-555-0102",
      hours: "24/7 Emergency Support Available",
      icon: <FiHeadphones className="h-8 w-8" />,
      color: "bg-accent",
      description: "Product support, troubleshooting, and technical guidance",
      highlight: "24-hour response guarantee"
    }
  ];

  const offices = [
    {
      name: "Canada Headquarters",
      address: "123 Innovation Drive, Montreal, QC H2X 3Y5, Canada",
      phone: "+1-514-555-0100",
      fax: "+1-514-555-0199",
      coordinates: [45.5017, -73.5673],
      timezone: "EST (UTC-5)",
      isHQ: true
    },
    {
      name: "USA Office",
      address: "456 Industrial Blvd, Houston, TX 77001, USA",
      phone: "+1-713-555-0200",
      fax: "+1-713-555-0299",
      coordinates: [29.7604, -95.3698],
      timezone: "CST (UTC-6)",
      isHQ: false
    },
    {
      name: "China Office",
      address: "789 Technology Park, Shanghai 200120, China",
      phone: "+86-21-5555-0300",
      fax: "+86-21-5555-0399",
      coordinates: [31.2304, 121.4737],
      timezone: "CST (UTC+8)",
      isHQ: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
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
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              Get in Touch with <span className="text-accent">Our Experts</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Whether you need technical support, product information, or want to explore partnership opportunities, we&apos;re here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              How Can We Help?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Choose the department that best matches your needs for the fastest response
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                  dept.highlight ? 'border-accent/30 ring-2 ring-accent/10' : 'border-gray-100 hover:border-primary/20'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl ${dept.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{dept.name}</h3>
                    {dept.highlight && (
                      <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                        {dept.highlight}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{dept.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FiMail className="h-5 w-5 text-gray-400 mr-3" />
                    <a href={`mailto:${dept.email}`} className="text-primary hover:text-primary-dark transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FiPhone className="h-5 w-5 text-gray-400 mr-3" />
                    <a href={`tel:${dept.phone}`} className="text-primary hover:text-primary-dark transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FiClock className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">{dept.hours}</span>
                  </div>
                </div>
                
                {dept.ctaLink && (
                  <CTAButton variant="primary" size="small" href={dept.ctaLink} className="w-full">
                    Learn More
                  </CTAButton>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              Send Us a Message
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select inquiry type</option>
                    {[
                      "General Information",
                      "Request a Quote",
                      "Become a Distributor",
                      "Technical Support",
                      "Schedule Site Assessment"
                    ].map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select industry</option>
                    {[
                      "Wastewater",
                      "Solid Waste",
                      "Cannabis",
                      "Hospitality",
                      "Industrial",
                      "Other"
                    ].map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your odor control challenge or inquiry..."
                />
              </div>

              <div className="pt-4">
                <CTAButton
                  variant="primary"
                  size="large"
                  fullWidth
                  loading={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </CTAButton>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6"
            >
              Our Global Offices
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Visit us at one of our three strategic locations worldwide
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  office.isHQ ? 'border-2 border-primary/30 ring-2 ring-primary/10' : 'border border-gray-100'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg text-white mr-4 ${
                    office.isHQ ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900">{office.name}</h3>
                    {office.isHQ && (
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded-full mt-1 inline-block">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Embedded Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FiGlobe className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">{office.coordinates[0]}, {office.coordinates[1]}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiMapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FiPhone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-primary hover:text-primary-dark transition-colors text-sm">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FiMail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Fax: {office.fax}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FiClock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{office.timezone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Support Highlight */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-12"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-6 bg-white/20 rounded-full">
                <FiHeadphones className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              24/7 Emergency Support Available
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Critical odor issues don&apos;t wait for business hours. Our technical support team is available around the clock for emergency situations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <div className="flex items-center text-white">
                <FiStar className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="font-semibold">24-hour response guarantee</span>
              </div>
              
              <div className="flex items-center text-white">
                <FiPhone className="h-6 w-6 text-orange-200 mr-2" />
                <a href="tel:+1-514-555-0102" className="font-semibold hover:text-orange-200 transition-colors">
                  +1-514-555-0102
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}