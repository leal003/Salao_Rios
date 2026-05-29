import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Serviços', id: 'services' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Sobre', id: 'story' },
    { label: 'Contato', id: 'footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      const activeItem = itemRefs.current[activeSection];

      if (!nav || !activeItem) return;

      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const scrollToSection = (id: string, options: { block?: ScrollLogicalPosition } = {}) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth', block: options.block || 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#5A0005]/98 backdrop-blur-sm shadow-xl'
          : 'bg-[#5A0005]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative flex items-center justify-between min-h-16 h-[clamp(64px,9vh,72px)] gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-[clamp(40px,6vh,48px)] h-[clamp(40px,6vh,48px)] rounded-full bg-white flex items-center justify-center border-2 border-white shadow-md">
              <div className="text-[#8B0008] text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                <div>SALÃO</div>
                <div>RIOS</div>
              </div>
            </div>
          </div>

          <nav ref={navRef} className="relative hidden lg:flex items-center gap-7 xl:gap-8">
            <span
              className="absolute -bottom-2 h-[2px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-500 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.width ? 1 : 0,
              }}
            />
            {menuItems.map((item) => (
              <button
                key={item.id}
                ref={(node) => {
                  itemRefs.current[item.id] = node;
                }}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-white/82 hover:text-white'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href="https://wa.me/5586999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap px-3 xl:px-4 py-2 rounded-lg border border-white/30 text-white text-xs xl:text-sm font-medium hover:bg-white/10 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Phone className="w-4 h-4" />
              <span>(86) 99999-9999</span>
            </a>
            <button
              onClick={() => scrollToSection('appointment')}
              className="whitespace-nowrap px-4 xl:px-6 py-2.5 bg-white text-[#8B0008] rounded-lg text-xs xl:text-sm font-semibold hover:bg-white/90 transition-all shadow-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <MessageCircle className="w-4 h-4 inline-block mr-2" />
              Agendar horário
            </button>
          </div>

          <button
            className="absolute right-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#8B0008] border-t border-white/10 shadow-2xl">
          <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-[clamp(1rem,3vh,1.25rem)] flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-white text-left px-3 py-3 rounded-lg transition-colors ${
                  activeSection === item.id ? 'bg-white/12' : 'hover:bg-white/8'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {activeSection === item.id && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-white" />
                )}
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5586999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-3 py-3 hover:bg-white/8 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(86) 99999-9999</span>
            </a>
            <button
              onClick={() => scrollToSection('appointment', { block: 'center' })}
              className="w-full px-6 py-3 bg-white text-[#8B0008] rounded-lg font-semibold hover:bg-white/90 transition-all mt-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Agendar horário
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
