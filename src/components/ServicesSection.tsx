import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scissors, Sparkles, Brush, Droplets } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    name: 'Prótese Capilar',
    description: 'Recupere seu cabelo em poucas horas com um resultado 100% natural e imperceptível. Volte a se sentir confiante imediatamente.',
    highlight: true,
  },
  {
    icon: Scissors,
    name: 'Corte Masculino',
    description: 'Cortes modernos que valorizam seu estilo e combinam com seu formato de rosto.',
    highlight: false,
  },
  {
    icon: Brush,
    name: 'Barba',
    description: 'Barba alinhada e bem cuidada que transmite presença e confiança.',
    highlight: false,
  },
  {
    icon: Droplets,
    name: 'Tratamentos',
    description: 'Cuidado completo para manter seu cabelo e barba sempre saudáveis e fortes.',
    highlight: false,
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Nossos Serviços
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Serviços <span className="text-primary">Premium</span> para Você
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Escolha o serviço ideal e dê o primeiro passo para recuperar sua autoestima hoje mesmo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative p-6 lg:p-8 rounded-2xl transition-all ${
                service.highlight
                  ? 'bg-primary text-primary-foreground scale-105 shadow-xl'
                  : 'bg-card border border-border hover:border-primary/30'
              }`}
            >
              {/* Badge destaque */}
              {service.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-full">
                  Mais procurado
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.highlight
                    ? 'bg-primary-foreground/10'
                    : 'bg-primary/10 group-hover:bg-primary/20'
                } transition-colors`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.highlight ? 'text-primary-foreground' : 'text-primary'
                  }`}
                />
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-3 ${
                  service.highlight ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p
                className={`leading-relaxed ${
                  service.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Quer mudar sua aparência e recuperar sua confiança?
          </p>

          <a
            href="https://wa.me/5551999999999?text=Ola! Vim pelo site e quero saber mais sobre a protese capilar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/30"
          >
            Falar no WhatsApp agora
          </a>
        </motion.div>

      </div>
    </section>
  )
}