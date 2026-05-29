import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 font-semibold';
  
  const variantStyles = {
    primary: 'bg-[#C80012] text-white hover:bg-[#E31B2F] hover:shadow-lg hover:scale-105',
    secondary: 'bg-[#8B0008] text-white hover:bg-[#5A0005] hover:shadow-lg',
    outline: 'border-2 border-[#8B0008] text-[#8B0008] hover:bg-[#8B0008] hover:text-white',
    white: 'bg-white text-[#8B0008] hover:bg-[#F8F5F2] hover:shadow-lg hover:scale-105',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
