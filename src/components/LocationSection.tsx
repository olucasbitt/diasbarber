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
				   <div className="flex flex-wrap gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?gl=US&hl=en-US&id=br.com.salaozen.diasbarberconcept"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                      </svg>
                      Play Store
                    </a>
                    <a
                      href="https://apps.apple.com/br/app/dias-barber-concept/id6736619426"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}