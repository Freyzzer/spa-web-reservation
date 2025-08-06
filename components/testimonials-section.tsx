"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "María Elena Rodríguez",
      service: "Masaje sueco",
      rating: 5,
      comment:
        "Increíble experiencia. Laura tiene unas manos mágicas, salí completamente renovada. El ambiente es perfecto para desconectarse del estrés diario.",
      date: "Hace 2 semanas",
      visits: "Cliente desde hace 3 años",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      service: "Terapia con piedras calientes",
      rating: 5,
      comment:
        "Mi primera vez en un spa y quedé fascinado. Daniel explicó todo el proceso y me sentí muy cómodo. Las piedras calientes fueron una experiencia única.",
      date: "Hace 1 mes",
      visits: "Cliente nuevo",
    },
    {
      id: 3,
      name: "Ana Sofía Vargas",
      service: "Limpieza facial profunda",
      rating: 5,
      comment:
        "Vengo mensualmente desde hace 2 años. Mi piel nunca se ha visto mejor. El equipo es profesional y las instalaciones impecables.",
      date: "Hace 3 días",
      visits: "Cliente VIP",
    },
    {
      id: 4,
      name: "Roberto Jiménez",
      service: "Jacuzzi privado + Aromaterapia",
      rating: 5,
      comment:
        "Perfecto para una cita romántica. El jacuzzi privado es espectacular y la aromaterapia complementó perfectamente la experiencia.",
      date: "Hace 1 semana",
      visits: "Cliente desde hace 1 año",
    },
  ]

  return (
    <section className="mb-16">
      <AnimatedSection animation="fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de personas han confiado en nosotros para su bienestar. Lee sus experiencias reales
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={testimonial.id} animation="fadeInUp" delay={index * 150}>
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600">{testimonial.service}</p>
                    <p className="text-xs text-gray-500">{testimonial.visits}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-1 group-hover:text-blue-300 transition-colors" />
                  <p className="text-gray-700 italic pl-6 mb-3 group-hover:text-gray-800 transition-colors">
                    "{testimonial.comment}"
                  </p>
                </div>

                <div className="text-xs text-gray-500 text-right">{testimonial.date}</div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="scaleIn" delay={600}>
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200 hover:bg-green-100 hover:scale-105 transition-all duration-300">
            <Star className="h-4 w-4 fill-green-500 text-green-500 animate-pulse" />
            <span className="font-medium">4.9/5 estrellas</span>
            <span className="text-green-600">• Basado en 847 reseñas</span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
