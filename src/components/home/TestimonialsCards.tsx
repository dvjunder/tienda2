import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Gameboy",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    comment: "La calidad de los juegos y la facilidad de uso superaron mis expectativas. ¡Una compra que vale cada centavo!",
    rating: 5
  },
  {
    name: "Laura M.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    comment: "Increíble colección de juegos clásicos. La nostalgia es real y la calidad es excelente.",
    rating: 5
  },
  {
    name: "Juan R.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    comment: "Mis hijos están encantados y yo revivo mi infancia. ¡La mejor inversión en entretenimiento familiar!",
    rating: 5
  },
  {
    name: "María G.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    comment: "Perfecto para mis streams retro. La calidad de emulación es impresionante y mis seguidores lo aman.",
    rating: 5
  },
  {
    name: "Roberto V.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    comment: "Como desarrollador, aprecio la atención al detalle. La preservación de los clásicos es impecable.",
    rating: 5
  },
  {
    name: "Carmen L.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    comment: "Uso la consola en mis clases de historia de los videojuegos. Los estudiantes están fascinados.",
    rating: 5
  }
];

export function TestimonialsCards() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Opiniones Verificadas
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Compra verificada</span>
                  <span className="text-sm font-medium text-green-600">✓ Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}