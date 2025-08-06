"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { THERAPISTS_INFO } from "@/lib/constants/booking"

interface BookingFormProps {
  service: {
    id: number
    name: string
    duration: number
    price: number
    description: string
    category: string
    benefits: string[]
  }
  spaInfo: {
    name: string
    phone: string
    email: string
  }
}

export function BookingForm({ service, spaInfo }: Readonly<BookingFormProps>) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    therapist: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    notes: "",
  })

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar la reserva
    alert("¡Reserva confirmada! Te contactaremos pronto para confirmar los detalles.")
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < currentStep ? <Check className="h-5 w-5" /> : step}
              </div>
              {step < 3 && <div className={`flex-1 h-1 mx-4 ${step < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Fecha y Hora</span>
          <span>Terapeuta</span>
          <span>Datos Personales</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Steps */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center mt-6 gap-2">
                {currentStep === 1 && <Calendar className="h-5 w-5 text-blue-600" />}
                {currentStep === 2 && <User className="h-5 w-5 text-blue-600" />}
                {currentStep === 3 && <MessageSquare className="h-5 w-5 text-blue-600" />}
                {currentStep === 1 && "Selecciona Fecha y Hora"}
                {currentStep === 2 && "Elige tu Terapeuta"}
                {currentStep === 3 && "Información Personal"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Date and Time */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="date">Fecha preferida</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Hora disponible</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={formData.time === time ? "default" : "outline"}
                          className={`${formData.time === time ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`}
                          onClick={() => handleInputChange("time", time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Therapist Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  {THERAPISTS_INFO.map((therapist) => (
                    <Card
                      key={therapist.id}
                      className={`cursor-pointer transition-all ${
                        formData.therapist === therapist.id ? "border-blue-500 bg-blue-50" : "hover:border-blue-300"
                      }`}
                      onClick={() => handleInputChange("therapist", therapist.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{therapist.name}</h3>
                            <div className="flex gap-2 mt-2">
                              {therapist.specialties.map((specialty) => (
                                <Badge key={specialty} variant="secondary" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              formData.therapist === therapist.id ? "bg-blue-600 border-blue-600" : "border-gray-300"
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="clientName">Nombre completo *</Label>
                      <Input
                        id="clientName"
                        value={formData.clientName}
                        onChange={(e) => handleInputChange("clientName", e.target.value)}
                        placeholder="Tu nombre completo"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="clientPhone">Teléfono *</Label>
                      <Input
                        id="clientPhone"
                        value={formData.clientPhone}
                        onChange={(e) => handleInputChange("clientPhone", e.target.value)}
                        placeholder="+57 300 123 4567"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="clientEmail">Correo electrónico *</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => handleInputChange("clientEmail", e.target.value)}
                      placeholder="tu@email.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notas adicionales (opcional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Alguna preferencia especial, condición médica o comentario..."
                      className="mt-2"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 bg-transparent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </Button>
                {currentStep < 3 ? (
                  <Button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.date || !formData.time)) ||
                      (currentStep === 2 && !formData.therapist)
                    }
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  >
                    Siguiente
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.clientName || !formData.clientPhone || !formData.clientEmail}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    <Check className="h-4 w-4" />
                    Confirmar Reserva
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary */}
        <div>
          <Card className="bg-white/80 backdrop-blur-sm border-blue-100 sticky top-4">
            <CardHeader>
              <CardTitle className="text-lg mt-6">Resumen de Reserva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-600">{service.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>{service.duration} minutos</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Beneficios:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.benefits.map((benefit) => (
                    <Badge key={benefit} variant="outline" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              {formData.date && (
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>
                      {new Date(formData.date).toLocaleDateString("es-ES", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  {formData.time && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{formData.time}</span>
                    </div>
                  )}
                </div>
              )}

              {formData.therapist && (
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-gray-500" />
                    <span>{THERAPISTS_INFO.find((t) => t.id === formData.therapist)?.name}</span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-blue-600">{formatPrice(service.price)}</span>
                </div>
              </div>

              <div className="pt-4 border-t text-xs text-gray-500">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-3 w-3" />
                  <span>{spaInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span>{spaInfo.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
