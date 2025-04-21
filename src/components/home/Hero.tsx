import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text = "Experimenta los juegos retro como nunca antes con nuestro sistema arcade compacto.";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 -z-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-block bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CALIDAD 4K
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Arcade en Miniatura™
            </motion.h1>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2">4.8/5 (2,394 Reseñas)</span>
            </motion.div>
            <div className="space-y-4">
              <motion.p 
                className="text-lg h-20"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-1"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Comprar Ahora - 99,99€
                </motion.button>
                <motion.button 
                  className="border border-gray-900 px-8 py-3 rounded-lg text-lg font-semibold"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Saber Más
                </motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-gray-100 p-8 rounded-lg"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            <img 
              src="https://i.ibb.co/Qp1Gw1K/gamestick.jpg" 
              alt="Consola de Juegos" 
              className="w-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}