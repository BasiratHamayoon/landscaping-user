export const metadata = {
    title: 'Return & Refund Policy | Royal Plantscape',
    description: 'Royal Plantscape\'s return and refund policy for plant and product orders.',
  };
  
  export default function ReturnPage() {
    return (
      <div>
        <section className="bg-emerald-900 py-16 md:py-20">
          <div className="px-8 sm:px-12 lg:px-20 xl:px-28 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">
              Return & Refund Policy
            </h1>
            <p className="text-emerald-200 text-sm">Last updated: January 2025</p>
          </div>
        </section>
  
        <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">1. General Policy</h2>
                <p>At Royal Plantscape, we want you to be completely satisfied with your purchase. Due to the living nature of plants and the customized nature of our landscaping services, our return and refund policy differs from standard retail. Please read the following terms carefully before placing your order.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">2. Live Plants</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Live plants are <strong>non-returnable</strong> once delivered and accepted, as their condition can change rapidly due to environmental factors beyond our control.</li>
                  <li>If a plant arrives damaged, diseased, or significantly different from the product description, please report the issue within <strong>24 hours</strong> of delivery with clear photographs.</li>
                  <li>Approved claims will be resolved through a <strong>replacement plant</strong> of equal or greater value, or a <strong>store credit</strong>. Cash refunds for live plants are issued only in exceptional circumstances at our discretion.</li>
                  <li>We do not accept returns for plants that have declined due to improper care, overwatering, underwatering, incorrect light conditions, or pest infestations occurring after delivery.</li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">3. Pots, Planters & Accessories</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Non-living products such as pots, planters, garden accessories, artificial plants, and fertilizers may be returned within <strong>7 days</strong> of delivery if they are unused, undamaged, and in their original packaging.</li>
                  <li>Return shipping costs are the responsibility of the customer unless the item was delivered damaged or incorrect.</li>
                  <li>Refunds for eligible returns will be processed within <strong>5–7 business days</strong> to the original payment method.</li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">4. Custom & Made-to-Order Items</h2>
                <p>Custom orders, including bespoke planters, personalized arrangements, made-to-order green walls, and specially sourced plant specimens, are <strong>non-returnable and non-refundable</strong> once production or sourcing has begun. Please review all specifications carefully before confirming your order.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">5. Landscaping & Service Projects</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Landscaping, hardscaping, irrigation, and maintenance services are governed by individual project contracts. Cancellation and refund terms will be outlined in your signed agreement.</li>
                  <li>Deposits paid for landscaping projects are <strong>non-refundable</strong> once work has commenced, as they cover design, material procurement, and labor allocation costs.</li>
                  <li>If you are unsatisfied with any aspect of a completed project, please contact us within <strong>14 days</strong> of project handover. We will work with you to resolve the issue through rectification or adjustment at no additional cost.</li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">6. Refund Process</h2>
                <p>Approved refunds will be processed as follows:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Credit/Debit Card:</strong> 5–10 business days to the original card</li>
                  <li><strong>Bank Transfer:</strong> 3–5 business days to the original account</li>
                  <li><strong>Cash:</strong> Refund via bank transfer or store credit</li>
                  <li><strong>Store Credit:</strong> Issued immediately and valid for 12 months</li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-playfair mb-3">7. How to Initiate a Return</h2>
                <p>To request a return or report a delivery issue, please contact us with your order number, product details, and photographs of the issue:</p>
                <p className="mb-0">Phone/WhatsApp: <a href="tel:+971586453671" className="text-emerald-600 hover:underline">+971 58 645 3671</a><br />Email: <a href="mailto:support@royalplantscape.com" className="text-emerald-600 hover:underline">support@royalplantscape.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }