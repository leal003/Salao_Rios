import React, { useEffect, useRef } from 'react';
import { MessageCircle, Calendar, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F8F5F2]">
      <div
        ref={ctaRef}
        className="bg-[#8B0008] py-[clamp(1.5rem,5vh,2rem)]"
      >
        <div className="max-w-[1400px] mx-auto px-[clamp(1rem,4vw,3rem)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[clamp(1rem,4vw,1.5rem)]">
            {/* Left Content */}
            <div className="text-white text-center md:text-left">
              <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Pronto para renovar seu visual?
              </h3>
              <p className="text-base text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                Agende seu horário e viva a experiência Salão Rios Unissex!
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#8B0008] rounded-lg font-semibold hover:bg-white/90 transition-all shadow-md"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Calendar className="w-4 h-4" />
                Agendar atendimento presencial
              </button>
              <button
                onClick={() => window.open('https://wa.me/5586999999999', '_blank')}
                className="flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-[#8B0008] transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 mt-6">
            <MapPin className="w-4 h-4" />
            <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Atendimento presencial com hora marcada | (86) 99999-9999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
