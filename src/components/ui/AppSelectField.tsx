'use client';

import React, { useState, useRef } from 'react';
import Select, { components, SingleValue, ControlProps } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface AppSelectFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: OptionType[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  containerClassName?: string;
  isFloatingLabel?: boolean;
}

const AppSelectField: React.FC<AppSelectFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
  disabled,
  readOnly,
  containerClassName,
  isFloatingLabel = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  const handleSelectChange = (option: SingleValue<OptionType>) => {
    onChange(option ? option.value : '');
  };

  const shouldShowFloatingLabel = isFloatingLabel && (isFocused || (value && value.length > 0));

  const labelClasses = `
    absolute left-3 transition-all duration-200 ease-in-out pointer-events-none z-10
    ${shouldShowFloatingLabel
      ? '-top-2.5 text-xs bg-white px-1 text-blue-600'
      : 'top-1/2 -translate-y-1/2 text-base text-gray-500'
    }
    ${error ? 'text-red-500' : ''}
  `;

  const customStyles = {
    control: (provided: any, state: ControlProps<OptionType, false>) => ({
      ...provided,
      minHeight: '48px', // Match input field height
      borderColor: error ? '#ef4444' : (state.isFocused ? '#3b82f6' : '#d1d5db'),
      boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#3b82f6' : '#9ca3af',
      },
      backgroundColor: disabled ? '#f3f4f6' : '#fff',
      cursor: disabled ? 'not-allowed' : 'default',
      paddingLeft: isFloatingLabel ? '0' : '8px', // Adjust padding if floating label is active
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: '0 8px',
      overflow: 'visible',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      position: 'absolute',
      top: shouldShowFloatingLabel ? '25%' : '50%',
      transform: shouldShowFloatingLabel ? 'translateY(-50%)' : 'translateY(-50%)',
      transition: 'top 0.2s, font-size 0.2s',
      color: '#6b7280', // Default placeholder color
      fontSize: shouldShowFloatingLabel ? '0.75rem' : '1rem',
      margin: '0',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      margin: '0',
      color: disabled ? '#6b7280' : '#171717',
      paddingLeft: isFloatingLabel && shouldShowFloatingLabel ? '0' : '0',
    }),
    input: (provided: any) => ({
      ...provided,
      margin: '0',
      padding: '0',
      color: '#171717', // Ensure input text is dark
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#6b7280',
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999, // Ensure dropdown is above other elements
    }),
  };

  const Control = ({ children, ...controlProps }: ControlProps<OptionType, false>) => {
    const { innerProps, isFocused: controlIsFocused } = controlProps;
    const showLabel = isFloatingLabel && (controlIsFocused || (value && value.length > 0));

    return (
      <components.Control {...controlProps}>
        {isFloatingLabel && label && (
          <label
            htmlFor={id}
            className={`absolute left-3 transition-all duration-200 ease-in-out pointer-events-none z-10
              ${showLabel
                ? '-top-2.5 text-xs bg-white px-1 text-blue-600'
                : 'top-1/2 -translate-y-1/2 text-base text-gray-500'
              }
              ${error ? 'text-red-500' : ''}
            `}
          >
            {label}
          </label>
        )}
        {children}
      </components.Control>
    );
  };

  return (
    <div className={`relative ${containerClassName || ''}`}>
      <Select
        id={id}
        name={name}
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder}
        isDisabled={disabled || readOnly}
        isSearchable // Enable search functionality
        styles={customStyles}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        components={{ Control }}
        required={required}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AppSelectField;