import React from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Carlos R.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    comment: "La mejor inversión en entretenimiento que he hecho. ¡Altamente recomendado!",
    rating: 5
  },
  {
    name: "Ana P.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    comment: "Excelente calidad y el soporte al cliente es fantástico.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-6 text-center">Lo que dicen nuestros clientes</h3>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="testimonials-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-lg italic">"{testimonial.comment}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}