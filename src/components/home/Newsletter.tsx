import React from 'react';

export function Newsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block bg-yellow-500 px-4 py-2 rounded-full text-black font-bold mb-4">¡NUEVO!</div>
        <h2 className="text-3xl font-bold mb-4">Únete a más de 10,000 Gamers Felices</h2>
        <p className="text-gray-600 mb-8">Obtén acceso exclusivo a nuevos lanzamientos y ofertas especiales</p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Ingresa tu email" 
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300"
          />
          <button className="bg-red-600 px-6 py-2 rounded-r-lg font-semibold text-white">
            Unirse
          </button>
        </div>
      </div>
    </section>
  );
}