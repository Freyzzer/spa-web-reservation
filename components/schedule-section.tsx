import { Clock } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SPAINFO } from "@/lib/constants/constants";


export default function ScheduleSection() {
    return (
        <AnimatedSection animation="scaleIn">
          <section className="mb-16">
            <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <CardTitle className="flex mt-5items-center justify-center mt-6 gap-2">
                  <Clock className="h-5 w-5 text-blue-600 animate-spin" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(SPAINFO.schedule).map(([day, hours], index) => (
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
    )
}