import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - MAK PROPERTIES',
  description: 'Terms and Conditions for MAK PROPERTIES - Read our terms of service and user agreement.',
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                Welcome to MAK PROPERTIES. These Terms and Conditions ("Terms") govern your use of our website <a href="https://makproperties.ae" className="text-blue-600 hover:underline">makproperties.ae</a> and our services. By accessing or using our website, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 mb-4">
                If you do not agree to these Terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">2. About MAK PROPERTIES</h2>
              <p className="text-gray-700 mb-4">
                MAK PROPERTIES is a real estate platform based in Dubai, UAE, providing property listings, real estate services, and related services. We are committed to connecting property buyers, sellers, and renters in the Dubai real estate market.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Company Information:</strong></p>
                <p className="text-gray-700 mb-2">MAK PROPERTIES</p>
                <p className="text-gray-700 mb-2">123, Victory Heights, Dubai Sports City</p>
                <p className="text-gray-700 mb-2">Dubai, UAE</p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+971508050394" className="text-blue-600 hover:underline">+971 50 805 0394</a></p>
                <p className="text-gray-700">Email: <a href="mailto:info@makproperties.ae" className="text-blue-600 hover:underline">info@makproperties.ae</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">3. Services Provided</h2>
              <p className="text-gray-700 mb-4">MAK PROPERTIES provides the following services:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Property listings for sale and rent</li>
                <li>Off-plan property information and sales</li>
                <li>Community information and details</li>
                <li>Property management services</li>
                <li>Mortgage and financing assistance</li>
                <li>Conveyancing services</li>
                <li>Short-term rental services</li>
                <li>Real estate consultation and advisory</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">4. User Accounts and Registration</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">4.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To access certain features of our website, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">4.2 Account Termination</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">5. Property Listings and Information</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">5.1 Accuracy of Information</h3>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate and up-to-date property information, we cannot guarantee the accuracy, completeness, or timeliness of all listings. Property information is provided by third parties and may change without notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">5.2 Property Viewing and Transactions</h3>
              <p className="text-gray-700 mb-4">
                All property viewings and transactions are subject to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Availability of the property</li>
                <li>Verification of your identity and financial capacity</li>
                <li>Compliance with UAE real estate laws and regulations</li>
                <li>Execution of proper legal documentation</li>
                <li>Payment of applicable fees and taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">6. User Conduct and Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use the website for any unlawful purpose or in violation of any applicable laws</li>
                <li>Post false, misleading, or fraudulent information</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the website's functionality</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use automated systems to access the website without permission</li>
                <li>Post or transmit any harmful, threatening, or offensive content</li>
                <li>Violate any intellectual property rights</li>
                <li>Engage in any form of harassment or discrimination</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">7. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The website and its content, including but not limited to text, graphics, logos, images, and software, are the property of MAK PROPERTIES or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">8. Payment Terms and Fees</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">8.1 Service Fees</h3>
              <p className="text-gray-700 mb-4">
                Some services may require payment of fees. All fees are non-refundable unless otherwise specified. Payment terms will be clearly disclosed before any transaction.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">8.2 Currency and Taxes</h3>
              <p className="text-gray-700 mb-4">
                All fees are quoted in UAE Dirhams (AED) unless otherwise specified. You are responsible for any applicable taxes, duties, or fees imposed by relevant authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">9. Disclaimers and Limitations of Liability</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">9.1 Service Availability</h3>
              <p className="text-gray-700 mb-4">
                We do not guarantee that the website will be available at all times. We may suspend or discontinue the website or any part of it at any time without notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">9.2 Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, MAK PROPERTIES shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website or services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">9.3 Property Information</h3>
              <p className="text-gray-700 mb-4">
                We are not responsible for the accuracy of property information provided by third parties. Users should verify all property details independently before making any decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">10. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">11. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless MAK PROPERTIES, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the website or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">12. Governing Law and Dispute Resolution</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">12.1 Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">12.2 Dispute Resolution</h3>
              <p className="text-gray-700 mb-4">
                Before pursuing legal action, we encourage you to contact us to resolve any disputes amicably. We are committed to working with you to find a satisfactory resolution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">13. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">14. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">15. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of the website after such changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>MAK PROPERTIES</strong></p>
                <p className="text-gray-700 mb-2">2107, Al Manara Tower, Business Bay</p>
                <p className="text-gray-700 mb-2">Dubai, UAE</p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+971542524242" className="text-blue-600 hover:underline">+971 50 805 0394</a></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@makproperties.ae" className="text-blue-600 hover:underline">legal@makproperties.ae</a></p>
                <p className="text-gray-700">General Email: <a href="mailto:info@makproperties.ae" className="text-blue-600 hover:underline">info@makproperties.ae</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">17. Entire Agreement</h2>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy and any other legal notices published on our website, constitute the entire agreement between you and MAK PROPERTIES regarding your use of our website and services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
