
'use client';

import React, { useState, useRef } from 'react';

interface AppInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number; // For textarea
  min?: number | string;
  max?: number | string;
  Icon?: React.ReactNode; // Leading icon
  containerClassName?: string; // Class for the wrapper div
  isFloatingLabel?: boolean; // Enable/disable floating label
  showPasswordToggle?: boolean; // Enable/disable password toggle
}

const AppInputField: React.FC<AppInputFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  required,
  disabled,
  readOnly,
  rows,
  min,
  max,
  Icon,
  className,
  containerClassName,
  onFocus,
  onBlur,
  isFloatingLabel = true,
  showPasswordToggle = true,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const isPasswordType = type === 'password';
  const shouldShowFloatingLabel = isFloatingLabel && (isFocused || String(value).length > 0);

  const inputClasses = `
    peer block w-full p-3 border rounded-md shadow-sm outline-none
    ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}
    ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-900'}
    ${Icon ? 'pl-10' : ''}
    ${isPasswordType && showPasswordToggle ? 'pr-10' : ''}
    ${className || ''}
  `;

  const labelClasses = `
    absolute left-3 transition-all duration-200 ease-in-out pointer-events-none
    ${shouldShowFloatingLabel
      ? '-top-2.5 text-xs bg-white px-1 text-blue-600 peer-focus:text-blue-600'
      : rows ? 'top-3 text-base text-gray-500' : 'top-1/2 -translate-y-1/2 text-base text-gray-500'
    }
    ${error ? 'text-red-500' : ''}
  `;

  const renderInput = () => {
    const commonProps = {
      id,
      name,
      value,
      onChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      required,
      disabled,
      readOnly,
      placeholder: isFloatingLabel ? '' : placeholder, // Only show native placeholder if floating label is disabled
      className: inputClasses,
      ref: inputRef,
      ...props,
    };

    if (rows) {
      return <textarea rows={rows} placeholder={isFloatingLabel ? '' : placeholder} {...(commonProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />;
    } else {
      return (
        <input
          type={isPasswordType && showPassword ? 'text' : type}
          min={min}
          max={max}
          autoComplete={props.autoComplete}
          placeholder={isFloatingLabel ? '' : placeholder}
          {...(commonProps as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      );
    }
  };

  return (
    <div className={`relative ${containerClassName || ''}`}>
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">
          {Icon}
        </div>
      )}

      {renderInput()}

      {isFloatingLabel && label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}

      {isPasswordType && showPasswordToggle && (
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.981 12C5.07 10.42 6.612 9 8.228 9h7.544c1.616 0 3.158 1.42 4.247 3M10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          )}
        </span>
      )}

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AppInputField;

