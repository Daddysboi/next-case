import React from 'react';
import Modal from './Modal';

interface ComplaintWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ComplaintWarningModal: React.FC<ComplaintWarningModalProps> = ({
                                                                       isOpen,
                                                                       onClose,
                                                                       onConfirm
                                                                     }) => {
  const buttons = [
    {
      text: 'Add Details',
      onClick: onClose,
      variant: 'secondary' as const,
    },
    {
      text: 'Post Anyway',
      onClick: onConfirm,
      variant: 'primary' as const,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="A Word of Advice"
      subtitle="Help us help you better"
      buttons={buttons}
    >
      <div className="p-6">
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-4">
          <p className="text-yellow-800 text-sm">
            Short complaints are 70% less likely to get resolved. Consider adding:
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-xs">1</span>
            </div>
            <p className="text-gray-700 text-sm">Specific dates, times, and reference numbers</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-xs">2</span>
            </div>
            <p className="text-gray-700 text-sm">Photos, receipts, or document evidence</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 text-xs">3</span>
            </div>
            <p className="text-gray-700 text-sm">Clear timeline of events</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ComplaintWarningModal;