import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles, Shield, Zap, Heart } from 'lucide-react'

const benefits = [
  {
    icon: Sparkles,
    title: 'Resultado Natural',
    description: 'Cabelos com aspecto 100% natural que ninguém consegue identificar.',
  },
  {
    icon: Shield,
    title: 'Seguro e Indolor',
    description: 'Procedimento não invasivo, sem cirurgia e sem período de recuperação.',
  },
  {
    icon: Zap,
    title: 'Resultado Imediato',
    description: 'Saia do estúdio no mesmo dia com a transformação completa.',
  },
  {
    icon: Heart,
    title: 'Autoestima Renovada',
    description: 'Volte a se sentir confiante e bem consigo mesmo.',
  },
]

const features = [
  'Base ultrafina imperceptível',
  'Cabelo 100% humano de qualidade',
  'Personalização de cor e densidade',
  'Manutenção simples',
  'Durabilidade de meses',
  'Pode lavar, nadar e fazer exercícios',
]

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solucao" className="py-20 lg:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              A Solucao
            </span>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Protese Capilar: <span className="text-primary">A Tecnologia</span> que Transforma Vidas
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              A protese capilar e a tecnica mais moderna e eficaz para quem deseja recuperar os cabelos de forma natural e imediata. Diferente de transplantes ou medicamentos, o resultado e instantaneo e personalizado para o seu estilo.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/5551999999999?text=Ola! Quero saber mais sobre a protese capilar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:scale-[1.02]"
            >
              Quero Saber Mais
            </a>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-4 sm:p-6 bg-background rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
