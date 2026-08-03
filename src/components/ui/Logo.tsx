import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* Brand logo image from public/image.png */}
      <img
        src="/image.png"
        alt="Mayon AI Solutions Logo"
        className="w-9 h-9 object-contain"
      />
      {showText && (
        <span className="text-xl font-bold tracking-tight text-text-primary">
          Mayon<span className="text-purple-600 font-extrabold">.</span><span className="text-xs font-semibold tracking-widest text-text-secondary uppercase ml-1 px-1.5 py-0.5 rounded border border-border-main bg-bg-card">AI</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
