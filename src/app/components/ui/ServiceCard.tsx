import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: any;
  icon: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon }) => {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Sparkles;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute top-4 right-4 w-14 h-14 bg-[#8B0008] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
        <IconComponent className="w-7 h-7 text-white" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#211A1A] mb-2">{title}</h3>
        <p className="text-[#6B5F5F]">{description}</p>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E31B2F] rounded-2xl transition-colors duration-300 pointer-events-none" />
    </div>
  );
};
