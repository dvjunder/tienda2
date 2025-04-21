import React from 'react';
import { Instagram, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.65, 0, 0.35, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  return (
    <motion.footer 
      className="bg-black text-white py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-4"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-gray-400">© 2025, Arcadegames</span>
            <div className="flex items-center gap-4">
              <motion.span 
                className="hover:text-gray-300 cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Política de privacidad
              </motion.span>
              <motion.span 
                className="hover:text-gray-300 cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Política de reembolso
              </motion.span>
              <motion.span 
                className="hover:text-gray-300 cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Términos de servicio
              </motion.span>
              <motion.span 
                className="hover:text-gray-300 cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Contacto
              </motion.span>
              <motion.span 
                className="hover:text-gray-300 cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Envíos
              </motion.span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a 
              href="https://instagram.com/team.muguiwara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://tiktok.com/teammuguiwara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music2 className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}