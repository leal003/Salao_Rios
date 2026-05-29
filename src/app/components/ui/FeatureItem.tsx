import React from 'react';
import * as LucideIcons from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
  variant?: 'default' | 'compact';
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ 
  title, 
  description, 
  icon,
  variant = 'default'
}) => {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Award;

  if (variant === 'compact') {
    return (
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-12 h-12 bg-[#8B0008] rounded-full flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 bg-[#8B0008] rounded-full flex items-center justify-center mb-4 mx-auto">
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-[#211A1A] text-center mb-2">{title}</h3>
      <p className="text-[#6B5F5F] text-center text-sm">{description}</p>
    </div>
  );
};
