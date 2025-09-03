'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiDownload, FiFileText, FiShield, FiBookOpen, FiUsers, FiPlay, FiEdit, FiFilter, FiX } from 'react-icons/fi';
import CTAButton from '@/components/CTAButton';

interface Resource {
  id: string;
  title: string;
  type: 'TDS' | 'SDS' | 'Brochure' | 'White Paper' | 'Video' | 'Blog';
  description: string;
  category: string;
  industry?: string;
  productFamily?: string;
  dateAdded: string;
  downloads?: number;
  gated: boolean;
  featured?: boolean;
  fileSize?: string;
  duration?: string;
}

const resources: Resource[] = [
  // TDS
  { id: '1', title: 'AirSolution 9204 Technical Data Sheet', type: 'TDS', description: 'Complete specifications for heavy duty sulfur control', category: 'TDS', industry: 'Wastewater', productFamily: 'AirSolution', dateAdded: '2024-01-15', downloads: 1250, gated: false, fileSize: '2.3 MB' },
  { id: '2', title: 'XStreme V100 Technical Data Sheet', type: 'TDS', description: 'Industrial vapor phase technology specifications', category: 'TDS', industry: 'Industrial', productFamily: 'XStreme', dateAdded: '2024-01-10', downloads: 890, gated: false, fileSize: '1.8 MB' },
  { id: '3', title: 'BioStreme 2000 Technical Data Sheet', type: 'TDS', description: 'Lagoon treatment biological solution specs', category: 'TDS', industry: 'Wastewater', productFamily: 'BioStreme', dateAdded: '2024-01-05', downloads: 670, gated: false, fileSize: '2.1 MB' },
  
  // SDS
  { id: '4', title: 'AirSolution 9312 Safety Data Sheet', type: 'SDS', description: 'Safety information for universal odor neutralizer', category: 'SDS', productFamily: 'AirSolution', dateAdded: '2024-01-15', downloads: 2100, gated: false, fileSize: '1.2 MB' },
  { id: '5', title: 'GelTech Block Safety Data Sheet', type: 'SDS', description: 'Handling procedures for controlled release gels', category: 'SDS', productFamily: 'GelTech', dateAdded: '2024-01-12', downloads: 450, gated: false, fileSize: '1.1 MB' },
  
  // Brochures
  { id: '6', title: 'Complete Product Catalog 2024', type: 'Brochure', description: 'Full product line overview with specifications', category: 'Brochure', dateAdded: '2024-01-20', downloads: 3200, gated: true, fileSize: '15.7 MB' },
  { id: '7', title: 'Cannabis Industry Solutions', type: 'Brochure', description: 'Specialized solutions for cultivation facilities', category: 'Brochure', industry: 'Cannabis', dateAdded: '2024-01-18', downloads: 1800, gated: false, fileSize: '4.2 MB' },
  { id: '8', title: 'Municipal Wastewater Solutions', type: 'Brochure', description: 'Comprehensive odor control for treatment plants', category: 'Brochure', industry: 'Wastewater', dateAdded: '2024-01-16', downloads: 2500, gated: false, fileSize: '6.8 MB' },
  
  // White Papers
  { id: '9', title: 'The Ultimate Guide to Cannabis Odor Control', type: 'White Paper', description: 'Comprehensive guide for cultivation facilities', category: 'White Paper', industry: 'Cannabis', dateAdded: '2024-01-25', downloads: 850, gated: true, featured: true, fileSize: '8.9 MB' },
  { id: '10', title: 'H2S Control in Wastewater Treatment', type: 'White Paper', description: 'Best practices for hydrogen sulfide management', category: 'White Paper', industry: 'Wastewater', dateAdded: '2024-01-22', downloads: 1200, gated: true, featured: true, fileSize: '6.4 MB' },
  { id: '11', title: 'Counteractant Technology vs Traditional Methods', type: 'White Paper', description: 'Scientific comparison of odor control approaches', category: 'White Paper', dateAdded: '2024-01-20', downloads: 950, gated: true, fileSize: '5.2 MB' },
  
  // Videos
  { id: '12', title: 'How Counteractant Technology Works', type: 'Video', description: 'Animated explanation of molecular neutralization', category: 'Video', dateAdded: '2024-01-28', downloads: 450, gated: false, duration: '3:42' },
  { id: '13', title: 'AMC-5000 Installation Training', type: 'Video', description: 'Step-by-step installation guide for misting systems', category: 'Video', dateAdded: '2024-01-26', downloads: 320, gated: true, duration: '12:15' },
  { id: '14', title: 'Cannabis Facility Case Study Webinar', type: 'Video', description: 'Real-world implementation and results', category: 'Video', industry: 'Cannabis', dateAdded: '2024-01-24', downloads: 280, gated: true, duration: '28:30' },
  
  // Blog
  { id: '15', title: '5 Common Odor Control Mistakes to Avoid', type: 'Blog', description: 'Expert insights on implementation best practices', category: 'Blog', dateAdded: '2024-01-30', downloads: 1500, gated: false },
  { id: '16', title: 'Understanding Cannabis Terpenes and Odor', type: 'Blog', description: 'Science behind cannabis odor challenges', category: 'Blog', industry: 'Cannabis', dateAdded: '2024-01-28', downloads: 890, gated: false },
  { id: '17', title: 'Regulatory Updates: SCAQMD Rule 410', type: 'Blog', description: 'Latest compliance requirements for California', category: 'Blog', industry: 'Wastewater', dateAdded: '2024-01-26', downloads: 670, gated: false }
];

