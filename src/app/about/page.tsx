import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Ecolo - 50 Years of Odor Control Innovation',
  description: 'Learn about Ecolo\'s 50-year journey from Canadian startup to global leader in odor control technology. Meet our team, explore our values, and discover our global presence.',
  keywords: 'about Ecolo, company history, odor control leader, environmental solutions, global presence'
};

export default function AboutPage() {
  return <AboutPageClient />;
}