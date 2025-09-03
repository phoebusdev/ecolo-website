'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

interface HeroVideoProps {
  headline?: string;
  subheadline?: string;
  videoUrl?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  headline = "Advanced Odor Neutralization. Not Masking.",
  subheadline = "Global leader in science-driven odor control solutions for over 50 years",
  videoUrl = "/hero-vid.mp4",
  showCTA = true,
  ctaText = "Explore Solutions",
  ctaLink = "#solutions"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);


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

      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-light mb-8 leading-tight"
        >
          {headline}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl font-light mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed"
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
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-gray-200 mb-4">Trusted by facilities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-white/20 backdrop-blur rounded flex items-center justify-center">
                <span className="text-white text-xs font-medium">50+</span>
              </div>
              <span className="text-sm">Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-white/20 backdrop-blur rounded flex items-center justify-center">
                <span className="text-white text-xs font-medium">ISO</span>
              </div>
              <span className="text-sm">Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-white/20 backdrop-blur rounded flex items-center justify-center">
                <span className="text-white text-xs font-medium">24/7</span>
              </div>
              <span className="text-sm">Support</span>
            </div>
          </div>
        </motion.div>
      </div>


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