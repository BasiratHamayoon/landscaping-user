import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import WhatsAppButton from '@/components/WhatsAppButton';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Royal Plantscape | Landscape & Gardening Works LLC - Dubai, UAE',
  description: 'Transform Your Outdoor Space - Landscape Design & Maintenance in Dubai, UAE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}