const categories = [
  { name: 'Technical Data Sheets (TDS)', key: 'TDS', icon: <FiFileText />, count: 3, description: 'Product specifications and application guidelines' },
  { name: 'Safety Data Sheets (SDS)', key: 'SDS', icon: <FiShield />, count: 2, description: 'Safety information and handling procedures' },
  { name: 'Brochures & Catalogs', key: 'Brochure', icon: <FiBookOpen />, count: 3, description: 'Product overviews and marketing materials' },
  { name: 'White Papers & Guides', key: 'White Paper', icon: <FiUsers />, count: 3, description: 'In-depth technical papers and industry guides' },
  { name: 'Webinars & Videos', key: 'Video', icon: <FiPlay />, count: 3, description: 'Training videos and recorded webinars' },
  { name: 'Blog Articles', key: 'Blog', icon: <FiEdit />, count: 3, description: 'Industry insights and best practices' }
];

const industries = ['All', 'Wastewater', 'Cannabis', 'Hospitality', 'Industrial', 'Solid Waste'];
const productFamilies = ['All', 'AirSolution', 'XStreme', 'AirSensory', 'BioStreme', 'GelTech', 'Pond-X'];

export default function ResourcesPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedProductFamily, setSelectedProductFamily] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title' | 'downloads'>('date');
  const [showFilters, setShowFilters] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredResources = useMemo(() => {
    const filtered = resources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || resource.type === selectedCategory;
      const matchesIndustry = selectedIndustry === 'All' || resource.industry === selectedIndustry;
      const matchesProductFamily = selectedProductFamily === 'All' || resource.productFamily === selectedProductFamily;
      
      return matchesSearch && matchesCategory && matchesIndustry && matchesProductFamily;
    });

    // Sort results
    switch (sortBy) {
      case 'date':
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'downloads':
        filtered.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
        break;
      default:
        // relevance - keep current order
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedIndustry, selectedProductFamily, sortBy]);

  const handleDownload = (resource: Resource) => {
    if (resource.gated) {
      // In a real app, this would open a form modal
      alert(`This is a gated resource. Please provide your contact information to download "${resource.title}".`);
    } else {
      alert(`Downloading "${resource.title}"...`);
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'TDS': return <FiFileText className="h-6 w-6" />;
      case 'SDS': return <FiShield className="h-6 w-6" />;
      case 'Brochure': return <FiBookOpen className="h-6 w-6" />;
      case 'White Paper': return <FiUsers className="h-6 w-6" />;
      case 'Video': return <FiPlay className="h-6 w-6" />;
      case 'Blog': return <FiEdit className="h-6 w-6" />;
      default: return <FiFileText className="h-6 w-6" />;
    }
  };

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
              Technical <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Access comprehensive documentation, guides, and training materials for our odor control solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
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
              Featured Resources
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "The Ultimate Guide to Cannabis Odor Control",
                type: "White Paper",
                description: "Comprehensive guide for cultivation facilities covering regulations, technology, and best practices",
                gated: true,
                featured: true
              },
              {
                title: "H2S Control in Wastewater Treatment",
                type: "Technical Guide",
                description: "Best practices for hydrogen sulfide management in municipal and industrial treatment facilities",
                gated: true,
                featured: true
              },
              {
                title: "Product Selection Tool",
                type: "Interactive Tool",
                description: "Find the right product for your application with our intelligent recommendation system",
                gated: false,
                featured: true
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium bg-primary text-white px-3 py-1 rounded-full">
                    Featured
                  </span>
                  {resource.gated && (
                    <span className="text-xs font-medium bg-accent text-white px-3 py-1 rounded-full">
                      Gated
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">{resource.type}</p>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                
                <CTAButton variant="primary" size="small" href="#" icon="arrow">
                  {resource.gated ? 'Get Access' : 'Download Now'}
                </CTAButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center w-full px-4 py-3 bg-white rounded-lg shadow-lg font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  <FiFilter className="h-5 w-5 mr-2" />
                  Filters
                  {showFilters && <FiX className="h-5 w-5 ml-auto" />}
                </button>
              </div>

              {/* Filter Panel */}
              <AnimatePresence>
                {(showFilters || isDesktop) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6 space-y-6 sticky top-8"
                  >
                    {/* Search */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Search Resources
                      </label>
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search by title or description..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => setSelectedCategory('All')}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === 'All'
                              ? 'bg-primary text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          All ({resources.length})
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                              selectedCategory === category.key
                                ? 'bg-primary text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span className="flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              {category.name}
                            </span>
                            <span className="text-sm">({category.count})</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Industry Filter */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry</h3>
                      <select
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>

                    {/* Product Family Filter */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Family</h3>
                      <select
                        value={selectedProductFamily}
                        onChange={(e) => setSelectedProductFamily(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {productFamilies.map((family) => (
                          <option key={family} value={family}>{family}</option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Results */}
            <div className="lg:w-3/4">
              {/* Sort and Results Count */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-white rounded-xl shadow-lg p-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Resources ({filteredResources.length})
                  </h2>
                  <p className="text-gray-600">
                    {searchTerm && `Search results for "${searchTerm}"`}
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    {selectedIndustry !== 'All' && ` for ${selectedIndustry}`}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'downloads')}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="date">Newest First</option>
                    <option value="title">Title A-Z</option>
                    <option value="downloads">Most Downloaded</option>
                    <option value="relevance">Relevance</option>
                  </select>
                </div>
              </div>

              {/* Resource Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence>
                  {filteredResources.map((resource, index) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer"
                      onClick={() => handleDownload(resource)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                            {getResourceIcon(resource.type)}
                          </div>
                          <div>
                            <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {resource.featured && (
                            <span className="text-xs font-medium bg-primary text-white px-2 py-1 rounded">
                              Featured
                            </span>
                          )}
                          {resource.gated && (
                            <span className="text-xs font-medium bg-accent text-white px-2 py-1 rounded">
                              Gated
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{new Date(resource.dateAdded).toLocaleDateString()}</span>
                        {resource.fileSize && <span>{resource.fileSize}</span>}
                        {resource.duration && <span>{resource.duration}</span>}
                        {resource.downloads && <span>{resource.downloads.toLocaleString()} downloads</span>}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          {resource.industry && (
                            <span className="bg-gray-100 px-2 py-1 rounded mr-2">{resource.industry}</span>
                          )}
                          {resource.productFamily && (
                            <span className="bg-gray-100 px-2 py-1 rounded">{resource.productFamily}</span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
                          <FiDownload className="h-4 w-4 mr-1" />
                          {resource.gated ? 'Get Access' : 'Download'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
                  <CTAButton
                    variant="primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedIndustry('All');
                      setSelectedProductFamily('All');
                    }}
                  >
                    Clear All Filters
                  </CTAButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6"
          >
            Need Additional Support?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Our technical team is here to help you find the right solution for your specific application
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <CTAButton variant="accent" size="large" href="/contact">
              Contact Technical Support
            </CTAButton>
            
            <CTAButton variant="outline" size="large" href="/distributor">
              Become a Partner
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}