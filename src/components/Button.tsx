// src/components/Button.tsx
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: 'bg-[#FFB800] text-[#1E531B] hover:scale-105',
  secondary: 'bg-transparent border border-white text-white hover:bg-white/10',
};

const sizes = {
  sm: 'px-4 py-1 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}: ButtonProps) {
  const classes = `inline-block font-semibold rounded-full transition ${variants[variant]} ${sizes[size]}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Render a real <button> for form submits, onClick handlers, etc.
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
