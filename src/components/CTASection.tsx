import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Recupere sua confiança hoje mesmo
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/90 mb-6 sm:mb-10 leading-relaxed">
            Dê o primeiro passo agora. Fale diretamente comigo no WhatsApp e agende sua{" "}
            <strong>avaliação gratuita</strong>. Vamos entender seu caso e encontrar a melhor solução para você.
          </p>

          <motion.a
            href="https://wa.me/5551999999999?text=Olá! Gostaria de agendar uma avaliação para prótese capilar."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-10 sm:py-5 bg-foreground text-background font-semibold text-sm sm:text-base lg:text-lg rounded-xl hover:bg-foreground/90 transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            Falar com Deivid Dias
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

          <p className="mt-6 text-primary-foreground/70 text-sm">
            Atendimento de segunda a sábado • Resposta rápida
          </p>
        </motion.div>
      </div>
    </section>
  )
}