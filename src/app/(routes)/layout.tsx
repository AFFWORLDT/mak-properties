"use client";

import React, { useState, useEffect } from 'react';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import { X } from 'lucide-react';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookieAccepted) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
      
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We use cookies
                  </h3>
                  <p className="text-gray-600">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex items-center space-x-4 ml-6">
                  <button
                    onClick={acceptCookies}
                    className="bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
