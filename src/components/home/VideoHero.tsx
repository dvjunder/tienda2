import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';

export function VideoHero() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="relative w-full aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ReactPlayer
              url="https://files.underdj.com/api/public/dl/hF2Rwo7X/etc/easypanel/projects/web/archivoswebs/video1.mp4"
              width="100%"
              height="100%"
              playing={true}
              loop={true}
              muted={true}
              controls={true}
              light={false}
              pip={false}
              stopOnUnmount={false}
              className="absolute top-0 left-0"
              style={{ aspectRatio: '9/16' }}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            />
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full">
              CALIDAD 4K
            </div>
            <h2 className="text-4xl font-bold">Experiencia de Juego Premium</h2>
            <p className="text-lg text-gray-600">
              Disfruta de tus juegos retro favoritos con una calidad de imagen excepcional. 
              Nuestra consola ofrece una experiencia de juego fluida y sin latencia, 
              perfecta para revivir los clásicos que marcaron una época.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Más de 25,000 juegos clásicos incluidos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Compatibilidad con TV moderna</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Configuración plug & play</span>
              </li>
            </ul>
            <a 
              href="#"
              onClick={scrollToTop}
              className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              COMPRAR AHORA
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}