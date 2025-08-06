"use client"

import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  service: {
    id: number
    name: string
    duration: number
    price: number
    description: string
    category: string
    image: string
    benefits: string[]
  }
  onBook: (service: any) => void
  formatPrice: (price: number) => string
}

export function ServiceCard({ service, onBook, formatPrice }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden gap-3 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 bg-white/80 backdrop-blur-sm border-blue-100 group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={service.image || "/placeholder.svg?height=200&width=300&query=spa treatment"}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
        />
        <div className="absolute inset-0 bg-black/30 shadow-inner"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-4 pt-4 flex items-center text-sm text-white group-hover:text-blue-500 transition-colors duration-300">
          <Clock className="h-4 w-4 mr-1 group-hover:animate-spin" />
          {service.duration} min
        </div>
        <div className="absolute top-4 right-4 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500">
          <Badge className="bg-blue-600 text-white shadow-lg">{service.category}</Badge>
        </div>
      <CardTitle className="absolute bottom-0 left-4 pb-4 text-3xl font-extrabold text-white group-hover:text-blue-600 transition-colors duration-300">
        {service.name}
      </CardTitle>
      </div>

      <CardHeader className="group-hover:bg-blue-50/50 transition-colors duration-500">
        <div className="flex items-start">
              <div className="text-lg font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {formatPrice(service.price)}
              </div>
        </div>
        <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            Beneficios:
          </h4>
          <div className="flex flex-wrap gap-1">
            {service.benefits.map((benefit, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs border-blue-200 text-blue-700 hover:bg-blue-100 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-lg transition-all duration-300 group-hover:animate-pulse"
          onClick={() => onBook(service)}
        >
          Reservar Cita
        </Button>
      </CardContent>
    </Card>
  )
}
