import React, { useEffect, useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Scissors, Droplet, Sparkles, Heart, Users, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import img1 from '../../../imports/image-1.png';
import img2 from '../../../imports/image-2.png';
import img3 from '../../../imports/image-3.png';
import img4 from '../../../imports/image-4.png';
import img5 from '../../../imports/image-5.png';
import img6 from '../../../imports/image-6.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Corte masculino', icon: Scissors, image: img1, tag: 'A partir de' },
  { title: 'Corte feminino', icon: Scissors, image: img2, tag: 'A partir de' },
  { title: 'Tintura e coloração', icon: Droplet, image: img3, tag: 'Especialidade' },
  { title: 'Barba', icon: Sparkles, image: img4, tag: 'Profissional' },
  { title: 'Escova', icon: Heart, image: img5, tag: 'Premium' },
  { title: 'Tratamentos', icon: Star, image: img6, tag: 'Cuidados' },
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.08,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-[clamp(2.5rem,8vh,4rem)] bg-white">
      <div className="max-w-[1400px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <div ref={titleRef} className="mb-[clamp(1.5rem,4vh,2rem)]">
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-[#211A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nossos serviços
          </h2>
          <p className="text-base text-[#6B5F5F] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Cuidado, estilo e autoestima para você e sua família
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2.5vw,1.25rem)] max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative h-[clamp(10.5rem,28vh,13.25rem)] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#8B0008] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90 bg-black/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-6 py-2.5 bg-[#8B0008] text-white rounded-lg font-semibold hover:bg-[#6B0006] transition-all">
            Ver todos os serviços
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
