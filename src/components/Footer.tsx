'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
    // Show success message
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-3xl font-heading font-bold">Ecolo</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Global leader in science-driven odor control solutions for over 50 years. 
              Advanced odor neutralization, not masking.
            </p>
            
            {/* Newsletter Signup */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4 text-lg">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-white text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark px-6 py-3 rounded-r-lg transition-colors"
                >
                  <FiMail className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors text-base">All Products</Link></li>
              <li><Link href="/products/airsolution" className="text-gray-300 hover:text-white transition-colors text-base">AirSolution</Link></li>
              <li><Link href="/products/xstreme" className="text-gray-300 hover:text-white transition-colors text-base">XStreme</Link></li>
              <li><Link href="/products/airsensory" className="text-gray-300 hover:text-white transition-colors text-base">AirSensory</Link></li>
              <li><Link href="/products/biostreme" className="text-gray-300 hover:text-white transition-colors text-base">BioStreme</Link></li>
              <li><Link href="/products/geltech" className="text-gray-300 hover:text-white transition-colors text-base">GelTech</Link></li>
              <li><Link href="/products/pond-x" className="text-gray-300 hover:text-white transition-colors text-base">Pond-X</Link></li>
            </ul>
            
            <h4 className="font-semibold mt-8 mb-4 text-lg">Equipment</h4>
            <ul className="space-y-3">
              <li><Link href="/equipment" className="text-gray-300 hover:text-white transition-colors text-base">All Equipment</Link></li>
              <li><Link href="/equipment/amc-5000" className="text-gray-300 hover:text-white transition-colors text-base">AMC-5000</Link></li>
              <li><Link href="/equipment/acu-53" className="text-gray-300 hover:text-white transition-colors text-base">ACU.53</Link></li>
              <li><Link href="/equipment/acu-15" className="text-gray-300 hover:text-white transition-colors text-base">ACU.15</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries & Solutions */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/industries/wastewater" className="text-gray-300 hover:text-white transition-colors text-base">Wastewater Treatment</Link></li>
              <li><Link href="/industries/solid-waste" className="text-gray-300 hover:text-white transition-colors text-base">Solid Waste & Landfills</Link></li>
              <li><Link href="/industries/cannabis" className="text-gray-300 hover:text-white transition-colors text-base">Cannabis Cultivation</Link></li>
              <li><Link href="/industries/hospitality" className="text-gray-300 hover:text-white transition-colors text-base">Hospitality</Link></li>
              <li><Link href="/industries/industrial-processing" className="text-gray-300 hover:text-white transition-colors text-base">Industrial Processing</Link></li>
              <li><Link href="/industries/food-beverage" className="text-gray-300 hover:text-white transition-colors text-base">Food & Beverage</Link></li>
            </ul>

            <h4 className="font-semibold mt-8 mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-base">About Us</Link></li>
              <li><Link href="/technology" className="text-gray-300 hover:text-white transition-colors text-base">Technology</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors text-base">Case Studies</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors text-base">Resources</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Offices */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-base">Contact Us</Link>
              </li>
              <li>
                <Link href="/distributor" className="text-gray-300 hover:text-white transition-colors text-base">Become a Partner</Link>
              </li>
            </ul>

            {/* Office Locations */}
            <h4 className="font-semibold mt-8 mb-4 text-lg">Global Offices</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <FiMapPin className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Montreal, Canada</div>
                  <div>Headquarters</div>
                </div>
              </div>
              <div className="flex items-start">
                <FiMapPin className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Houston, USA</div>
                  <div>North American Operations</div>
                </div>
              </div>
              <div className="flex items-start">
                <FiMapPin className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Shanghai, China</div>
                  <div>Asia-Pacific Operations</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center">
                <FiPhone className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">+1-514-555-0100</span>
              </div>
              <div className="flex items-center">
                <FiMail className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">info@ecolo.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FiLinkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FiYoutube className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <FiTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Certifications */}
            <div className="mb-4 lg:mb-0">
              <h4 className="font-semibold mb-3 lg:mb-2">Certifications & Standards</h4>
              <div className="flex flex-wrap items-center space-x-8">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ISO</span>
                  </div>
                  <span className="text-gray-300 text-sm">ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ISO</span>
                  </div>
                  <span className="text-gray-300 text-sm">ISO 14001:2015</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ECO</span>
                  </div>
                  <span className="text-gray-300 text-sm">ECOLOGO Certified</span>
                </div>
              </div>
            </div>

            {/* 24/7 Support Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">24/7 Technical Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Ecolo International. All rights reserved.</p>
            </div>
            <div className="flex space-x-8 mt-3 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;