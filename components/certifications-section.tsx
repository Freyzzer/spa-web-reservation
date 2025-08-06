"use client"

import { Award, Shield, Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

export function CertificationsSection() {
  const certifications = [
    {
      icon: Award,
      title: "Certificación Internacional SPA",
      description: "Acreditados por la International SPA Association (ISPA)",
      year: "2019-2024",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      icon: Shield,
      title: "Protocolos de Bioseguridad",
      description: "Certificados en protocolos sanitarios post-COVID",
      year: "2021-2024",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Heart,
      title: "Terapias Holísticas Certificadas",
      description: "Especialización en medicina alternativa y bienestar integral",
      year: "2018-2024",
      color: "text-pink-600 bg-pink-100",
    },
    {
      icon: Sparkles,
      title: "Excelencia en Servicio",
      description: "Premio a la mejor experiencia de cliente en wellness",
      year: "2022-2023",
      color: "text-purple-600 bg-purple-100",
    },
  ]

  const achievements = [
    "🥇 Mejor Spa de Bienestar - Bogotá 2023",
    "🌟 Top 5 Spas Recomendados - TripAdvisor",
    "💎 Certificación Eco-Friendly - Green Spa",
    "🏆 Premio Excelencia Turística - MinCIT",
  ]

  return (
    <section className="mb-16">
      <AnimatedSection animation="fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones y Reconocimientos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia está respaldado por certificaciones internacionales
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {certifications.map((cert, index) => (
          <AnimatedSection key={index} animation="slideInUp" delay={index * 100}>
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${cert.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                >
                  <cert.icon className="h-8 w-8 group-hover:animate-pulse" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors">
                  {cert.description}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                >
                  {cert.year}
                </Badge>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="scaleIn" delay={400}>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-500">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Reconocimientos Recientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="fadeInLeft" delay={600 + index * 100}>
                <div className="flex items-center gap-3 bg-white/60 rounded-lg p-4 hover:bg-white/80 hover:scale-105 transition-all duration-300 group">
                  <div className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {achievement.split(" ")[0]}
                  </div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {achievement.substring(achievement.indexOf(" ") + 1)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
