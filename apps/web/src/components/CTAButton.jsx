
import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';

function CTAButton({ children, className, variant = 'primary', size = 'lg', ...props }) {
  const baseStyles = 'font-semibold transition-all duration-300 active:scale-[0.98]';
  
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    white: 'bg-white text-primary border border-transparent hover:bg-gray-50 shadow-md'
  };
  
  const sizeStyles = {
    lg: 'px-8 py-6 text-lg rounded-xl min-w-[200px]',
    md: 'px-6 py-4 text-base rounded-lg',
    sm: 'px-4 py-2 text-sm rounded-lg'
  };
  
  return (
    <Button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CTAButton;
