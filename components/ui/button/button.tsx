import { type ReactNode } from 'react';
import { cn } from '@/utils/common';

export type ButtonProps = {
  type: 'button' | 'submit';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  type = 'button',
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'bg-blue-700 text-white px-6 transition hover:bg-blue-900',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
