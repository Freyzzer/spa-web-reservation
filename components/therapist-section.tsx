import { THERAPISTS } from "@/lib/constants/constants";
import { AnimatedSection } from "./animated-section";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users } from "lucide-react";


export default function TherapistSection() {

    return (
         <section className="mb-16">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Terapeutas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Profesionales certificados dedicados a tu bienestar</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {THERAPISTS.map((therapist, index) => (
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
    )
}