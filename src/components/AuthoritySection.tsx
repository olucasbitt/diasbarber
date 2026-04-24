import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Clock } from 'lucide-react'

const stats = [
  { icon: Clock, value: '+10', label: 'Anos de experiência' },
  { icon: Users, value: '+500', label: 'Clientes atendidos' },
]

export default function AuthoritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-20 lg:py-32 bg-card overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="img/deivid.jpeg"
                alt="Deivid Dias - Especialista em prótese capilar em Viamão"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-28 h-28 border border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Especialista em Transformação Masculina
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Deivid Dias
            </h2>

            {/* Autoridade */}
            <p className="text-primary font-semibold mb-4">
              Referência em prótese capilar em Viamão e região
            </p>

            <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou Deivid Dias, barbeiro profissional com mais de{" "}
              <strong className="text-foreground">10 anos de experiência</strong>, 
              especializado em transformar a aparência e a autoestima masculina com resultados naturais e personalizados.
            </p>

            <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
              Minha especialidade é a{" "}
              <strong className="text-foreground">prótese capilar</strong>, 
              uma solução moderna, discreta e imediata para homens que enfrentam a queda de cabelo. 
              Mais do que estética, meu trabalho é devolver confiança, presença e segurança no dia a dia.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 mb-10">
              <a
                href="#agendamento"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Agendar avaliação
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}