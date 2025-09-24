'use client';

import { AuthLayout, ComplaintWizard } from '@/components';
import ComplaintGuidelinesModal from '@/components/ComplaintGuidelinesModal';
import React, { useState } from 'react';

const ComplaintPage = () => {
  const [isGuidelinesModalOpen, setIsGuidelinesModalOpen] = useState(false);

  const handleOpenGuidelinesModal = () => {
    setIsGuidelinesModalOpen(true);
  };

  const handleCloseGuidelinesModal = () => {
    setIsGuidelinesModalOpen(false);
  };

  return (
    <AuthLayout
      title="Complaint Registration Form"
      description="Your complaint will be shown publicly. Please provide as much information as possible."
    >
      <ComplaintWizard onOpenGuidelines={handleOpenGuidelinesModal} />
      {isGuidelinesModalOpen && <ComplaintGuidelinesModal isOpen={isGuidelinesModalOpen} onClose={handleCloseGuidelinesModal} />}
    </AuthLayout>
  );
};

export default ComplaintPage;
