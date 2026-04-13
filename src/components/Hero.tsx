import { Button } from './ui/button';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-12 md:py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            ✨ Nova Coleção de Primavera
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Onde cada passo é um <span className="text-primary italic">conto de fadas</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[500px]">
            Calçados delicados, confortáveis e cheios de estilo para as pequenas princesas brilharem em todas as ocasiões.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
              Ver Coleção
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/10">
              Promoções
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://picsum.photos/seed/princess-shoes/800/800" 
            alt="Criança usando calçados delicados"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  );
}
