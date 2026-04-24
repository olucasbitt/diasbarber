import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const comparisons = [
  {
    id: 1,
    before: 'antesdepois/antes_1.jpeg',
    after: 'antesdepois/depois_1.jpeg',
    name: 'João, 32 anos',
  },
  {
    id: 2,
     before: 'antesdepois/antes_2.jpeg',
    after: 'antesdepois/depois_2.jpeg',
    name: 'Roberto, 38 anos',
  },
  {
    id: 3,
    before: 'antesdepois/antes_3.jpeg',
    after: 'antesdepois/depois_3.jpeg',
    name: 'Fernando, 45 anos',
  },
]

function ComparisonSlider({
  before,
  after,
  name,
}: {
  before: string
  after: string
  name: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleStart = (clientX: number) => {
    isDragging.current = true
    handleMove(clientX)
  }

  const handleEnd = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    handleMove(e.touches[0].clientX)
  }

  // Proteção contra divisão por zero
  const safeSlider = Math.max(sliderPosition, 0.1)

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onTouchMove={handleTouchMove}
      >
        {/* After Image */}
        <img
          src={after}
          alt="Resultado depois da prótese capilar"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt="Antes da prótese capilar"
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${100 / (safeSlider / 100)}%`, maxWidth: 'none' }}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <svg className="w-4 h-4 text-gray-800 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium">
          Antes
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary rounded-full text-white text-sm font-medium">
          Depois
        </div>
      </div>

      <p className="text-center text-foreground font-medium mt-4">
        {name}
      </p>
    </div>
  )
}

export default function BeforeAfterSection() {
  return (
    <section id="antes-depois" className="py-20 lg:py-28 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Resultados Reais
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Antes e <span className="text-primary">Depois</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Arraste o controle para visualizar a transformação. Resultados reais de clientes atendidos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ComparisonSlider
                before={item.before}
                after={item.after}
                name={item.name}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          * Resultados reais. A experiência pode variar de acordo com cada cliente.
        </motion.p>
      </div>
    </section>
  )
}