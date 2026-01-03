import React from 'react';
import { Instagram, Facebook } from "lucide-react";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0b0b] to-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Logo variant="white" size="md" />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#d97706] hover:bg-[#d97706] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#d97706] hover:bg-[#d97706] transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Creative Car Cosmetics. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}
