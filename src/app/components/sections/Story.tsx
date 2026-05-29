import React, { useEffect, useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import image
import storyImage from '../../../imports/image-3.png';

gsap.registerPlugin(ScrollTrigger);

export const Story: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
      });

      gsap.from(metricsRef.current?.children || [], {
        scrollTrigger: {
          trigger: metricsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      icon: Award,
      title: '+34 anos',
      description: 'de história',
    },
    {
      icon: Users,
      title: 'Milhares',
      description: 'de clientes atendidos',
    },
    {
      icon: Heart,
      title: 'Ambiente',
      description: 'familiar e acolhedor',
    },
    {
      icon: TrendingUp,
      title: 'Paixão',
      description: 'por transformar autoestima',
    },
  ];

  return (
    <section id="story" ref={sectionRef} className="py-[clamp(2.5rem,8vh,4rem)] bg-white">
      <div className="max-w-[1400px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <div className="grid lg:grid-cols-2 gap-[clamp(2rem,5vw,3rem)] items-center mb-[clamp(2rem,6vh,3rem)]">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={storyImage}
                alt="Equipe Salão Rios"
                className="w-full h-[clamp(18rem,52vh,26.25rem)] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="lg:pl-8">
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-[#211A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nossa história
            </h2>

            <p className="text-base text-[#6B5F5F] leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              O Salão Rios Unissex nasceu em 1990 com o propósito de valorizar pessoas através da beleza e do cuidado. Ao longo desses anos, construímos mais que um salão: uma relação de confiança e amizade com cada cliente que passa por aqui.
            </p>

            <p className="text-base text-[#6B5F5F] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nossa equipe é formada por profissionais experientes e dedicados, que tratam cada cliente com atenção e respeito. Tradição que passa de geração para geração.
            </p>

            <button
              onClick={() => window.open('https://wa.me/5586999999999', '_blank')}
              className="px-6 py-2.5 bg-[#8B0008] text-white rounded-lg font-semibold hover:bg-[#6B0006] transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Conheça nossa equipe
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(1rem,3vw,1.5rem)]">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F5F2] rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#8B0008] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#211A1A] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {metric.title}
                </h3>
                <p className="text-sm text-[#6B5F5F]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
