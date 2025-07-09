// src/components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center mb-8 mt-8">
    <h2 className="text-3xl font-bold text-[#333333]">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-lg text-[#666666]">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
