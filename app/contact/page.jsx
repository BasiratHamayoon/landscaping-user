import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Royal Plantscape - Dubai Landscaping',
  description: 'Get in touch with Royal Plantscape for a free landscaping consultation and quote. Call, WhatsApp, or fill out our contact form today.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative h-[300px] md:h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80&auto=format&fit=crop"
          alt="Beautiful garden landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-3">
            Contact Us
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Ready to transform your space? Get in touch for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will respond within 24 hours with a customized plan for your project.
            </p>
            <ContactForm />
          </div>

          <div className="lg:w-[380px] shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 font-playfair mb-5">
                Contact Information
              </h3>

              <div className="space-y-5 mb-8">
                <a href="tel:+971501234567" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">+971 50 123 4567</p>
                  </div>
                </a>

                <a href="mailto:info@royalplantscape.com" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">info@royalplantscape.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Office</p>
                    <p className="text-sm font-semibold text-gray-900">Dubai, United Arab Emirates</p>
                    <p className="text-xs text-gray-500 mt-0.5">Al Quoz Industrial Area 3</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Working Hours</p>
                    <p className="text-sm font-semibold text-gray-900">Sat – Thu: 8:00 AM – 7:00 PM</p>
                    <p className="text-xs text-gray-500 mt-0.5">Friday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5 space-y-2.5">
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+971501234567"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-3">
            Visit Our Office
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We\'re conveniently located in Al Quoz, Dubai. Drop by for a face-to-face consultation or to see our plant nursery.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[400px] lg:h-[440px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115547.19124983984!2d55.17128!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Royal Plantscape Location"
          />
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                How quickly can you start my project?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most projects can begin within 1–2 weeks of the initial consultation. For larger landscaping projects, we typically need 2–4 weeks for design approval and material sourcing before construction begins.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                Do you offer free site visits and quotes?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes! We provide complimentary site visits and detailed quotations for all landscaping, gardening, and maintenance projects across Dubai. There is no obligation, and we\'ll provide a transparent breakdown of all costs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                What areas in Dubai do you cover?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We serve all communities across Dubai including Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills, Downtown, Marina, Mirdif, and more. We also take on projects in Sharjah and other emirates upon request.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                Do you provide ongoing maintenance after the project is complete?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely. We offer flexible monthly and quarterly maintenance contracts that include watering, pruning, fertilizing, pest control, irrigation management, and seasonal replanting to keep your landscape looking perfect year-round.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}