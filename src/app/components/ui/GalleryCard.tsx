import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { X } from 'lucide-react';

interface GalleryCardProps {
  src: any;
  alt: string;
  category?: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ src, alt, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-square">
          <ImageWithFallback
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8B0008]/80 via-[#8B0008]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {category && (
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white font-semibold text-sm uppercase tracking-wider">
                {category}
              </p>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#E31B2F] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] w-full">
            <ImageWithFallback
              src={src}
              alt={alt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
