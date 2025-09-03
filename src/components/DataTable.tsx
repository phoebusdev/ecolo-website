'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiDownload } from 'react-icons/fi';

interface Product {
  sku?: string;
  name?: string;
  target_odors?: string;
  ph?: string;
  dilution_rate?: string;
  coverage?: string;
  scent_options?: string[];
  applications?: string | string[];
  application_rate?: string;
  features?: string[];
  duration?: string;
  dosage?: string;
}

interface DataTableProps {
  products: Product[];
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ products, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const filteredProducts = products.filter(product => {
    const applicationsText = Array.isArray(product.applications) 
      ? product.applications.join(' ') 
      : product.applications || '';
    
    const matchesSearch = 
      (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.sku && product.sku.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.target_odors && product.target_odors.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (applicationsText.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filterBy === 'all') return matchesSearch;
    return matchesSearch && applicationsText.toLowerCase().includes(filterBy.toLowerCase());
  });

  const getColumns = () => {
    const baseColumns = ['SKU', 'Product Name'];
    
    if (products.some(p => p.target_odors)) baseColumns.push('Target Odors');
    if (products.some(p => p.ph)) baseColumns.push('pH Range');
    if (products.some(p => p.dilution_rate)) baseColumns.push('Dilution Rate');
    if (products.some(p => p.coverage)) baseColumns.push('Coverage');
    if (products.some(p => p.application_rate)) baseColumns.push('Application Rate');
    if (products.some(p => p.duration)) baseColumns.push('Duration');
    if (products.some(p => p.dosage)) baseColumns.push('Dosage');
    if (products.some(p => p.applications)) baseColumns.push('Applications');

    return baseColumns;
  };

  const columns = getColumns();

  const getCellValue = (product: Product, column: string) => {
    switch (column) {
      case 'SKU':
        return product.sku || '-';
      case 'Product Name':
        return product.name || '-';
      case 'Target Odors':
        return product.target_odors || '-';
      case 'pH Range':
        return product.ph || '-';
      case 'Dilution Rate':
        return product.dilution_rate || '-';
      case 'Coverage':
        return product.coverage || '-';
      case 'Application Rate':
        return product.application_rate || '-';
      case 'Duration':
        return product.duration || '-';
      case 'Dosage':
        return product.dosage || '-';
      case 'Applications':
        return Array.isArray(product.applications) 
          ? product.applications.join(', ') 
          : product.applications || '-';
      default:
        return '-';
    }
  };

  const getUniqueApplications = () => {
    const apps = new Set<string>();
    products.forEach(product => {
      if (product.applications) {
        if (Array.isArray(product.applications)) {
          product.applications.forEach(app => apps.add(app.trim()));
        } else {
          product.applications.split(',').forEach(app => apps.add(app.trim()));
        }
      }
    });
    return Array.from(apps);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Product Specifications</h3>
            <p className="text-gray-600 text-sm">Compare technical specifications and applications</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm w-full sm:w-64"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm appearance-none bg-white"
              >
                <option value="all">All Applications</option>
                {getUniqueApplications().map(app => (
                  <option key={app} value={app}>{app}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {column}
                </th>
              ))}
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product, index) => (
              <motion.tr
                key={product.sku}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <td key={column} className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      {column === 'Product Name' ? (
                        <div className="font-medium text-gray-900">{getCellValue(product, column)}</div>
                      ) : column === 'SKU' ? (
                        <div className="font-mono text-primary font-semibold">{getCellValue(product, column)}</div>
                      ) : column === 'Target Odors' ? (
                        <div className="text-gray-600">
                          {getCellValue(product, column).split(', ').map((odor, idx) => (
                            <span key={idx} className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mr-1 mb-1">
                              {odor}
                            </span>
                          ))}
                        </div>
                      ) : column === 'Applications' ? (
                        <div className="text-gray-600">
                          {getCellValue(product, column).split(',').map((app, idx) => (
                            <span key={idx} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-1 mb-1">
                              {app.trim()}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="text-gray-600">{getCellValue(product, column)}</div>
                      )}
                    </div>
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-sm font-medium">
                    <FiDownload className="h-4 w-4 mr-1" />
                    TDS
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="p-12 text-center">
          <div className="text-gray-400 text-lg mb-2">No products found</div>
          <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria</div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            Showing {filteredProducts.length} of {products.length} products
          </div>
          <div className="flex items-center gap-4">
            <span>Need help selecting? <a href="/contact" className="text-primary hover:text-primary-dark font-medium">Contact our experts</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;