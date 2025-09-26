'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import EvidenceViewer from '@/components/cases/EvidenceViewer';

export default function InterceptedEvidencePage({ params }: { params: { evidenceId: string } }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component has mounted
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    // Wait for the animation to finish before navigating back
    setTimeout(() => {
      router.back();
    }, 300); // Should match the duration of the transition
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 ease-in-out ${
        show ? 'bg-black/80' : 'bg-transparent'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] h-full relative transition-all duration-300 ease-in-out ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 transition-opacity duration-300"
        >
          <X size={24} />
        </button>
        <div className="w-full h-full overflow-y-auto rounded-lg">
          <EvidenceViewer evidenceId={params.evidenceId} />
        </div>
      </div>
    </div>
  );
}
