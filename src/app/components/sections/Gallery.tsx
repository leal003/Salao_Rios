import React, { useEffect, useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
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

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: img1, alt: 'Salão Rios - Ambiente 1' },
    { src: img2, alt: 'Salão Rios - Ambiente 2' },
    { src: img3, alt: 'Salão Rios - Ambiente 3' },
    { src: img4, alt: 'Salão Rios - Serviços' },
    { src: img5, alt: 'Salão Rios - Equipe' },
    { src: img6, alt: 'Salão Rios - Atendimento' },
  ];

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

      gsap.from(gridRef.current?.children || [], {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#211A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nosso espaço
          </h2>
          <p className="text-base text-[#6B5F5F]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Conheça o ambiente acolhedor do Salão Rios
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
