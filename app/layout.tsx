import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';
const serif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-serif' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });
export const metadata: Metadata = { title: 'Kitchen Doc | Custom Kitchens & Fitted Wardrobes in Chitungwiza', description: 'Kitchen Doc designs and installs custom kitchens, fitted wardrobes and interior cabinetry in Chitungwiza, Zimbabwe.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const data = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Kitchen Doc', telephone: '+263771253621', address: { '@type': 'PostalAddress', addressLocality: 'Chitungwiza', addressCountry: 'ZW' } };
  return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />{children}</body></html>;
}
