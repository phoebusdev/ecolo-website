import type { Metadata } from 'next';
import DistributorPageClient from './DistributorPageClient';

export const metadata: Metadata = {
  title: 'Become a Partner - Ecolo Distributor Opportunities',
  description: 'Join Ecolo\'s global network of successful partners. Proven products, extensive training, exclusive territories, and high-performance margins. Apply to become a distributor today.',
  keywords: 'distributor, partnership, odor control distributor, Ecolo partner, business opportunity, exclusive territory'
};

export default function DistributorPage() {
  return <DistributorPageClient />;
}