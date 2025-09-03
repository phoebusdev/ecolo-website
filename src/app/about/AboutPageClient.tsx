'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiGlobe, FiAward, FiHeart, FiTarget, FiTrendingUp, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import CTAButton from '@/components/CTAButton';

export default function AboutPageClient() {
  const timeline = [
    { year: "1975", event: "Founded in Montreal, Canada", description: "Started as a small startup with a vision to solve odor problems" },
    { year: "1985", event: "Launched AirSolution product line", description: "Introduced our first major product family" },
    { year: "1995", event: "Expanded to USA market", description: "Opened our first international office in Houston" },
    { year: "2005", event: "Opened Asia-Pacific operations", description: "Established presence in Shanghai, China" },
    { year: "2015", event: "Achieved ISO certifications", description: "Earned ISO 9001 and ISO 14001 certifications" },
    { year: "2025", event: "50 years of innovation", description: "Celebrating five decades of odor control excellence" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuous improvement and R&D",
      icon: <FiTrendingUp className="h-8 w-8" />,
      color: "bg-primary"
    },
    {
      title: "Integrity",
      description: "Honest, ethical business practices",
      icon: <FiHeart className="h-8 w-8" />,
      color: "bg-secondary"
    },
    {
      title: "Sustainability",
      description: "Environmental stewardship",
      icon: <FiGlobe className="h-8 w-8" />,
      color: "bg-accent"
    },
    {
      title: "Partnership",
      description: "Success through collaboration",
      icon: <FiUsers className="h-8 w-8" />,
      color: "bg-primary"
    },
    {
      title: "Excellence",
      description: "Quality in everything we do",
      icon: <FiAward className="h-8 w-8" />,
      color: "bg-secondary"
    }
  ];

  const offices = [
    {
      location: "Montreal, Canada (Headquarters)",
      address: "123 Innovation Drive, Montreal, QC H2X 3Y5",
      phone: "+1-514-555-0100",
      email: "canada@ecolo.com",
      isHQ: true
    },
    {
      location: "Houston, USA",
      address: "456 Industrial Blvd, Houston, TX 77001",
      phone: "+1-713-555-0200",
      email: "usa@ecolo.com",
      isHQ: false
    },
    {
      location: "Shanghai, China",
      address: "789 Technology Park, Shanghai 200120",
      phone: "+86-21-5555-0300",
      email: "china@ecolo.com",
      isHQ: false
    }
  ];

  const leadership = [
    {
      name: "John Smith",
      title: "CEO",
      bio: "30 years in environmental solutions, leading global expansion",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "PhD Chemistry, 20+ patents in odor control technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Michael Johnson",
      title: "VP Sales & Marketing",
      bio: "Built our global distribution network across 50+ countries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lisa Anderson",
      title: "VP Operations",
      bio: "Lean Six Sigma Black Belt, optimizing global operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Robert Kim",
      title: "Director of R&D",
      bio: "Leading our innovation team developing next-gen solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Garcia",
      title: "Director of Customer Success",
      bio: "Customer-first advocate ensuring world-class service",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      icon: "🏆",
      color: "bg-primary"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      icon: "🌱",
      color: "bg-green-500"
    },
    {
      name: "ECOLOGO",
      description: "Environmental Certification",
      icon: "♻️",
      color: "bg-accent"
    },
    {
      name: "OHSAS 18001",
      description: "Health & Safety",
      icon: "🛡️",
      color: "bg-secondary"
    }
  ];

  const awards = [
    "Environmental Excellence Award 2024",
    "Best Innovation in Odor Control 2023",
    "Top Workplace Award 2022"
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
              50 Years of <span className="text-accent">Innovation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              From a small Canadian startup to a global leader in odor control technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Timeline */}
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
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              For 50 years, Ecolo has been at the forefront of odor control technology, transforming from a small Canadian startup to a global leader serving customers in over 50 countries.
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Spacer */}
                  <div className="lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Mission, Vision & Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary rounded-lg text-white mr-4">
                  <FiTarget className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide innovative, environmentally responsible odor control solutions that improve quality of life and protect our planet.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary rounded-lg text-white mr-4">
                  <FiGlobe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                A world where communities and industries coexist harmoniously without odor concerns.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${value.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
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
              Global Presence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Three strategic locations serving customers worldwide with local support and global expertise
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.location}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  office.isHQ ? 'border-primary/30 ring-2 ring-primary/10' : 'border-gray-100'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg text-white mr-4 ${
                    office.isHQ ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900">{office.location}</h3>
                    {office.isHQ && (
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">Headquarters</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiMapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FiPhone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-primary hover:text-primary-dark transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FiMail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-primary hover:text-primary-dark transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Meet the experienced team leading Ecolo&apos;s global operations and innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Quality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our commitment to quality and environmental responsibility is recognized by leading certification bodies
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6"
          >
            Awards & Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-12"
          >
            Recognition for our innovation, environmental leadership, and workplace culture
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white hover:bg-white/20 transition-all duration-300"
              >
                <FiAward className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-heading font-bold mb-2">{award}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <CTAButton variant="accent" size="large" href="/contact">
              Join Our Team
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}