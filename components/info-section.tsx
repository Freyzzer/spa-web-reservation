import { IMAGES_INFO, STADISTIC } from "@/lib/constants/constants";
import { AnimatedSection } from "./animated-section";
import { FloatingElements } from "./floating-elements";

export default function InfoSection() {
    return(
        <AnimatedSection animation="fadeInUp">
                  <section className="mb-16">
                    <div className="relative">
                      <FloatingElements />
        
                      {/* Imagen de fondo con overlay */}
                      <div className="absolute inset-0 overflow-hidden">
                        <img src="/zen-spa-interior.png" alt="Interior del spa" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-green-800/90"></div>
                      </div>
        
                      <div className="relative z-10 p-8 md:p-16 text-white">
                        <div className="max-w-6xl mx-auto">
                          <AnimatedSection animation="slideInUp" delay={100}>
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
                            {STADISTIC.map((stat, index) => (
                              <AnimatedSection key={index} animation="scaleIn" delay={200 + index * 100}>
                                <div className="text-center group">
                                  <div className="bg-white/20 lg:min-h-[170px] backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                                    <div
                                      className={`text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-b ${stat.gradient} bg-clip-text text-transparent group-hover:animate-pulse`}
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
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            {IMAGES_INFO.map((feature, index) => (
                              <AnimatedSection key={index} animation="fadeInUp" delay={300 + index * 150}>
                                <div className="group">
                                  <div className="bg-white/15 xl:min-h-[325px] lg:min-h-[350px] backdrop-blur-md rounded-3xl p-8 text-center hover:bg-white/25 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-4 border border-white/20">
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
                          <AnimatedSection animation="scaleIn" delay={600}>
                            <div className="text-center mt-16">
                              <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-3xl sm:rounded-full px-8 py-4 border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-500">
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
    )
}