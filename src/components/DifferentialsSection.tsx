import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Target,
  Gem,
  Clock,
  Headphones,
  BadgeCheck,
  RefreshCw,
} from 'lucide-react'

const differentials = [
  {
    icon: Target,
    title: 'Personalização total',
    description:
      'Cada prótese é desenvolvida sob medida, respeitando seu formato de rosto, cor e estilo.',
  },
  {
    icon: Gem,
    title: 'Materiais premium',
    description:
      'Utilizamos cabelo humano de alta qualidade e bases ultrafinas para máxima naturalidade.',
  },
  {
    icon: Clock,
    title: 'Atendimento exclusivo',
    description:
      'Ambiente discreto e horários flexíveis para proporcionar conforto e privacidade.',
  },
  {
    icon: Headphones,
    title: 'Suporte contínuo',
    description:
      'Acompanhamento completo após o procedimento, com orientações de manutenção.',
  },
  {
    icon: BadgeCheck,
    title: 'Técnica avançada',
    description:
      'Aplicação com técnicas atualizadas que garantem um resultado natural e duradouro.',
  },
  {
    icon: RefreshCw,
    title: 'Manutenção facilitada',
    description:
      'Processo simples e prático para manter seu visual sempre impecável.',
  },
]

export default function DifferentialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-card overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Por que escolher a Dias Barber Concept
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Um novo padrão em{" "}
            <span className="text-primary">transformação masculina</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Mais do que um procedimento, oferecemos uma experiência completa, focada em resultado, naturalidade e confiança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: 'easeOut',
              }}
              className="group p-6 lg:p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}