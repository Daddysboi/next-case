
'use client';

import React, { useState } from 'react';
import ComplaintDetailsStep from './ComplaintDetailsStep';
import PersonalDetailsStep from './PersonalDetailsStep';

export interface FormData {
  complaintText: string;
  companyName: string;
  productService: string;
  companyAddress: string;
  claimedLoss: string;
  desiredOutcome: string;
  files: File[] | null;
  complainantName: string;
  complainantEmail: string;
  complainantPhone: string;
  complainantAddress: string;
  selectedCountry: string;
  selectedState: string; // Can be a state from dropdown or free-text
  twitterProfile: string;
  instagramProfile: string;
  whatsAppNumber: string;
  evidenceAttested: boolean;
  termsAccepted: boolean;
}

interface ComplaintWizardProps {
  onOpenGuidelines: () => void;
}

const ComplaintWizard: React.FC<ComplaintWizardProps> = ({ onOpenGuidelines }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    complaintText: '',
    companyName: '',
    productService: '',
    companyAddress: '',
    claimedLoss: '',
    desiredOutcome: '',
    files: null,
    complainantName: '',
    complainantEmail: '',
    complainantPhone: '',
    complainantAddress: '',
    selectedCountry: '',
    selectedState: '',
    twitterProfile: '',
    instagramProfile: '',
    whatsAppNumber: '',
    evidenceAttested: false,
    termsAccepted: false,
  });

  const handleNext = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    // Here you would typically send the formData to your backend
    console.log('Final Form Data:', { ...formData, ...newData });
    alert('Complaint submitted successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ComplaintDetailsStep
            formData={formData}
            onNext={handleNext}
            onOpenGuidelines={onOpenGuidelines}
          />
        );
      case 2:
        return (
          <PersonalDetailsStep
            formData={formData}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-black text-center mb-6">Complaint Registration</h2>

      {/* Step Indicator */}
      <div className="flex justify-center items-center mb-8">
        <div className={`flex items-center ${currentStep >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-green-600 bg-green-100 text-black' : 'border-gray-300 text-gray-500'}`}>
            1
          </div>
          <span className={`ml-2 font-medium ${currentStep >= 1 ? 'text-black' : 'text-gray-500'}`}>Complaint Details</span>
        </div>
        <div className={`flex-auto border-t-2 transition-colors duration-300 mx-4 ${currentStep > 1 ? 'border-green-600' : 'border-gray-300'}`}></div>
        <div className={`flex items-center ${currentStep >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'border-green-600 bg-green-100 text-black' : 'border-gray-300 text-gray-500'}`}>
            2
          </div>
          <span className={`ml-2 font-medium ${currentStep >= 2 ? 'text-black' : 'text-gray-500'}`}>Personal Details</span>
        </div>
      </div>

      <div>
        {renderStep()}
      </div>
    </div>
  );
};

export default ComplaintWizard;
