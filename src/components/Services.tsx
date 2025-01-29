import React from 'react';
import { Pipette as PipeValve, Droplets, Construction, Camera, Wrench } from 'lucide-react';

const services = [
  {
    icon: <PipeValve className="w-10 h-10 text-blue-400" />,
    title: 'Veevarustussüsteemide ehitus',
    description: 'Täielik veevarustussüsteemide paigaldus ja hooldus'
  },
  {
    icon: <Droplets className="w-10 h-10 text-blue-400" />,
    title: 'Veetorustike ehitus',
    description: 'Professionaalne veetorustike paigaldus'
  },
  {
    icon: <Construction className="w-10 h-10 text-blue-400" />,
    title: 'Kanalisatsioonisüsteemide ehitus',
    description: 'Kaasaegsed lahendused kanalisatsioonisüsteemidele'
  },
  {
    icon: <Camera className="w-10 h-10 text-blue-400" />,
    title: 'Torustike kaamerauuringud',
    description: 'Täpne diagnostika kaamera abil'
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-400" />,
    title: 'Ummistuste likvideerimine',
    description: 'Kiire ja efektiivne ummistuste kõrvaldamine'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Meie teenused</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;