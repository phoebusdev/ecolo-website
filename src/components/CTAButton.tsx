'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: 'arrow' | 'external' | null;
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon = 'arrow',
  className = '',
  external = false,
  type = 'button'
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg 
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-primary text-white hover:bg-primary-dark focus:ring-primary
      shadow-lg hover:shadow-xl hover:scale-105
    `,
    secondary: `
      bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary
      shadow-lg hover:shadow-xl hover:scale-105
    `,
    accent: `
      bg-accent text-white hover:bg-accent-dark focus:ring-accent
      shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-subtle
    `,
    outline: `
      border-2 border-white text-white hover:bg-white hover:text-primary
      focus:ring-white backdrop-blur-sm
    `,
    ghost: `
      text-primary hover:bg-primary/10 hover:text-primary-dark
      focus:ring-primary
    `
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const iconElement = icon === 'arrow' ? (
    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
  ) : icon === 'external' ? (
    <FiExternalLink className="ml-2 h-4 w-4" />
  ) : null;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      <span>{children}</span>
      {!loading && iconElement}
    </>
  );

  if (href && !disabled) {
    if (external || href.startsWith('http')) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClasses} group`}
          whileHover={{ scale: variant !== 'ghost' ? 1.05 : 1 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={`${buttonClasses} group`}>
        <motion.div
          whileHover={{ scale: variant !== 'ghost' ? 1.05 : 1 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center w-full h-full"
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`${buttonClasses} group`}
      whileHover={{ scale: variant !== 'ghost' ? 1.05 : 1 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;