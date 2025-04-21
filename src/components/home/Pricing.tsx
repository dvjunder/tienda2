import React, { useState } from 'react';
import { Star, GamepadIcon, Package, Monitor, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageGallery } from './ImageGallery';
import { Testimonials } from './Testimonials';

export function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState('1000');

  const getBuyNowLink = () => {
    switch (selectedPackage) {
      case '1000':
        return 'https://pmizdy-vt.myshopify.com/cart/50994364514641:1?channel=buy_button';
      case '10000':
        return 'https://pmizdy-vt.myshopify.com/cart/50994401280337:1?channel=buy_button';
      case '40000':
        return 'https://pmizdy-vt.myshopify.com/cart/50994376638801:1?channel=buy_button';
      default:
        return '#';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="space-y-8 order-2 lg:order-1 w-full overflow-hidden">
            <div className="hidden lg:block">
              <ImageGallery />
            </div>
            <Testimonials />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs md:text-sm font-medium text-center">Valorado 4.9/5.0 por más de 100,000 Gamers</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Arcade de los 90™</h2>
              
              <div className="flex flex-wrap justify-center items-center gap-2 mb-6 md:mb-8">
                <span className="text-2xl md:text-3xl font-bold">39,95€</span>
                <span className="text-base md:text-lg text-gray-500 line-through">91,95€</span>
                <span className="bg-blue-900 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full">AHORRA 59%</span>
              </div>

              <div className="grid gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base"><strong>Regalos GRATIS con la compra</strong> (Tiempo Limitado)</span>
                </div>
                <div className="flex items-start gap-3">
                  <GamepadIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base"><strong>Todos los Juegos Pre-Instalados</strong> - sin descargas necesarias</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base"><strong>Compra Sin Preocupaciones</strong> - Garantía de devolución de 90 días</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base"><strong>Funciona Con Cualquier TV</strong> - solo conecta y juega, configuración super fácil</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="radio" 
                  name="games" 
                  id="1000" 
                  className="peer hidden" 
                  defaultChecked 
                  onChange={() => setSelectedPackage('1000')}
                />
                <label 
                  htmlFor="1000" 
                  className="flex justify-between items-center p-3 md:p-4 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600"
                >
                  <span className="text-sm md:text-base font-medium">Novato | 1,000 Juegos</span>
                  <div className="text-right">
                    <div className="font-bold text-sm md:text-base">39,95€</div>
                    <div className="text-xs md:text-sm text-gray-500 line-through">91,95€</div>
                  </div>
                </label>
              </div>

              <div className="relative">
                <input 
                  type="radio" 
                  name="games" 
                  id="10000" 
                  className="peer hidden"
                  onChange={() => setSelectedPackage('10000')}
                />
                <label 
                  htmlFor="10000" 
                  className="flex justify-between items-center p-3 md:p-4 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600"
                >
                  <span className="text-sm md:text-base font-medium">Normal | 10,000 Juegos</span>
                  <div className="text-right">
                    <div className="font-bold text-sm md:text-base">47,95€</div>
                    <div className="text-xs md:text-sm text-gray-500 line-through">113,95€</div>
                  </div>
                </label>
                <div className="absolute right-0 top-0 bg-green-600 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  Mejor Valor
                </div>
              </div>

              <div className="relative">
                <input 
                  type="radio" 
                  name="games" 
                  id="40000" 
                  className="peer hidden"
                  onChange={() => setSelectedPackage('40000')}
                />
                <label 
                  htmlFor="40000" 
                  className="flex justify-between items-center p-3 md:p-4 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600"
                >
                  <span className="text-sm md:text-base font-medium">Experto | 40,000 Juegos</span>
                  <div className="text-right">
                    <div className="font-bold text-sm md:text-base">61,95€</div>
                    <div className="text-xs md:text-sm text-gray-500 line-through">157,95€</div>
                  </div>
                </label>
                <div className="absolute right-0 top-0 bg-black text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  Más popular
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 md:p-4 rounded-lg border-2 border-gray-200">
                <div className="flex items-center gap-2 md:gap-4">
                  <img 
                    src="https://images.pexels.com/photos/4219037/pexels-photo-4219037.jpeg" 
                    alt="Control" 
                    className="w-10 md:w-12 h-10 md:h-12 object-cover rounded"
                  />
                  <span className="text-sm md:text-base font-medium">+1 Mando GRATIS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm md:text-base">0,00€</span>
                  <span className="text-xs md:text-sm text-gray-500 line-through">12,95€</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-9 md:w-11 h-5 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 md:after:h-5 after:w-4 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 md:p-4 rounded-lg border-2 border-gray-200">
                <div className="flex items-center gap-2 md:gap-4">
                  <img 
                    src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg" 
                    alt="Juegos Extra" 
                    className="w-10 md:w-12 h-10 md:h-12 object-cover rounded"
                  />
                  <span className="text-sm md:text-base font-medium">10,000 Juegos GRATIS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm md:text-base">0,00€</span>
                  <span className="text-xs md:text-sm text-gray-500 line-through">39,95€</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-9 md:w-11 h-5 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 md:after:h-5 after:w-4 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-red-600 font-medium text-center text-sm md:text-base">
                ⚡ Pocas unidades - ¡Haz tu pedido ahora antes de que se agoten!
              </p>
              <a 
                href={getBuyNowLink()}
                className="block w-full bg-black text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
              >
                COMPRAR AHORA
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}