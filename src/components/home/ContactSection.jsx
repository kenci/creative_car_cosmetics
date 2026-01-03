import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,_rgba(217,119,6,0.12),_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#d97706] text-sm font-medium tracking-[0.35em] uppercase"
          >
            Kontakt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white mt-4"
          >
            Jetzt <span className="font-semibold">Termin anfragen</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d97706]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#d97706]" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Adresse</h4>
                <p className="text-gray-400">
                  Musterstraße 123<br />
                  6971 Hard, Vorarlberg
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d97706]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#d97706]" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Telefon</h4>
                <a href="tel:+436641234567" className="text-gray-400 hover:text-[#d97706] transition-colors">
                  +43 664 123 45 67
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d97706]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#d97706]" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">E-Mail</h4>
                <a href="mailto:info@creative-car-cosmetics.at" className="text-gray-400 hover:text-[#d97706] transition-colors">
                  info@creative-car-cosmetics.at
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d97706]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#d97706]" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Öffnungszeiten</h4>
                <p className="text-gray-400">
                  Mo - Fr: 08:00 - 18:00<br />
                  Sa: Nach Vereinbarung
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video rounded-2xl bg-[#121212] overflow-hidden border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21584.77295015!2d9.681!3d47.485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6e5c1f4c9d7d%3A0x4b6b9d6d7b8c9d7d!2sHard%2C%20Austria!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-white/5 bg-[#121212]/90 p-8 md:p-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-[#d97706]/10 flex items-center justify-center rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-[#d97706]" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">
                  Anfrage gesendet!
                </h3>
                <p className="text-gray-400 max-w-md">
                  Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-[#0b0b0b] border-white/10 text-white rounded-none h-12 focus:border-[#d97706]"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Telefon *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-[#0b0b0b] border-white/10 text-white rounded-none h-12 focus:border-[#d97706]"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">E-Mail *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-[#0b0b0b] border-white/10 text-white rounded-none h-12 focus:border-[#d97706]"
                    placeholder="ihre@email.at"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Gewünschte Leistung</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({...formData, service: value})}
                  >
                    <SelectTrigger className="bg-[#0b0b0b] border-white/10 text-white rounded-none h-12">
                      <SelectValue placeholder="Bitte wählen..." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#121212] border-white/10">
                      <SelectItem value="aussen">Außenaufbereitung</SelectItem>
                      <SelectItem value="innen">Innenreinigung</SelectItem>
                      <SelectItem value="keramik">Keramikversiegelung</SelectItem>
                      <SelectItem value="lackkorrektur">Lackkorrektur</SelectItem>
                      <SelectItem value="komplett">Vollaufbereitung</SelectItem>
                      <SelectItem value="beratung">Beratungsgespräch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Ihre Nachricht</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-[#0b0b0b] border-white/10 text-white rounded-none min-h-[120px] focus:border-[#d97706]"
                    placeholder="Fahrzeugtyp, gewünschter Termin, besondere Wünsche..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#d97706] hover:bg-[#b45309] text-white h-14 rounded-none text-base font-medium tracking-wide transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Anfrage senden
                </Button>

                <p className="text-gray-500 text-sm text-center">
                  Wir antworten in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
