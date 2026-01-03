import React, { useEffect } from 'react';
import Navigation from '../components/home/Navigation';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import GallerySection from '../components/home/GallerySection';
import AboutSection from '../components/home/AboutSection';
import GoogleReviewsSection from '../components/home/GoogleReviewsSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';
import PerformanceOptimizations from '../components/home/PerformanceOptimizations';

export default function Home() {
  // Preload critical images for above-the-fold content
  useEffect(() => {
    const heroImage = document.createElement('link');
    heroImage.rel = 'preload';
    heroImage.as = 'image';
    heroImage.href = 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=1920&fm=webp';
    heroImage.type = 'image/webp';
    document.head.appendChild(heroImage);

    // Prefetch gallery images for smoother transitions
    const prefetchImages = [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=85&w=1200&fm=webp',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=85&w=1200&fm=webp'
    ];

    prefetchImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup
      document.head.querySelectorAll('link[rel="preload"][as="image"], link[rel="prefetch"][as="image"]').forEach(link => {
        if (link.href.includes('unsplash.com')) {
          link.remove();
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white isolate">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d97706]/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-24 h-[360px] w-[360px] rounded-full bg-[#f59e0b]/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      </div>
      <PerformanceOptimizations />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <GoogleReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
