import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'O procedimento de prótese capilar dói?',
    answer:
      'Não. O procedimento é totalmente indolor. A prótese capilar é aplicada com adesivos especiais de alta qualidade, sem necessidade de cirurgia ou anestesia. Você sente apenas o conforto de voltar a ter cabelo.',
  },
  {
    question: 'Quanto tempo dura a prótese capilar?',
    answer:
      'Com os cuidados adequados, a prótese capilar pode durar entre 6 a 12 meses. Realizamos manutenções periódicas para garantir aparência natural e fixação ideal. A durabilidade pode variar conforme o uso e os cuidados no dia a dia.',
  },
  {
    question: 'Posso tomar banho, nadar e treinar normalmente?',
    answer:
      'Sim. A prótese é fixada de forma segura e resistente à água. Você pode tomar banho, nadar, treinar e seguir sua rotina normalmente. Muitos clientes relatam que esquecem que estão usando após alguns dias.',
  },
  {
    question: 'As pessoas vão perceber que estou usando?',
    answer:
      'Não. Quando aplicada corretamente por um especialista, a prótese é praticamente imperceptível. Utilizamos cabelo natural e técnicas avançadas que garantem um resultado discreto, inclusive ao toque.',
  },
  {
    question: 'Com que frequência preciso fazer manutenção?',
    answer:
      'O ideal é realizar manutenção a cada 3 a 4 semanas. Nesse processo fazemos limpeza, ajuste da fixação e alinhamento do corte, garantindo que o visual continue natural e bem cuidado.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left gap-4 transition-colors hover:text-primary"
      >
        <span className="text-lg font-medium text-foreground">
          {question}
        </span>

        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Dúvidas frequentes
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas e <span className="text-primary">respostas</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Tire suas principais dúvidas sobre prótese capilar e o processo completo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-6 lg:p-8 border border-border"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale diretamente comigo.
          </p>

          <a
            href="https://wa.me/5551999999999?text=Olá! Tenho uma dúvida sobre prótese capilar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Falar no WhatsApp
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}