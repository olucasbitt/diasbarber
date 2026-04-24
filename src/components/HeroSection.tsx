import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { useState, useRef } from 'react'

const bulletPoints = [
  'Resultados naturais e imperceptíveis',
  'Procedimento indolor e rápido',
  'Recupere sua autoestima imediatamente',
]

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND PREMIUM */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* IMAGEM COM ZOOM SUAVE */}
        <motion.img
          src="/img/barbearia.jpg"
          alt="Dias Barber Concept"
          className="w-full h-full object-cover scale-110"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* VIGNETTE (bordas escuras estilo cinema) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/85" />

        {/* GRADIENTE DIRECIONADO (prioriza texto à esquerda) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        {/* LEVE COR PREMIUM */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-12 sm:py-24 lg:py-32 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* TEXTO */}
          <div className="text-left max-w-md mx-auto lg:mx-0 order-2 lg:order-1">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Especialista em prótese capilar
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Recupere seu cabelo <br />
              e sua <span className="text-primary">confiança</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6"
            >
              Solução moderna e natural para calvície masculina. Resultado discreto, seguro e praticamente imperceptível.
            </motion.p>

            {/* PROVA SOCIAL */}
            <p className="text-sm text-muted-foreground mb-8">
              + de 500 clientes atendidos em Viamão
            </p>

            {/* BULLETS */}
            <ul className="flex flex-col gap-3 mb-10">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  <Check className="w-5 h-5 text-primary" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 lg:gap-5 mt-2">

              <a
                href="https://wa.me/5551999999999?text=Olá! Quero agendar meu atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-bold rounded-lg 
                hover:scale-[1.03] transition shadow-lg shadow-primary/30
                w-full sm:w-auto lg:w-full xl:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>

              <a
                href="#antes-depois"
                className="inline-flex items-center justify-center px-6 py-4 border border-white/30 text-white font-medium rounded-lg 
                hover:bg-white/10 transition
                w-full sm:w-auto lg:w-full xl:w-auto"
              >
                Ver resultados
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}