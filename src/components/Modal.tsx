import React from 'react';

interface ModalButton {
  text: string;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  buttons?: ModalButton[];
  subtitle?: string;
  isVisible?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'; // Added size prop
}

const Modal: React.FC<ModalProps> = ({
                                       isOpen,
                                       onClose,
                                       subtitle,
                                       title,
                                       children,
                                       buttons,
                                       isVisible = true,
                                       size = 'md' // Default size to md
                                     }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalWidthClass = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  }[size];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Elegant Backdrop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-md transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal Container */}
      <div className={`relative bg-white rounded-lg shadow-lg border border-gray-200 ${modalWidthClass} w-full transform transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Header */}
        {/* Header */}
        {title && (
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">💡</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                {subtitle && (
                  <p className="text-gray-500 text-sm">{subtitle}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="text-gray-700 p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>

        {/* Footer Buttons - Your Preferred Style */}
        {buttons && buttons.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end space-x-3">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                  button.className ||
                  (button.variant === 'primary'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-800')
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;