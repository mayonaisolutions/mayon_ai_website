import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`bg-bg-card border border-border-main rounded-2xl p-6 shadow-volcanic transition-all duration-300 ${
        hoverEffect ? 'hover:shadow-volcanic-lg hover:-translate-y-1 hover:border-brand-volcano/30' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
