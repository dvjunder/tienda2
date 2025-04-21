import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo conecto mi consola?",
    answer: "¡Simplemente conecta el cable HDMI a tu TV y conecta el adaptador de corriente. Tu consola estará lista en segundos!"
  },
  {
    question: "¿Qué juegos están incluidos?",
    answer: "Más de 25,000 juegos retro de varias consolas clásicas incluyendo NES, SNES, Genesis y más."
  },
  {
    question: "¿Hay garantía?",
    answer: "Sí, ofrecemos una garantía de 1 año que cubre cualquier defecto de fabricación."
  },
  {
    question: "¿Puedo agregar más juegos?",
    answer: "Sí, puedes agregar fácilmente más juegos a través de conexión USB o Wi-Fi."
  },
  {
    question: "¿Cuál es la política de devolución?",
    answer: "Ofrecemos una garantía de devolución de dinero de 30 días, sin preguntas."
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer: "Sí, hacemos envíos a todo el mundo con seguimiento para todos los pedidos."
  }
];

export function FAQ() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-700 py-3 transition-colors ${
                selectedFaq === index ? 'bg-gray-900' : ''
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    selectedFaq === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
              {selectedFaq === index && (
                <p className="text-gray-400 mt-2 pl-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}