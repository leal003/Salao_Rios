import React from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Story } from './components/sections/Story';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { FinalCTA } from './components/sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Story />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
