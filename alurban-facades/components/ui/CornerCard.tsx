import React from 'react';

interface CornerCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  borderTop?: boolean;
  borderBottom?: boolean;
}

export const CornerCard: React.FC<CornerCardProps> = ({ 
  children, 
  className = "", 
  variant = 'light',
  borderTop = true,
  borderBottom = true
}) => {
  const borderColor = variant === 'light' ? 'border-gray-200' : 'border-white/10';
  const crossColor = variant === 'light' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`relative p-6 ${borderTop ? 'border-t' : ''} ${borderBottom ? 'border-b' : ''} ${borderColor} ${className}`}>
      {/* Top Left Cross */}
      {borderTop && (
        <div className={`absolute -top-1.5 -left-1.5 w-3 h-3 ${crossColor}`}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      )}

      {/* Top Right Cross */}
      {borderTop && (
        <div className={`absolute -top-1.5 -right-1.5 w-3 h-3 ${crossColor}`}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      )}

      {children}

      {/* Bottom Left Cross */}
      {borderBottom && (
        <div className={`absolute -bottom-1.5 -left-1.5 w-3 h-3 ${crossColor}`}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      )}

      {/* Bottom Right Cross */}
      {borderBottom && (
        <div className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 ${crossColor}`}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      )}
    </div>
  );
};