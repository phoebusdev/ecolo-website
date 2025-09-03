'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiCheck } from 'react-icons/fi';

interface SelectorFilters {
  target_odor?: string[];
  industry?: string[];
  scent?: string[];
  applications?: string[];
}

interface SelectorToolProps {
  filters: SelectorFilters;
  onFiltersChange: (filters: SelectorFilters) => void;
  className?: string;
}

const SelectorTool: React.FC<SelectorToolProps> = ({ 
  filters, 
  onFiltersChange, 
  className = '' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const handleFilterChange = (category: string, value: string) => {
    const newFilters = { ...activeFilters };
    
    if (!newFilters[category]) {
      newFilters[category] = [];
    }
    
    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter((item: string) => item !== value);
    } else {
      newFilters[category].push(value);
    }
    
    if (newFilters[category].length === 0) {
      delete newFilters[category];
    }
    
    setActiveFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    onFiltersChange({});
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).flat().length;
  };

  const renderFilterSection = (title: string, key: string, options: string[]) => (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">{title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {options.map((option) => {
          const isActive = activeFilters[key]?.includes(option);
          return (
            <button
              key={option}
              onClick={() => handleFilterChange(key, option)}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }
              `}
            >
              <div className="flex items-center justify-center gap-2">
                {isActive && <FiCheck className="h-3 w-3" />}
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Product Selector</h3>
            <p className="text-gray-600 text-sm">Filter products by your specific requirements</p>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            <FiFilter className="h-4 w-4" />
            <span className="font-medium">
              {isExpanded ? 'Hide Filters' : 'Show Filters'}
              {getActiveFilterCount() > 0 && (
                <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {getActiveFilterCount()}
                </span>
              )}
            </span>
          </button>
        </div>
        
        {/* Active Filters Summary */}
        {getActiveFilterCount() > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, values]) => 
              (values as string[]).map((value) => (
                <div
                  key={`${category}-${value}`}
                  className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => handleFilterChange(category, value)}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </div>
              ))
            )}
            <button
              onClick={clearAllFilters}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Filter Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-6">
              {filters.target_odor && renderFilterSection('Target Odors', 'target_odor', filters.target_odor)}
              {filters.industry && renderFilterSection('Industries', 'industry', filters.industry)}
              {filters.scent && renderFilterSection('Scent Options', 'scent', filters.scent)}
              {filters.applications && renderFilterSection('Applications', 'applications', filters.applications)}
              
              <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Use filters above to narrow down product options
                </div>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-primary hover:text-primary-dark font-medium"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectorTool;