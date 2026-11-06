export const metadata = {
    title: 'Shipping Policy | Royal Plantscape',
    description: 'Learn about Royal Plantscape\'s delivery and shipping policies for plant and product orders in Dubai and the UAE.',
  };
  
  export default function ShippingPage() {
    return (
      <div>
        <section className="bg-emerald-900 py-16 md:py-20">
          <div className="px-8 sm:px-12 lg:px-20 xl:px-28 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">
              Shipping & Delivery Policy
            </h1>
            <p className="text-emerald-200 text-sm">Last updated: January 2025</p>
          </div>
        </section>
  
        <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">1. Delivery Areas</h2>
                <p>We deliver products across all areas of Dubai, including but not limited to Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills, Downtown Dubai, Dubai Marina, Mirdif, Al Barsha, and Dubai Sports City. Deliveries to Sharjah, Ajman, and other emirates are available upon request and may incur additional charges.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">2. Delivery Charges</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Free Delivery:</strong> Orders above AED 200 within Dubai</li>
                  <li><strong>Standard Delivery:</strong> AED 25 for orders below AED 200 within Dubai</li>
                  <li><strong>Large/Bulky Items:</strong> Delivery charges for large plants, trees, and heavy items (pots, soil bags, etc.) will be calculated at checkout based on size and destination</li>
                  <li><strong>Other Emirates:</strong> Delivery charges vary based on location and will be confirmed before order processing</li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">3. Delivery Timeframes</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Standard Products:</strong> 1–3 business days within Dubai</li>
                  <li><strong>Large Plants & Trees:</strong> 3–5 business days (special handling required)</li>
                  <li><strong>Custom Orders:</strong> 5–10 business days depending on availability</li>
                  <li><strong>Same-Day Delivery:</strong> Available for select products if ordered before 12:00 PM (subject to availability and additional charges)</li>
                </ul>
                <p className="mt-3">Delivery times are estimates and may vary during peak seasons, public holidays, or extreme weather conditions.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">4. Order Tracking</h2>
                <p>Once your order is dispatched, you will receive a confirmation message via WhatsApp or SMS with your delivery details and estimated arrival time. Our delivery team will contact you 30 minutes before arrival to confirm your availability.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">5. Delivery Instructions</h2>
                <p>Please ensure someone is available at the delivery address to receive and inspect the products. Our delivery team will place items at your doorstep or designated area. For large plants and trees, please provide clear access to the planting location. Additional charges may apply for carrying items to upper floors or rooftops without elevator access.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">6. Damaged or Incorrect Deliveries</h2>
                <p>Please inspect your order upon delivery. If any items are damaged, wilted, or incorrect, notify our delivery team immediately and take photographs of the issue. Contact us within 24 hours of delivery at <a href="tel:+971586453671" className="text-emerald-600 hover:underline">+971 58 645 3671</a> or <a href="mailto:support@royalplantscape.com" className="text-emerald-600 hover:underline">support@royalplantscape.com</a> to arrange a replacement or refund.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">7. Contact</h2>
                <p>For any delivery-related inquiries, please contact us at:</p>
                <p className="mb-0">Phone: <a href="tel:+971586453671" className="text-emerald-600 hover:underline">+971 58 645 3671</a><br />Email: <a href="mailto:support@royalplantscape.com" className="text-emerald-600 hover:underline">support@royalplantscape.com</a><br />WhatsApp: <a href="https://wa.me/971586453671" className="text-emerald-600 hover:underline">+971 58 645 3671</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }