import type { Metadata } from 'next';
import ResourcesPageClient from './ResourcesPageClient';

export const metadata: Metadata = {
  title: 'Technical Resources - Ecolo Documentation & Training',
  description: 'Access comprehensive technical documentation, safety data sheets, white papers, training videos, and industry guides for Ecolo odor control solutions.',
  keywords: 'technical data sheets, TDS, SDS, safety data sheets, odor control documentation, training materials, white papers'
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}