import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import LazyImage from './LazyImage'

const beforeAfterImages = [
  {
    after: '/resultados/resultado_1.jpeg',
    name: 'Carlos M.',
    age: 42,
  },
  {
    after: '/resultados/resultado_1.jpeg',
    name: 'Roberto S.',
    age: 38,
  },
  {
    after: '/resultados/resultado_1.jpeg',
    name: 'Fernando L.',
    age: 35,
  },
]

const testimonials = [
  {
    name: 'Marcelo R.',
    age: 45,
    text: 'Fiquei mais de 15 anos evitando fotos. Depois da prótese, minha confiança voltou completamente. Parece meu cabelo de verdade.',
    rating: 5,
  },
  {
    name: 'André P.',
    age: 33,
    text: 'O resultado ficou tão natural que ninguém percebeu. Só recebi elogios. Melhor decisão que já tomei.',
    rating: 5,
  },
  {
    name: 'Ricardo M.',
    age: 50,
    text: 'Profissionalismo absurdo. Atendimento reservado e resultado impecável. Vale cada centavo.',
    rating: 5,
  },
  {
    name: 'Paulo H.',
    age: 41,
    text: 'Passei anos usando boné. Hoje saio tranquilo. Mudou minha vida de verdade.',
    rating: 5,
  },
]

export default function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="resultados" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Resultados Reais
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja Quem Já <span className="text-primary">Transformou a Vida</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Homens comuns que decidiram recuperar sua autoestima e hoje vivem com mais confiança.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {beforeAfterImages.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-square overflow-hidden">
                <LazyImage
                  src={item.after}
                  alt={`Resultado ${item.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-white/70 text-sm">{item.age} anos</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DEPOIMENTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 border border-border">

            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

            <div className="text-center">

              {/* STARS */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* TEXT */}
              <motion.p
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-8"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.p>

              {/* NAME */}
              <p className="font-semibold text-foreground">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentTestimonial].age} anos
              </p>

            </div>

            {/* NAV */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevTestimonial}>
                <ChevronLeft />
              </button>

              <button onClick={nextTestimonial}>
                <ChevronRight />
              </button>
            </div>

          </div>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Você pode ser o próximo resultado.
          </p>

          <a
            href="https://wa.me/5551999999999?text=Ola! Vi os resultados e quero saber como funciona a protese capilar."
            target="_blank"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Quero meu resultado também
          </a>
        </motion.div>

      </div>
    </section>
  )
}