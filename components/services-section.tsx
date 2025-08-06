'use client';

import { SERVICIES, SPAINFO } from "@/lib/constants/constants";
import { AnimatedSection } from "./animated-section";
import { ServiceCard } from "./service-card";
import { useState } from "react";
import { BookingForm } from "./booking-form";
import { Button } from "./ui/button";
import { Leaf } from "lucide-react";
import { ScrollProgress } from "./scroll-progress";

export default function ServicesSection({handleBookService, formatPrice}:any) {

  return (
    <section className="mb-16">
      <AnimatedSection animation="fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de tratamientos diseñados para tu
            bienestar físico y mental
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICIES.map((service, index) => (
          <AnimatedSection
            key={service.id}
            animation="fadeInUp"
            delay={index * 150}
          >
            <ServiceCard
              service={service}
              onBook={handleBookService}
              formatPrice={formatPrice}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
