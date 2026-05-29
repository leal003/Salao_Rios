import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-6xl text-[#8B0008] leading-none mb-4">"</div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#C99A4A] text-[#C99A4A]" />
        ))}
      </div>
      
      <p className="text-[#211A1A] mb-6 leading-relaxed">{text}</p>
      
      <div className="border-t border-[#E7D8D8] pt-4">
        <p className="font-semibold text-[#8B0008]">— {name}</p>
      </div>
    </div>
  );
};
