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
    inline-flex items-center justify-center font-semibold rounded-xl 
    transition-all duration-300 ease-in-out transform
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-primary text-white hover:bg-primary-dark focus:ring-primary
      shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95
    `,
    secondary: `
      bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary
      shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95
    `,
    accent: `
      bg-accent text-white hover:bg-accent-dark focus:ring-accent
      shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 animate-pulse-subtle
    `,
    outline: `
      border-2 border-white text-white hover:bg-white hover:text-primary
      focus:ring-white backdrop-blur-sm hover:shadow-lg active:scale-95
    `,
    ghost: `
      text-primary hover:bg-primary/10 hover:text-primary-dark
      focus:ring-primary hover:shadow-md active:scale-95
    `
  };

  const sizes = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4.5 text-lg'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const iconElement = icon === 'arrow' ? (
    <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
  ) : icon === 'external' ? (
    <FiExternalLink className="ml-2 h-5 w-5" />
  ) : null;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
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
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={`${buttonClasses} group`}>
        <motion.div
          whileHover={{ scale: variant !== 'ghost' ? 1.05 : 1 }}
          whileTap={{ scale: 0.95 }}
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
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;