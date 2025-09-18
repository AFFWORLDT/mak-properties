import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - MAK PROPERTIES',
  description: 'Privacy Policy for MAK PROPERTIES - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                MAK PROPERTIES ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://makproperties.ae" className="text-blue-600 hover:underline">makproperties.ae</a> or use our services.
              </p>
              <p className="text-gray-700 mb-4">
                This policy applies to all users of our website and services, including visitors, registered users, and property owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name and contact information (email address, phone number)</li>
                <li>Property ownership details and preferences</li>
                <li>Financial information for mortgage and property management services</li>
                <li>Identity verification documents (Emirates ID, passport details)</li>
                <li>Communication preferences and history</li>
                <li>Property search history and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">2.2 Technical Information</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain technical information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Website usage patterns and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Providing real estate services and property listings</li>
                <li>Processing property inquiries and transactions</li>
                <li>Managing user accounts and authentication</li>
                <li>Communicating about properties and services</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Marketing and promotional activities (with your consent)</li>
                <li>Fraud prevention and security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and interests</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
                <li><strong>Property Transactions:</strong> With relevant parties in property transactions (buyers, sellers, agents)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
              <p className="text-gray-700 mb-4">
                Our security measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage and access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-gray-700 mb-4">
                For detailed information about our cookie usage, please refer to our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">Under applicable data protection laws, you have the following rights:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@makproperties.ae" className="text-blue-600 hover:underline">privacy@makproperties.ae</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>MAK PROPERTIES</strong></p>
                <p className="text-gray-700 mb-2">123, Victory Heights, Dubai Sports City</p>
                <p className="text-gray-700 mb-2">Dubai, UAE</p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+971508050394" className="text-blue-600 hover:underline">+971 50 805 0394</a></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@makproperties.ae" className="text-blue-600 hover:underline">privacy@makproperties.ae</a></p>
                <p className="text-gray-700">General Email: <a href="mailto:info@makproperties.ae" className="text-blue-600 hover:underline">info@makproperties.ae</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">13. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy is governed by the laws of the United Arab Emirates. Any disputes arising from this policy will be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
