"use client";

import React from 'react';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
