'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Landscape Design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end handling for enquiry submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="font-serif-elegant text-3xl md:text-4xl font-bold text-darkText mb-4">
            Contact Us & Request a Free Quote
          </h1>
          <p className="text-xs text-gray-600">
            Have a project in mind or need expert landscaping advice? Contact Royal Plantscape today for a site visit or consultation in Dubai.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Details Card */}
          <div className="bg-primary text-white rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-md">
            <div>
              <h2 className="font-serif-elegant text-xl font-bold mb-6 text-accent">
                Contact Information
              </h2>
              <p className="text-xs text-gray-200 mb-8 leading-relaxed">
                Reach out to our team directly or visit our office in Dubai Sports City.
              </p>

              <div className="space-y-6 text-xs">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Phone / Call Us</p>
                    <a href="tel:+971586453671" className="hover:text-accent transition">
                      +971 58 645 3671
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Email Support</p>
                    <a href="mailto:support@royalplantscape.com" className="hover:text-accent underline transition">
                      support@royalplantscape.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Office Location</p>
                    <p className="text-gray-200">
                      The Bridge building – Office 308, Dubai Sports City, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Working Hours</p>
                    <p className="text-gray-200">24/7 Available for Customer Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-8 border-t border-white/20 mt-8">
              <a
                href="https://wa.me/971586453671"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-darkText text-xs font-bold py-3 px-4 rounded-md transition"
              >
                <MessageCircle size={16} /> Instant WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Quotation / Enquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="font-serif-elegant text-2xl font-bold text-darkText mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Fill out the form below and our landscape specialists will contact you shortly.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md text-xs font-semibold">
                Thank you! Your enquiry has been received. We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-darkText mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2.5 text-xs text-darkText focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-darkText mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2.5 text-xs text-darkText focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-darkText mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2.5 text-xs text-darkText focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-darkText mb-1">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2.5 text-xs text-darkText focus:outline-none focus:border-primary"
                  >
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Garden Maintenance">Garden Maintenance</option>
                    <option value="Swimming Pool Service">Swimming Pool Service</option>
                    <option value="Irrigation Systems">Irrigation Systems</option>
                    <option value="Artificial Grass">Artificial Grass Installation</option>
                    <option value="Pergolas & Outdoor Living">Pergolas & Gazebos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-darkText mb-1">
                  Message / Project Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your villa/garden size, location, or requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2.5 text-xs text-darkText focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold py-3 px-6 rounded-md transition cursor-pointer shadow-sm"
              >
                <Send size={14} /> SUBMIT ENQUIRY
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}