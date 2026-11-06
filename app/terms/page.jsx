import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Royal Plantscape',
  description: 'Read the terms and conditions for using Royal Plantscape\'s website and services.',
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-emerald-900 py-16 md:py-20">
        <div className="px-8 sm:px-12 lg:px-20 xl:px-28 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">
            Terms & Conditions
          </h1>
          <p className="text-emerald-200 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto prose prose-sm md:prose-base prose-gray">
          <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">1. Introduction</h2>
              <p>Welcome to the Royal Plantscape Landscape & Gardening Works LLC website (royalplantscape.com). By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website or services.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">2. Company Information</h2>
              <p>Royal Plantscape Landscape & Gardening Works LLC is a company registered in Dubai, United Arab Emirates, with its principal office located at Dubai Sports City, Dubai, UAE. All services are provided in accordance with UAE federal and Dubai local laws and regulations.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">3. Services</h2>
              <p>Royal Plantscape provides landscaping, gardening, irrigation, hardscaping, indoor plant maintenance, and related services across Dubai and the UAE. All service descriptions, pricing, and availability displayed on this website are subject to change without prior notice. Final pricing and scope of work will be confirmed through a written quotation or contract.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">4. Online Orders & Products</h2>
              <p>Products listed on our website are subject to availability. We reserve the right to limit quantities, refuse orders, or discontinue products at any time. Prices are listed in UAE Dirhams (AED) and are inclusive of VAT where applicable. Product images are for illustrative purposes and may vary slightly from the actual item delivered.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">5. Payment Terms</h2>
              <p>Payment for products is required at the time of order. Payment for landscaping and service projects will be made according to the milestone schedule outlined in your signed contract. We accept bank transfers, credit/debit cards, and cash payments. All payments are non-refundable unless otherwise stated in our Return & Refund Policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">6. Intellectual Property</h2>
              <p>All content on this website — including text, images, logos, designs, graphics, and software — is the property of Royal Plantscape and is protected by UAE and international copyright laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">7. Limitation of Liability</h2>
              <p>Royal Plantscape shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website, products, or services. Our total liability for any claim shall not exceed the amount paid by the client for the specific product or service in question.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">8. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">9. Changes to Terms</h2>
              <p>We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website following any changes constitutes your acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">10. Contact</h2>
              <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
              <p className="mb-0">Email: <a href="mailto:support@royalplantscape.com" className="text-emerald-600 hover:underline">support@royalplantscape.com</a><br />Phone: <a href="tel:+971586453671" className="text-emerald-600 hover:underline">+971 58 645 3671</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}