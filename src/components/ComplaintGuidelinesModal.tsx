import React, { useState } from 'react';
import Modal from './Modal';

interface ComplaintGuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComplaintGuidelinesModal: React.FC<ComplaintGuidelinesModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'dos' | 'donts' | 'tips'>('dos');

  const tabsContent = {
    dos: (
      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-3 ">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-semibold text-gray-900">Be Specific & Clear</h4>
            <p className="text-sm text-gray-600">State exactly the issue and what resolution you want</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-3 ">
          <span className="text-2xl">📅</span>
          <div>
            <h4 className="font-semibold text-gray-900">Include Key Details</h4>
            <p className="text-sm text-gray-600">Dates, order numbers, locations</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-3">
          <span className="text-2xl">📎</span>
          <div>
            <h4 className="font-semibold text-gray-900">Attach Evidence</h4>
            <p className="text-sm text-gray-600">Receipts, photos, screenshots</p>
          </div>
        </div>
      </div>
    ),

    donts: (
      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-3  rounded-lg">
          <span className="text-2xl">🚫</span>
          <div>
            <h4 className="font-semibold text-gray-900">No Personal Attacks</h4>
            <p className="text-sm text-gray-600">Stay professional and polite</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-3  rounded-lg">
          <span className="text-2xl">🙅</span>
          <div>
            <h4 className="font-semibold text-gray-900">No Second-hand Stories</h4>
            <p className="text-sm text-gray-600">Share only direct experiences</p>
          </div>
        </div>
      </div>
    ),

    tips: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3  rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <p className="text-sm font-medium">Act quickly</p>
          </div>
          <div className="text-center p-3  rounded-lg">
            <div className="text-2xl mb-2">📊</div>
            <p className="text-sm font-medium">Be organized</p>
          </div>
          <div className="text-center p-3  rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <p className="text-sm font-medium">Stay focused</p>
          </div>
          <div className="text-center p-3  rounded-lg">
            <div className="text-2xl mb-2">✅</div>
            <p className="text-sm font-medium">Follow up</p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Complaint Writing Guide"
      subtitle="Learn how to write complaints that get results"
      buttons={[
        {
          text: 'Start Writing',
          onClick: onClose,
          className: 'px-6 py-2 bg-black text-white rounded hover:shadow-lg',
        },
      ]}
    >
      <div className="max-h-[60vh] overflow-y-auto">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {[
            { id: 'dos' as const, label: 'Do\'s', emoji: '✅' },
            { id: 'donts' as const, label: 'Don\'ts', emoji: '❌' },
            { id: 'tips' as const, label: 'Pro Tips', emoji: '💡' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-1">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tabsContent[activeTab]}
      </div>
    </Modal>
  );
};

export default ComplaintGuidelinesModal;