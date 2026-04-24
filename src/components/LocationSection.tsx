import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Smartphone } from 'lucide-react'

export default function LocationSection() {
  const address = 'R. dos Operários, 172 - Centro, Viamão - RS, 94410-090'
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Onde Estamos
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Localização</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venha nos visitar ou agende pelo WhatsApp. Estamos no centro de Viamão, fácil acesso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-border"
          >
            <img
              src="/img/barbearia.jpg"
              alt="Dias Barber Concept"
              className="w-full h-full object-cover"
            />

            {/* Overlay link */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors flex items-center justify-center group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-primary text-white rounded-lg font-medium">
                Abrir no Google Maps
              </span>
            </a>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >

            {/* Endereço */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-3">Horário</h3>
                  <p className="text-sm text-muted-foreground">Seg-Sex: 09h - 19h</p>
                  <p className="text-sm text-muted-foreground">Sáb: 09h - 17h</p>
                  <p className="text-sm text-muted-foreground">Dom: Fechado</p>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">Contato</h3>
                  <a
                    href="https://wa.me/5551999999999"
                    className="text-primary hover:underline"
                  >
                    (51) 99999-9999
                  </a>
                </div>
              </div>
            </div>

            {/* App */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">Agende pelo App</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Baixe nosso aplicativo e agende rapidamente.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}