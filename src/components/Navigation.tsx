'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const productFamilies = [
  { name: "AirSolution", tagline: "Water-Based Counteractants", href: "/products/airsolution", icon: "💧" },
  { name: "XStreme", tagline: "Vapor Phase Technology", href: "/products/xstreme", icon: "☁️" },
  { name: "AirSensory", tagline: "Programmable Dispensers", href: "/products/airsensory", icon: "⏰" },
  { name: "BioStreme", tagline: "Biological Solutions", href: "/products/biostreme", icon: "🦠" },
  { name: "GelTech", tagline: "Controlled Release Gels", href: "/products/geltech", icon: "🧪" },
  { name: "Pond-X", tagline: "Lagoon Treatment", href: "/products/pond-x", icon: "🌊" }
];

const industries = [
  { name: "Wastewater Treatment", href: "/industries/wastewater" },
  { name: "Solid Waste & Landfills", href: "/industries/solid-waste" },
  { name: "Cannabis Cultivation", href: "/industries/cannabis" },
  { name: "Hospitality", href: "/industries/hospitality" },
  { name: "Industrial Processing", href: "/industries/industrial" },
  { name: "Food & Beverage", href: "/industries/food-beverage" }
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-heading font-bold text-gray-900">Ecolo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium text-sm">
                Products
                <FiChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {productFamilies.map((family) => (
                        <Link
                          key={family.name}
                          href={family.href}
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-xl mr-3">{family.icon}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{family.name}</h3>
                            <p className="text-xs text-gray-600 mt-0.5">{family.tagline}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <Link
                        href="/products"
                        className="text-primary font-medium hover:text-primary-dark transition-colors text-sm"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Equipment */}
            <Link href="/equipment" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              Equipment
            </Link>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium text-sm">
                Industries
                <FiChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2"
                  >
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-medium text-sm"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav items */}
            <Link href="/technology" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              Technology
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              About
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex ml-8">
            <Link
              href="/distributor"
              className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-dark transition-all hover:scale-105 shadow-md hover:shadow-lg text-sm"
            >
              Become a Partner
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-products')}
                  className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                >
                  Products
                  <FiChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === 'mobile-products' ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-products' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      {productFamilies.map((family) => (
                        <Link
                          key={family.name}
                          href={family.href}
                          className="block py-1 text-gray-600 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {family.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/equipment" className="block text-gray-700 hover:text-primary font-medium py-2">
                Equipment
              </Link>

              {/* Mobile Industries */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-industries')}
                  className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                >
                  Industries
                  <FiChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === 'mobile-industries' ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="block py-1 text-gray-600 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/technology" className="block text-gray-700 hover:text-primary font-medium py-2">
                Technology
              </Link>
              <Link href="/case-studies" className="block text-gray-700 hover:text-primary font-medium py-2">
                Case Studies
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-primary font-medium py-2">
                About
              </Link>
              <Link href="/resources" className="block text-gray-700 hover:text-primary font-medium py-2">
                Resources
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-primary font-medium py-2">
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/distributor"
                  className="block bg-accent text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;