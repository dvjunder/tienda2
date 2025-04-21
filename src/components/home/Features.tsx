import React from 'react';
import { Shield } from 'lucide-react';

export function Features() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2 text-white">Garantía de 1 Año</h3>
            <p className="text-gray-400">Cobertura total para tu tranquilidad</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2 text-white">Envío Gratis</h3>
            <p className="text-gray-400">En pedidos superiores a 50€</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2 text-white">Soporte 24/7</h3>
            <p className="text-gray-400">Estamos aquí para ayudarte en cualquier momento</p>
          </div>
        </div>
      </div>
    </section>
  );
}