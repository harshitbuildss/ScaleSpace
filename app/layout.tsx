import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SCALESPACE | Digital Growth Systems',
  description:
    'Premium digital growth systems combining websites, personal branding, AI automation and client acquisition.',
  keywords: [
    'AI automation agency',
    'digital growth systems',
    'web development agency',
    'personal branding agency',
    'client acquisition',
    'business automation'
  ],
  openGraph: {
    title: 'SCALESPACE | Digital Growth Systems',
    description:
      'Build a digital growth engine with premium websites, AI automation, personal branding and client acquisition systems.',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SCALESPACE',
    description: 'Digital growth systems combining web development, AI automation, personal branding and client acquisition.',
    areaServed: 'Worldwide',
    serviceType: ['Web Development', 'AI Automation', 'Personal Branding', 'Client Acquisition']
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
