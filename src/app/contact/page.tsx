import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Ecolo - Technical Support & Sales Inquiries',
  description: 'Get in touch with Ecolo experts for technical support, product information, or partnership opportunities. 24/7 emergency support available with guaranteed response.',
  keywords: 'contact Ecolo, technical support, sales inquiries, 24/7 support, emergency odor control, customer service'
};

export default function ContactPage() {
  return <ContactPageClient />;
}