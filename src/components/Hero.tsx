import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-0">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80"
            alt="Professional plumbing work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professionaalne torulukksepa teenus Rakveres
            </h1>
            <p className="text-xl mb-8">
            Usaldusväärne torulukksepa teenus Rakveres - Kiire ja kvaliteetne lahendus teie vee- ja kanalisatsiooniprobleemidele.
            </p>
            <div className="bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm">
              <a 
                href="#contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Võta meiega ühendust
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;