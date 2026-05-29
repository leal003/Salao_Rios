import React from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#211A1A] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <div className="text-[#8B0008] text-[10px] font-bold text-center leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <div>SALÃO</div>
                  <div>RIOS</div>
                </div>
              </div>
              <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Salão Rios Unissex
              </h3>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Salão unissex para toda a família desde 1990.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Serviços', id: 'services' },
                { label: 'Sobre', id: 'story' },
                { label: 'Contato', id: 'footer' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5586988065927"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p>(86) 98806-5927</p>
                </div>
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Atendimento</p>
                  <p>Presencial com hora marcada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/50">
            © 2026 Salão Rios Unissex. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
