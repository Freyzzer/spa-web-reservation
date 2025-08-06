'use client';

import { AnimatedSection } from "@/components/animated-section";
import { BookingForm } from "@/components/booking-form";
import { CertificationsSection } from "@/components/certifications-section";
import InfoSection from "@/components/info-section";
import ScheduleSection from "@/components/schedule-section";
import { ScrollProgress } from "@/components/scroll-progress";
import ServicesSection from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import TherapistSection from "@/components/therapist-section";
import { Button } from "@/components/ui/button";
import { SPAINFO } from "@/lib/constants/constants";
import {Leaf, MapPin, Phone, Star} from "lucide-react";
import { useState } from "react";


export default function Home() {
 const [selectedService, setSelectedService] = useState<any>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookService = (service: any) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };


   
if (showBookingForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <ScrollProgress />
        <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setShowBookingForm(false)}
                className="text-blue-600 hover:text-blue-700 hover:scale-105 transition-all duration-300"
              >
                ← Volver a servicios
              </Button>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Leaf className="h-6 w-6 text-blue-600 animate-pulse" />
                  <h1 className="text-2xl font-bold text-gray-900">Spa Zen</h1>
                </div>
                <p className="text-gray-600">Reservar: {selectedService?.name}</p>
              </div>
              <div></div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BookingForm service={selectedService} spaInfo={SPAINFO} />
        </main>
      </div>
    )
  }

  return (
    <div>
      <ScrollProgress />
      {/* Header */}
      <AnimatedSection animation="fadeIn">
        <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-full hover:scale-110 hover:rotate-12 transition-all duration-500">
                  <Leaf className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-500">
                  Spa Zen
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">{SPAINFO.description}</p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2 hover:text-blue-600 hover:scale-105 transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                  {SPAINFO.address}
                </div>
                <div className="flex items-center gap-2 hover:text-green-600 hover:scale-105 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                  {SPAINFO.phone}
                </div>
                <div className="flex items-center gap-2 hover:text-yellow-600 hover:scale-105 transition-all duration-300">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {SPAINFO.rating}
                </div>
              </div>
            </div>
          </div>
        </header>
      </AnimatedSection>
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        {/* Sección de Experiencia y Credibilidad */}
        <InfoSection />

        {/* Servicios */}
       <ServicesSection handleBookService={handleBookService} formatPrice={formatPrice} />

        {/* Horarios */}
        <ScheduleSection />

        {/* Terapeutas */}
        <TherapistSection />

        {/* Testimonios */}
        <TestimonialsSection />

        {/* Certificaciones */}
        <CertificationsSection />
      </main>
    </div>
  );
}
