export const SPAINFO = {
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

export const SERVICIES = [
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

export const THERAPISTS = [
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

export const STADISTIC = [
  { number: "15+", label: "Años de Experiencia", gradient: "from-white to-green-200" },
  { number: "8.5K+", label: "Clientes Felices", gradient: "from-white to-blue-200" },
  { number: "98%", label: "Satisfacción", gradient: "from-white to-yellow-200" },
  { number: "25+", label: "Tratamientos", gradient: "from-white to-purple-200" },
]

export const IMAGES_INFO = [
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
]