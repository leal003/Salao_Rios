import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Carlos A.',
    text: 'Estou com o Salão Rios desde sempre. É um atendimento único e a atenção dos profissionais é excepcional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Liliane B.',
    text: 'Meu cabelo sempre fica perfeito depois do atendimento. Adoro a equipe e o ambiente acolhedor do salão.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcos M.',
    text: 'Sempre fui bem atendido e o serviço é de qualidade. Recomendo para toda família!',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
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
        y: 40,
        stagger: 0.15,
        duration: 0.7,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#F8F5F2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#211A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            O que nossos clientes dizem
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-sm text-[#6B5F5F] leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                "{testimonial.text}"
              </p>
              <p className="text-sm font-semibold text-[#211A1A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
