import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#solucao', label: 'Prótese Capilar' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#servicos', label: 'Serviços' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center">
			  <img
				src="/img/logo_white.png"
				alt="Dias Barber Concept"
				className="h-8 lg:h-10 w-auto"
			  />
			</a>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5551999999999?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg 
              hover:bg-primary-hover transition-all shadow-lg shadow-primary/30 hover:scale-[1.03]"
            >
              Agendar Agora
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-card border-t border-border shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/5551999999999?text=Olá! Gostaria de agendar um horário."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg 
                hover:bg-primary-hover transition-all text-center shadow-md shadow-primary/30"
              >
                Agendar Agora
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}