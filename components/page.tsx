"use client"

import { useState } from "react"
import { Leaf, Clock, Users, Star, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"
import { ServiceCard } from "@/components/service-card"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificationsSection } from "@/components/certifications-section"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"

export default function SpaZenPage() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  // Datos del Spa Zen
  const spaInfo = {
    name: "Spa Zen",
    description:
      "Un spa premium orientado al bienestar físico y mental, ubicado en un entorno natural. Ofrece servicios relajantes y terapéuticos.",
    address: "Calle del Bienestar 123, Zona Verde, Bogotá",
    phone: "+57 1 234 5678",
    email: "info@spazen.com",
    rating: 4.9,
    schedule: {
      "Lunes a Viernes": "9:00 a.m. – 6:00 p.m.",
      Sábado: "9:00 a.m. – 2:00 p.m.",
      Domingo: "Cerrado",
    },
  }

  const services = [
    {
      id: 1,
      name: "Masaje sueco",
      duration: 60,
      price: 120000,
      description: "Masaje corporal relajante con técnicas suecas. Ideal para aliviar tensiones.",
      category: "Masajes",
      image: "/masaje-sueco.png",
      benefits: ["Reduce tensión muscular", "Mejora circulación", "Alivia estrés"],
    },
    {
      id: 2,
      name: "Terapia con piedras calientes",
      duration: 90,
      price: 180000,
      description: "Uso de piedras volcánicas calientes para relajar músculos profundos.",
      category: "Terapias",
      image: "/piedras-calientes.png",
      benefits: ["Relajación profunda", "Mejora flexibilidad", "Reduce inflamación"],
    },
    {
      id: 3,
      name: "Jacuzzi privado",
      duration: 45,
      price: 80000,
      description: "Acceso exclusivo al jacuzzi del spa con ambientación personalizada.",
      category: "Hidroterapia",
      image: "/jacuzzi-privado.png",
      benefits: ["Relajación total", "Mejora circulación", "Ambiente privado"],
    },
    {
      id: 4,
      name: "Aromaterapia",
      duration: 30,
      price: 60000,
      description: "Inhalación de aceites esenciales para reducir estrés y ansiedad.",
      category: "Terapias",
      image: "/aromaterapia.png",
      benefits: ["Reduce ansiedad", "Mejora estado de ánimo", "Equilibra energía"],
    },
    {
      id: 5,
      name: "Limpieza facial profunda",
      duration: 50,
      price: 100000,
      description: "Tratamiento facial con exfoliación, limpieza e hidratación.",
      category: "Faciales",
      image: "/limpieza-facial.png",
      benefits: ["Piel más limpia", "Hidratación profunda", "Aspecto rejuvenecido"],
    },
  ]

  const therapists = [
    {
      id: 1,
      name: "Laura Gómez",
      specialties: ["Masajes", "Aromaterapia"],
      experience: "8 años de experiencia",
      image: "/terapeuta-laura.png",
    },
    {
      id: 2,
      name: "Daniel Ruiz",
      specialties: ["Limpiezas faciales", "Piedras calientes"],
      experience: "6 años de experiencia",
      image: "/terapeuta-daniel.png",
    },
  ]

  const handleBookService = (service: any) => {
    setSelectedService(service)
    setShowBookingForm(true)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

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
          <BookingForm service={selectedService} spaInfo={spaInfo} />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">{spaInfo.description}</p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2 hover:text-blue-600 hover:scale-105 transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                  {spaInfo.address}
                </div>
                <div className="flex items-center gap-2 hover:text-green-600 hover:scale-105 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                  {spaInfo.phone}
                </div>
                <div className="flex items-center gap-2 hover:text-yellow-600 hover:scale-105 transition-all duration-300">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {spaInfo.rating}
                </div>
              </div>
            </div>
          </div>
        </header>
      </AnimatedSection>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sección de Experiencia y Credibilidad */}
        <AnimatedSection animation="fadeInUp">
          <section className="mb-16">
            <div className="relative">
              <FloatingElements />

              {/* Imagen de fondo con overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img src="/zen-spa-interior.png" alt="Interior del spa" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-green-800/90"></div>
              </div>

              <div className="relative z-10 p-8 md:p-16 text-white">
                <div className="max-w-6xl mx-auto">
                  <AnimatedSection animation="slideInUp" delay={200}>
                    <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 hover:bg-white/30 hover:scale-105 transition-all duration-500">
                        <span className="text-2xl animate-bounce">🌿</span>
                        <span className="font-medium text-lg">Spa Premium</span>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                        15 Años Transformando Vidas
                      </h2>
                      <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                        Más de una década dedicados al bienestar integral, creando experiencias únicas de relajación y
                        renovación
                      </p>
                    </div>
                  </AnimatedSection>

                  {/* Estadísticas con nuevo diseño */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {[
                      { number: "15+", label: "Años de Experiencia", gradient: "from-white to-green-200" },
                      { number: "8.5K+", label: "Clientes Felices", gradient: "from-white to-blue-200" },
                      { number: "98%", label: "Satisfacción", gradient: "from-white to-yellow-200" },
                      { number: "25+", label: "Tratamientos", gradient: "from-white to-purple-200" },
                    ].map((stat, index) => (
                      <AnimatedSection key={index} animation="scaleIn" delay={400 + index * 100}>
                        <div className="text-center group">
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                            <div
                              className={`text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-b ${stat.gradient} bg-clip-text text-transparent group-hover:animate-pulse`}
                            >
                              {stat.number}
                            </div>
                            <div className="text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>

                  {/* Cards de características con imágenes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        image: "/luxury-hotel-spa.png",
                        emoji: "🏆",
                        title: "Certificaciones Internacionales",
                        description:
                          "Terapeutas certificados en técnicas europeas y asiáticas, con formación continua en las mejores escuelas del mundo",
                      },
                      {
                        image: "/relaxing-spa-stones.png",
                        emoji: "🌿",
                        title: "Productos 100% Naturales",
                        description:
                          "Aceites esenciales orgánicos, piedras volcánicas auténticas y productos libres de químicos para tu bienestar total",
                      },
                      {
                        image: "/modern-beauty-salon.png",
                        emoji: "💎",
                        title: "Ambiente Premium",
                        description:
                          "Instalaciones de lujo con diseño minimalista, música relajante y aromaterapia ambiental para tu máxima relajación",
                      },
                    ].map((feature, index) => (
                      <AnimatedSection key={index} animation="fadeInUp" delay={600 + index * 150}>
                        <div className="group">
                          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 text-center hover:bg-white/25 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-4 border border-white/20">
                            <div className="relative mb-6">
                              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden mb-4">
                                <img
                                  src={feature.image || "/placeholder.svg"}
                                  alt={feature.title}
                                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                                />
                              </div>
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:animate-bounce">
                                <span className="text-lg">{feature.emoji}</span>
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                              {feature.title}
                            </h3>
                            <p className="opacity-90 text-sm leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>

                  {/* Llamada a la acción integrada */}
                  <AnimatedSection animation="scaleIn" delay={1200}>
                    <div className="text-center mt-16">
                      <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-500">
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white animate-pulse"></div>
                          <div
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-green-400 border-2 border-white animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 border-2 border-white animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">+8,500 clientes confían en nosotros</div>
                          <div className="text-sm opacity-80">Únete a nuestra familia de bienestar</div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Servicios */}
        <section className="mb-16">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra selección de tratamientos diseñados para tu bienestar físico y mental
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} animation="fadeInUp" delay={index * 150}>
                <ServiceCard service={service} onBook={handleBookService} formatPrice={formatPrice} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Horarios */}
        <AnimatedSection animation="scaleIn">
          <section className="mb-16">
            <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600 animate-spin" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(spaInfo.schedule).map(([day, hours], index) => (
                    <AnimatedSection key={day} animation="fadeInLeft" delay={index * 100}>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 hover:bg-blue-50/50 hover:scale-105 transition-all duration-300 rounded px-2">
                        <span className="font-medium text-gray-700">{day}</span>
                        <span className={`${hours === "Cerrado" ? "text-red-500" : "text-green-600"} font-medium`}>
                          {hours}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        {/* Terapeutas */}
        <section className="mb-16">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Terapeutas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Profesionales certificados dedicados a tu bienestar</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {therapists.map((therapist, index) => (
              <AnimatedSection key={therapist.id} animation="fadeInUp" delay={index * 200}>
                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                        <Users className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {therapist.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                          {therapist.experience}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {therapist.specialties.map((specialty, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-110 transition-all duration-300"
                              style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Testimonios */}
        <TestimonialsSection />

        {/* Certificaciones */}
        <CertificationsSection />

        {/* CTA Final */}
        <AnimatedSection animation="scaleIn">
          <section className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">¿Listo para relajarte?</h2>
                <p className="mb-6 opacity-90">Reserva tu cita ahora y déjanos cuidar de tu bienestar</p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-110 hover:shadow-lg transition-all duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Ver Servicios
                </Button>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>
      </main>
    </div>
  )
}
