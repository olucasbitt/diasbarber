import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

export default function Footer() {
  return (
   <footer className="bg-card border-t border-border py-10">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="flex flex-col items-center gap-6 text-center">

      {/* Logo */}
      <img 
        src="/img/logo_white.png" 
        alt="Dias Barber Concept" 
        className="h-10"
      />

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <a href="#inicio" className="hover:text-primary">Início</a>
        <a href="#sobre" className="hover:text-primary">Sobre</a>
        <a href="#solucao" className="hover:text-primary">Prótese</a>
        <a href="#resultados" className="hover:text-primary">Resultados</a>
        <a href="#localizacao" className="hover:text-primary">Localização</a>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/5551999999999"
        target="_blank"
        className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition"
      >
        Agendar pelo WhatsApp
      </a>

      {/* Copy */}
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dias Barber Concept. Todos os direitos reservados.
      </p>

    </div>
  </div>
</footer>
  )
}