import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - MAK PROPERTIES',
  description: 'Cookie Policy for MAK PROPERTIES - Learn about how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and enabling certain website functionality.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies can be either "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period of time).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                MAK PROPERTIES uses cookies for the following purposes:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">2.1 Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly and cannot be disabled. They include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Authentication cookies to keep you logged in</li>
                <li>Security cookies to protect against fraud</li>
                <li>Load balancing cookies to ensure website performance</li>
                <li>Cookies that remember your cookie preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">2.2 Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies enhance your experience by remembering your preferences:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Language preferences</li>
                <li>Property search filters and saved searches</li>
                <li>User interface preferences</li>
                <li>Form data to prevent data loss</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">2.3 Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors use our website:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Google Analytics cookies to track website usage</li>
                <li>Page view and session duration tracking</li>
                <li>User behavior analysis</li>
                <li>Website performance monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">2.4 Marketing Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are used to deliver relevant advertisements and marketing content:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Social media integration cookies</li>
                <li>Advertising platform cookies</li>
                <li>Remarketing and retargeting cookies</li>
                <li>Email marketing tracking cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">3. Types of Cookies We Use</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">accessToken</td>
                      <td className="px-6 py-4 text-sm text-gray-700">User authentication and session management</td>
                      <td className="px-6 py-4 text-sm text-gray-700">7 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">_ga</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Google Analytics - distinguishes users</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2 years</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">_gid</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Google Analytics - distinguishes users</td>
                      <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">_gat</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Google Analytics - throttles request rate</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1 minute</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">cookieConsent</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Remembers user's cookie preferences</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1 year</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">propertySearch</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Saves property search filters and preferences</td>
                      <td className="px-6 py-4 text-sm text-gray-700">30 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Functional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain cookies from third-party services that we use to enhance functionality and analyze usage:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">4.1 Google Analytics</h3>
              <p className="text-gray-700 mb-4">
                We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect information about your use of our website, which is transmitted to and stored by Google.
              </p>
              <p className="text-gray-700 mb-4">
                For more information about Google Analytics cookies, visit: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">4.2 Social Media</h3>
              <p className="text-gray-700 mb-4">
                Our website may include social media features that set cookies from platforms like Facebook, Twitter, LinkedIn, and Instagram when you interact with them.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">4.3 Advertising Partners</h3>
              <p className="text-gray-700 mb-4">
                We may work with advertising partners who set cookies to deliver relevant advertisements and measure their effectiveness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">5. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">5.1 Cookie Consent</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you will see a cookie consent banner. You can choose which types of cookies you want to accept. You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">5.2 Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>View and delete cookies</li>
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Set up notifications when cookies are set</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">5.3 Browser-Specific Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                  <p className="text-sm text-gray-700">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                  <p className="text-sm text-gray-700">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                  <p className="text-sm text-gray-700">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                  <p className="text-sm text-gray-700">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>You may need to log in repeatedly</li>
                <li>Your preferences and settings may not be saved</li>
                <li>Property search filters may not be remembered</li>
                <li>Some interactive features may not work</li>
                <li>We may not be able to provide personalized content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">8. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>MAK PROPERTIES</strong></p>
                <p className="text-gray-700 mb-2">2107, Al Manara Tower, Business Bay</p>
                <p className="text-gray-700 mb-2">Dubai, UAE</p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+971542524242" className="text-blue-600 hover:underline">+971 50 805 0394</a></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@makproperties.ae" className="text-blue-600 hover:underline">privacy@makproperties.ae</a></p>
                <p className="text-gray-700">General Email: <a href="mailto:info@makproperties.ae" className="text-blue-600 hover:underline">info@makproperties.ae</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">9. Legal Basis for Cookie Use</h2>
              <p className="text-gray-700 mb-4">
                Our use of cookies is based on:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Consent:</strong> For non-essential cookies, we obtain your explicit consent</li>
                <li><strong>Legitimate Interest:</strong> For essential cookies necessary for website functionality</li>
                <li><strong>Contract Performance:</strong> For cookies necessary to provide our services</li>
                <li><strong>Legal Obligation:</strong> For cookies required to comply with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">10. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                Cookie data is retained for different periods depending on the type of cookie:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Retained for the duration specified in the cookie (typically 30 days to 2 years)</li>
                <li><strong>Analytics Cookies:</strong> Generally retained for up to 2 years</li>
                <li><strong>Marketing Cookies:</strong> Retained for up to 1 year or until consent is withdrawn</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
