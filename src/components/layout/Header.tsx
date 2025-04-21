import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 32,
    seconds: 9
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 4, minutes: 32, seconds: 9 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.header 
        className="bg-red-600 py-2 px-4"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.7,
          ease: [0.65, 0, 0.35, 1]
        }}
      >
        <div className="flex flex-col items-center justify-center text-center text-white">
          <motion.p 
            className="text-lg md:text-3xl font-bold mb-1"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.7,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <Clock className="w-4 h-4 md:w-6 md:h-6 inline-block mr-2" />
            ¡La oferta termina en {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s!
          </motion.p>
          <motion.p 
            className="text-xs md:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: [0.65, 0, 0.35, 1]
            }}
          >
            🎮 ¡Envío Gratis en Pedidos Superiores a 50€!
          </motion.p>
        </div>
      </motion.header>

      <motion.nav 
        className="bg-white py-3 md:py-4 px-4 md:px-6 flex justify-center items-center border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.7,
          delay: 0.3,
          ease: [0.65, 0, 0.35, 1]
        }}
      >
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.7,
            delay: 0.5,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { 
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
        >
          <img 
            src="https://files.underdj.com/api/public/dl/kDHZeZAF/etc/easypanel/projects/web/archivoswebs/logo2.png" 
            alt="Arcade Logo" 
            className="w-[200px] md:w-[400px] h-auto"
          />
        </motion.div>
      </motion.nav>
    </>
  );
}