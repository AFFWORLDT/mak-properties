"use client";

import React, { useState } from 'react';
import { ArrowLeft, Mail, Eye, EyeOff, User, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Checkbox } from '@/src/components/ui/checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { api, handleApiError } from '@/src/lib/axios';

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    owner_name: '',
    lessor_email: '',
    password: '',
    lessor_phone: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Prepare data for API (exclude agreeToTerms)
      const apiData = {
        owner_name: formData.owner_name,
        lessor_email: formData.lessor_email,
        password: formData.password,
        lessor_phone: formData.lessor_phone
      };

      const response = await api.post('/api/owner/register', apiData);
      
      // Success - navigate to home page
      router.push('/');
      
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.webp"
          alt="City Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-3xl">
        <div className="bg-white rounded-lg shadow-2xl p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="text-sm">Back to website</span>
            </Link>
            
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              EVIDPROPERTIES
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              Create your account
            </p>
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 underline hover:text-blue-700">
                Sign In
              </Link>
            </p>
          </div>

          {/* Google Sign Up */}
          <Button 
            variant="outline" 
            className="w-full mb-6 h-12 border-gray-300 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or sign up with email</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Owner Name Field */}
            <div className="space-y-2">
              <Label htmlFor="owner_name" className="text-sm font-medium text-gray-700">
                Owner Name *
              </Label>
              <div className="relative">
                <Input
                  id="owner_name"
                  type="text"
                  value={formData.owner_name}
                  onChange={(e) => handleInputChange('owner_name', e.target.value)}
                  className="pl-4 pr-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
                <User className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Lessor Email Field */}
            <div className="space-y-2">
              <Label htmlFor="lessor_email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <div className="relative">
                <Input
                  id="lessor_email"
                  type="email"
                  value={formData.lessor_email}
                  onChange={(e) => handleInputChange('lessor_email', e.target.value)}
                  className="pl-4 pr-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Lessor Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="lessor_phone" className="text-sm font-medium text-gray-700">
                Phone Number *
              </Label>
              <div className="relative">
                <Input
                  id="lessor_phone"
                  type="tel"
                  value={formData.lessor_phone}
                  onChange={(e) => handleInputChange('lessor_phone', e.target.value)}
                  className="pl-4 pr-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
                <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password *
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pl-4 pr-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Create password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-2">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <Link href="/terms-conditions" className="text-blue-600 underline hover:text-blue-700">
                    Terms & Conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">
                    Privacy Policy
                  </Link>
                  {' *'}
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary text-white font-medium text-lg mt-6"
              disabled={!formData.agreeToTerms || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
