import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Frown, UserX, Eye, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Frown,
    title: 'Baixa Autoestima',
    description: 'Evita tirar fotos, se olhar no espelho ou frequentar eventos sociais por vergonha.',
  },
  {
    icon: UserX,
    title: 'Aparência Envelhecida',
    description: 'A calvície faz você aparentar mais idade do que realmente tem.',
  },
  {
    icon: Eye,
    title: 'Olhares Indesejados',
    description: 'Sente que as pessoas estão sempre olhando para sua cabeça.',
  },
  {
    icon: TrendingDown,
    title: 'Insegurança',
    description: 'Afeta sua confiança no trabalho, relacionamentos e vida pessoal.',
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Voce Se Identifica?
          </span>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            A calvicie esta afetando sua <span className="text-primary">qualidade de vida</span>?
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Muitos homens sofrem em silencio com a perda de cabelo. Se voce se identifica com alguma dessas situacoes, saiba que existe uma solucao.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-4 sm:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {problem.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm sm:text-base lg:text-lg text-muted-foreground mt-8 sm:mt-12 max-w-2xl mx-auto"
        >
          <strong className="text-foreground">A boa noticia:</strong> voce nao precisa mais conviver com isso. A protese capilar e a solucao que vai transformar sua vida.
        </motion.p>
      </div>
    </section>
  )
}
