import React, { useState } from 'react';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';

function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', formData);
  };

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Stay in the loop
              </h2>
              <p className="text-lg text-blue-800">
                Get to know about the latest real estate insights.
              </p>
            </div>

            {/* Right Content - Form */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="flex-1"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary text-white px-8 py-2 font-semibold"
                >
                  Subscribe
                </Button>
              </form>
              
              {/* Terms */}
              <p className="text-sm text-gray-600 mt-4">
                By clicking Submit, you agree to our{' '}
                <a href="/terms" className="underline hover:text-gray-800">Terms & Conditions</a>
                {' '}and{' '}
                <a href="/privacy" className="underline hover:text-gray-800">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
