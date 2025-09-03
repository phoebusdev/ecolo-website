import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const WaterDropIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69m0 2.83L8.46 9.05a5 5 0 1 0 7.08 0L12 5.52z"/>
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 18H6a4 4 0 0 1-1.354-7.753 6 6 0 1 1 11.177-2.52A4.5 4.5 0 0 1 19 18zM12 4a4 4 0 0 0-3.903 4.879l-.102.473-.434.161A2 2 0 0 0 6 11.5a2 2 0 0 0 2 2h11a2.5 2.5 0 0 0 0-5h-.5v-1A4 4 0 0 0 12 4z"/>
  </svg>
);

export const TimerIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
  </svg>
);

export const BacteriaIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="6" cy="8" r="2"/>
    <circle cx="18" cy="8" r="2"/>
    <circle cx="6" cy="16" r="2"/>
    <circle cx="18" cy="16" r="2"/>
    <path d="M11 9.5L7 8M13 9.5L17 8M11 14.5L7 16M13 14.5L17 16"/>
  </svg>
);

export const GelIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="12" height="12" rx="2" ry="2"/>
    <path d="M8 6h8M10 4h4"/>
  </svg>
);

export const WaterIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-8 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-8 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" opacity="0.5"/>
    <path d="M3 16c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm8 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm8 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
  </svg>
);

export const FacilityIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l2 4h8v14H2V6h8l2-4zm0 2.236L10.764 6H4v12h16V6h-6.764L12 4.236z"/>
    <rect x="7" y="10" width="3" height="3"/>
    <rect x="14" y="10" width="3" height="3"/>
  </svg>
);

export const PartnershipIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export const ScienceIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2H7zm3 2h4v8h-4V4zm0 10h4v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4z"/>
  </svg>
);