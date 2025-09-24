
'use client';

import React, { useState } from 'react';
import { AppInputField, FileUpload, Button } from '@/components';
import ComplaintWarningModal from '@/components/ComplaintWarningModal';
import ComplaintGuidelinesModal from '@/components/ComplaintGuidelinesModal';
import { FormData } from '../ComplaintWizard'; // Import FormData

interface ComplaintDetailsStepProps {
  formData: FormData;
  onNext: (data: Partial<FormData>) => void;
  onOpenGuidelines: () => void;
}

const ComplaintDetailsStep: React.FC<ComplaintDetailsStepProps> = ({
  formData,
  onNext,
  onOpenGuidelines,
}) => {
  const [complaintText, setComplaintText] = useState(formData.complaintText || '');
  const [companyName, setCompanyName] = useState(formData.companyName || '');
  const [productService, setProductService] = useState(formData.productService || '');
  const [companyAddress, setCompanyAddress] = useState(formData.companyAddress || '');
  const [claimedLoss, setClaimedLoss] = useState(formData.claimedLoss || '');
  const [desiredOutcome, setDesiredOutcome] = useState(formData.desiredOutcome || '');
  const [files, setFiles] = useState(formData.files || null);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (complaintText.length < 50) {
      setIsWarningModalOpen(true);
    } else {
      onNext({
        complaintText,
        companyName,
        productService,
        companyAddress,
        claimedLoss,
        desiredOutcome,
        files,
      });
    }
  };

  const handleCloseWarningModal = () => {
    setIsWarningModalOpen(false);
  };

  const handleConfirmSubmit = () => {
    setIsWarningModalOpen(false);
    onNext({
      complaintText,
      companyName,
      productService,
      companyAddress,
      claimedLoss,
      desiredOutcome,
      files,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <AppInputField
        id="complaintText"
        name="complaintText"
        label="Your complaint (shown publicly)"
        rows={7}
        value={complaintText}
        onChange={(e) => setComplaintText(e.target.value)}
        placeholder="Tell us what happened and what exactly we can do to help this situation."
        required
      />
      <div className="flex justify-end -mt-4 mb-4">
        <button type="button" onClick={onOpenGuidelines} className="text-blue-600 hover:underline text-sm">
          Read complaint guidelines
        </button>
      </div>

      <AppInputField
        id="companyName"
        name="companyName"
        label="Company I’m complaining about..."
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />

      <AppInputField
        id="productService"
        name="productService"
        label="Product/Service I’m complaining about..."
        type="text"
        value={productService}
        onChange={(e) => setProductService(e.target.value)}
        required
      />

      <AppInputField
        id="companyAddress"
        name="companyAddress"
        label="Address of the company (optional)"
        type="text"
        value={companyAddress}
        onChange={(e) => setCompanyAddress(e.target.value)}
      />

      <AppInputField
        id="claimedLoss"
        name="claimedLoss"
        label="Claimed loss (optional)"
        type="text"
        value={claimedLoss}
        onChange={(e) => setClaimedLoss(e.target.value)}
        placeholder="e.g., $100.00"
      />

      <AppInputField
        id="desiredOutcome"
        name="desiredOutcome"
        label="Desired Outcome (optional)"
        rows={3}
        value={desiredOutcome}
        onChange={(e) => setDesiredOutcome(e.target.value)}
        placeholder="What resolution are you seeking?"
      />

      <FileUpload
        id="fileUpload"
        label="Add photos/videos"
        onFilesChange={setFiles}
        allowedFormats="image/jpeg,image/png,image/gif,video/mp4,video/avi,video/mov,video/mpeg"
        multiple
      />
      {files && files.length > 0 && (
        <p className="mt-2 text-sm text-gray-500">{files.length} file(s) chosen</p>
      )}

      <div className="flex justify-end mt-6">
        <Button type="submit" variant="primary">
          Next
        </Button>
      </div>

      {isWarningModalOpen && <ComplaintWarningModal isOpen={isWarningModalOpen} onClose={handleCloseWarningModal} onConfirm={handleConfirmSubmit} />}
    </form>
  );
};

export default ComplaintDetailsStep;
