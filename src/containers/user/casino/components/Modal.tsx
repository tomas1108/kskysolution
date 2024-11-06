import React from 'react';
import { cn } from '~/lib/utils'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50')}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center pb-3">
          <h3 className="text-lg font-bold text-black">{title}</h3> 
          <button onClick={onClose} className="text-black">
            ✖
          </button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};
