import React, { useEffect, useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AppointmentForm } from '../ui/AppointmentForm';
import { Calendar, Clock, MessageCircle, Shield, Star } from 'lucide-react';
import gsap from 'gsap';

import heroImage from '../../../imports/image.png';
import heroDetailOne from '../../../imports/image-2.png';
import heroDetailTwo from '../../../imports/image-5.png';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLSpanElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
      })
        .from(subheadlineRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
        }, '-=0.6')
        .from(buttonsRef.current?.children || [], {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.6,
        }, '-=0.4')
        .from(badgesRef.current?.children || [], {
          opacity: 0,
          scale: 0.9,
          stagger: 0.1,
          duration: 0.6,
        }, '-=0.3')
        .from(formRef.current, {
          opacity: 0,
          x: 42,
          duration: 1,
        }, '-=1')
        .from(collageRef.current?.children || [], {
          opacity: 0,
          y: 24,
          rotate: -2,
          stagger: 0.16,
          duration: 0.9,
        }, '-=0.8')
        .from(imageRef.current, {
          scale: 1.04,
          duration: 1.6,
        }, 0);

      gsap.to(accentRef.current, {
        x: 18,
        opacity: 0.55,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen pt-[72px] overflow-hidden bg-[#220003]">
      <div className="absolute inset-0">
        <div ref={imageRef} className="absolute inset-0 flex justify-end overflow-hidden">
          <ImageWithFallback
            src={heroImage}
            alt="Salão Rios Unissex - interior do salão"
            className="h-full w-full object-cover object-[58%_center] opacity-95 md:object-contain md:object-right lg:w-[72%] xl:w-[66%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A0005] via-[#7B0007]/88 via-[48%] to-[#5A0005]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A0005]/75 via-transparent to-transparent" />
        <div className="absolute left-0 top-0 hidden h-full w-[34%] bg-[#5A0005]/58 md:block" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] xl:grid-cols-[minmax(0,1fr)_430px] gap-8 lg:gap-10 xl:gap-16 items-center min-h-[calc(100vh-72px)] py-10 sm:py-12 lg:py-14">
          <div className="text-white max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-[10px] sm:text-xs font-semibold tracking-widest border border-white/20">
                DESDE 1990, SIMPLESMENTE VOCÊ!
              </span>
              <span ref={accentRef} className="hidden sm:block h-px w-12 bg-white/70" />
            </div>

            <h1
              ref={headlineRef}
              className="text-[2.7rem] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold mb-5 leading-[1.02] max-w-[11ch]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Seu visual em boas mãos desde 1990.
            </h1>

            <p ref={subheadlineRef} className="text-sm sm:text-base md:text-lg mb-7 text-white/90 leading-relaxed max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Salão unissex para toda a família. Cortes, cuidados com pele e cabelos, e a autoestima que você procura em um ambiente acolhedor com um atendimento pessoal.
            </p>

            <div ref={buttonsRef} className="flex flex-col xs:flex-row sm:flex-row flex-wrap gap-3 mb-9">
              <button
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#A5000A] text-white rounded-lg font-semibold hover:bg-[#7B0007] transition-all shadow-lg text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Calendar className="w-4 h-4" />
                Agendar atendimento
              </button>
              <button
                onClick={() => window.open('https://wa.me/5586988065927', '_blank')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black/18 text-white rounded-lg font-semibold border border-white/75 hover:bg-white hover:text-[#8B0008] transition-all text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </button>
            </div>

            <div ref={badgesRef} className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold">+34 anos</div>
                  <div className="text-xs text-white/70">De experiência</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold">Atendimento</div>
                  <div className="text-xs text-white/70">Personalizado</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold">Excelência</div>
                  <div className="text-xs text-white/70">Garantida</div>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="relative w-full lg:flex lg:justify-start lg:-translate-x-10 xl:-translate-x-20">
            <div
              ref={collageRef}
              className="pointer-events-none absolute left-[-210px] top-[45px] z-0 hidden w-[190px] xl:left-[-245px] xl:top-[35px] xl:w-[220px] lg:block"
            >
              <div className="relative ml-auto h-[150px] w-[140px] overflow-hidden rounded-xl border border-white/18 shadow-2xl xl:h-[170px] xl:w-[160px]">
                <ImageWithFallback
                  src={heroDetailOne}
                  alt="Cliente no Salão Rios"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#5A0005]/20" />
              </div>
              <div className="relative mt-4 h-[115px] w-[180px] overflow-hidden rounded-xl border border-white/18 shadow-2xl xl:h-[130px] xl:w-[210px]">
                <ImageWithFallback
                  src={heroDetailTwo}
                  alt="Atendimento no Salão Rios"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#5A0005]/24" />
              </div>
            </div>

            <div className="relative z-10 w-full">
              <AppointmentForm id="appointment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
