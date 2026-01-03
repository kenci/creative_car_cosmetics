import React from 'react';
import Logo, { LogoCompact, LogoIcon } from '../common/Logo';
import AnimatedLogo from './AnimatedLogo';

/**
 * Component to showcase the logo in different variants
 * (This is just for demonstration, can be removed in production)
 */
export default function LogoShowcase() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Creative Car Cosmetics
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Premium Logo Design · Rot & Weiß
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Default Version - Dark Background */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Auf dunklem Hintergrund</h3>
            
            <div className="bg-[#0d0d0d] p-8 rounded-lg space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-3">Standard (MD)</p>
                <Logo variant="white" size="md" />
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-3">Klein (SM)</p>
                <Logo variant="white" size="sm" />
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-3">Groß (LG)</p>
                <Logo variant="white" size="lg" />
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-3">Kompakt</p>
                <LogoCompact variant="white" />
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-3">Nur Icon</p>
                <LogoIcon variant="white" size="md" />
              </div>
            </div>
          </div>

          {/* Light Version - Light Background */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Auf hellem Hintergrund</h3>
            
            <div className="bg-gray-100 p-8 rounded-lg space-y-6 border-2 border-gray-200">
              <div>
                <p className="text-gray-600 text-sm mb-3">Standard (MD)</p>
                <Logo variant="dark" size="md" />
              </div>
              
              <div>
                <p className="text-gray-600 text-sm mb-3">Klein (SM)</p>
                <Logo variant="dark" size="sm" />
              </div>
              
              <div>
                <p className="text-gray-600 text-sm mb-3">Groß (LG)</p>
                <Logo variant="dark" size="lg" />
              </div>

              <div>
                <p className="text-gray-600 text-sm mb-3">Kompakt</p>
                <LogoCompact variant="dark" />
              </div>

              <div>
                <p className="text-gray-600 text-sm mb-3">Nur Icon</p>
                <LogoIcon variant="dark" size="md" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Version */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Animierte Version</h3>
          <div className="bg-[#0d0d0d] p-12 rounded-lg flex justify-center">
            <AnimatedLogo size="xl" />
          </div>
        </div>

        {/* Badge Only Versions */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Nur Badge (Icon)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-[#0d0d0d] p-6 rounded-lg flex justify-center items-center">
              <LogoIcon size="sm" variant="white" />
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-lg flex justify-center items-center">
              <LogoIcon size="md" variant="white" />
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-lg flex justify-center items-center">
              <LogoIcon size="lg" variant="white" />
            </div>
            <div className="bg-[#0d0d0d] p-6 rounded-lg flex justify-center items-center">
              <LogoIcon size="xl" variant="white" />
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Logo-Konzept</h3>
          <div className="space-y-3 text-gray-700">
            <p>✓ <strong>CC Monogramm</strong> - Zwei überlappende C's für "Creative Car Cosmetics"</p>
            <p>✓ <strong>Hexagon-Badge</strong> - Symbolisiert Stärke, Präzision und Premium-Qualität</p>
            <p>✓ <strong>Rot & Weiß</strong> - Kraftvolle Farbkombination mit hohem Kontrast</p>
            <p>✓ <strong>Geschwindigkeitslinien</strong> - Subtile Details für Dynamik und Automotive-Bezug</p>
            <p>✓ <strong>Glanz-Effekt</strong> - Diagonaler Shine symbolisiert "Cosmetics" und Perfektion</p>
            <p>✓ <strong>Standort-Integration</strong> - "HARD · VORARLBERG" im Hauptlogo</p>
          </div>
        </div>
      </div>
    </section>
  );
}