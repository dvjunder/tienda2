import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

const Pricing = lazy(() => import('./components/home/Pricing').then(module => ({ default: module.Pricing })));
const Features = lazy(() => import('./components/home/Features').then(module => ({ default: module.Features })));
const FAQ = lazy(() => import('./components/home/FAQ').then(module => ({ default: module.FAQ })));
const TestimonialsCards = lazy(() => import('./components/home/TestimonialsCards').then(module => ({ default: module.TestimonialsCards })));
const Newsletter = lazy(() => import('./components/home/Newsletter').then(module => ({ default: module.Newsletter })));
const ImageGallery = lazy(() => import('./components/home/ImageGallery').then(module => ({ default: module.ImageGallery })));
const VideoHero = lazy(() => import('./components/home/VideoHero').then(module => ({ default: module.VideoHero })));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls = [
      "https://files.underdj.com/api/public/dl/btp7S8rD/etc/easypanel/projects/web/drop/code/logo2.png",
      "https://i.ibb.co/Qp1Gw1K/gamestick.jpg"
    ];

    const preloadImages = imageUrls.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });
    });

    const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 2000));

    Promise.all([...preloadImages, minimumLoadingTime])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className={`min-h-screen bg-white text-gray-900 ${isLoading ? 'hidden' : ''}`}>
        <Header />
        <main>
          <Suspense fallback={<LoadingScreen />}>
            <div className="block lg:hidden">
              <ImageGallery />
            </div>
            <Pricing />
            <Features />
            <VideoHero />
            <FAQ />
            <TestimonialsCards />
            <Newsletter />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;