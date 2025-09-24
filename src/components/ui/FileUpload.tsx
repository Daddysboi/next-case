"use client";

import React, { useRef, useState, useEffect } from 'react';

interface FileUploadProps {
  label?: string;
  id: string;
  onFilesChange: (files: File[] | null) => void; // Changed to File[]
  allowedFormats?: string; // e.g., "image/jpeg,image/png"
  multiple?: boolean;
  error?: string;
  initialFiles?: File[]; // Added for pre-filling files
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  id,
  onFilesChange,
  allowedFormats,
  multiple = false,
  error,
  initialFiles = [],
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>(initialFiles);

  useEffect(() => {
    onFilesChange(selectedFiles.length > 0 ? selectedFiles : null);
  }, [selectedFiles, onFilesChange]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      if (multiple) {
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      } else {
        setSelectedFiles(newFiles);
      }
    }
    // Clear the input value to allow re-uploading the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      const newFiles = Array.from(event.dataTransfer.files);
      if (multiple) {
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      } else {
        setSelectedFiles(newFiles);
      }
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div
        className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${error ? 'border-red-500' : 'border-gray-300'} cursor-pointer`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <span>Upload a file</span>
              <input
                id={id}
                name={id}
                type="file"
                className="hidden"
                multiple={multiple}
                accept={allowedFormats}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          {allowedFormats && (
            <p className="text-xs text-gray-500">
              Allowed file formats: {allowedFormats.split(',').map(f => f.split('/')[1]).join(', ')}
            </p>
          )}
        </div>
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Selected Files:</p>
          <ul className="space-y-2">
            {selectedFiles.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-md bg-gray-50">
                <span className="text-sm text-gray-900 truncate pr-2">{file.name} ({file.type})</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(file)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium ml-2 flex-shrink-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUpload;
