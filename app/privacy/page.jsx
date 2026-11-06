export const metadata = {
  title: 'Privacy Policy | Royal Plantscape',
  description: 'Learn how Royal Plantscape collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-emerald-900 py-16 md:py-20">
        <div className="px-8 sm:px-12 lg:px-20 xl:px-28 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">
            Privacy Policy
          </h1>
          <p className="text-emerald-200 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">1. Introduction</h2>
              <p>Royal Plantscape Landscape & Gardening Works LLC (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us. By using our website and services, you consent to the practices described in this policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Personal Information:</strong> Name, email address, phone number, physical address, and payment details when you place an order, request a quote, or contact us.</li>
                <li><strong>Project Information:</strong> Property details, site measurements, photographs, and landscaping preferences shared during consultations.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, browser type, and IP address.</li>
                <li><strong>Communication Data:</strong> Any messages, inquiries, or feedback you send through our contact forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Process orders, payments, and deliveries</li>
                <li>Provide landscaping consultations and project management</li>
                <li>Communicate with you about your projects and services</li>
                <li>Send promotional offers and newsletters (with your consent)</li>
                <li>Improve our website, products, and services</li>
                <li>Comply with UAE legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">4. Data Sharing & Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>With authorized delivery partners for order fulfillment</li>
                <li>With payment processors for transaction processing</li>
                <li>When required by UAE law or government authorities</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">5. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications by clicking the unsubscribe link in our emails or contacting us directly. To exercise any of these rights, please email us at <a href="mailto:support@royalplantscape.com" className="text-emerald-600 hover:underline">support@royalplantscape.com</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">7. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">9. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <p className="mb-0">Email: <a href="mailto:support@royalplantscape.com" className="text-emerald-600 hover:underline">support@royalplantscape.com</a><br />Phone: <a href="tel:+971586453671" className="text-emerald-600 hover:underline">+971 58 645 3671</a><br />Address: Dubai Sports City, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}