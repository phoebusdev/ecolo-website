'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import CTAButton from './CTAButton';

interface HeroVideoProps {
  headline?: string;
  subheadline?: string;
  videoUrl?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  showScrollIndicator?: boolean;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  headline = "Advanced Odor Neutralization. Not Masking.",
  subheadline = "Global leader in science-driven odor control solutions for over 50 years",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  showCTA = true,
  ctaText = "Explore Solutions",
  ctaLink = "#solutions",
  showScrollIndicator = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback background image */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
            }}
          />
        </video>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
        >
          {headline}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl font-light mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <CTAButton
              variant="primary"
              size="large"
              href={ctaLink}
              className="animate-pulse-subtle"
            >
              {ctaText}
            </CTAButton>
            
            <CTAButton
              variant="outline"
              size="large"
              href="/contact"
            >
              Contact Experts
            </CTAButton>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-sm text-gray-300 mb-4">Trusted by facilities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">50+</span>
              </div>
              <span className="text-sm">Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">ISO</span>
              </div>
              <span className="text-sm">Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">24/7</span>
              </div>
              <span className="text-sm">Support</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <FiChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      )}

      {/* Video Controls Overlay (for accessibility) */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => {
            if (videoRef.current) {
              if (videoRef.current.paused) {
                videoRef.current.play();
              } else {
                videoRef.current.pause();
              }
            }
          }}
          className="bg-black/50 text-white px-3 py-1 rounded text-sm hover:bg-black/70 transition-colors"
          aria-label="Play/Pause video"
        >
          ⏯
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;