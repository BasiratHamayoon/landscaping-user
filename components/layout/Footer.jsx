'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Shop Column */}
          <div>
            <h4 className="text-darkText text-xs font-bold tracking-widest-xl mb-6 uppercase">SHOP</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link href="/Home" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Our Service</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-darkText text-xs font-bold tracking-widest-xl mb-6 uppercase">QUICK LINKS</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link href="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition">Shipping Policy</Link></li>
              <li><Link href="/return" className="hover:text-primary transition">Return & Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-darkText text-xs font-bold tracking-widest-xl mb-6 uppercase">CONTACT US</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <span className="text-darkText font-bold">Business Name:</span><br />
                Royal Plantscape Landscape LLC
              </li>
              <li><span className="text-darkText font-bold">Phone:</span>{' '}
                <a href="tel:+971586453671" className="hover:text-primary transition">+971 58 645 3671</a>
              </li>
              <li>
                <span className="text-darkText font-bold">Email:</span><br />
                <a href="mailto:support@royalplantscape.com" className="hover:text-primary underline">support@royalplantscape.com</a>
              </li>
              <li>
                <span className="text-darkText font-bold">Office:</span><br />
                Dubai Sports City, Dubai, UAE
              </li>
            </ul>
          </div>

          {/* Exclusive Benefits */}
          <div>
            <h4 className="text-darkText text-xs font-bold tracking-widest-xl mb-6 uppercase">NEWSLETTER</h4>
            <form onSubmit={(e) => e.preventDefault()} className="relative mb-4">
              <input
                type="email"
                placeholder="Enter email here"
                className="w-full bg-white border border-gray-300 rounded-md py-2.5 px-3 pr-10 text-xs text-darkText focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary-dark transition"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary hover:bg-white transition shadow-sm">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary hover:bg-white transition shadow-sm">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()}, Royal Plantscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}