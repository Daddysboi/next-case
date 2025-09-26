'use client';

import React, { useState } from 'react';
import { Evidence } from '@/data/cases';
import InteractiveEvidenceCard from '@/components/cases/InteractiveEvidenceCard';

const EnhancedEvidenceSection = ({ evidences }: { evidences: Evidence[] }) => {
  const [viewMode, setViewMode] = useState('grid');

  const images = evidences.filter(e => e.type === 'image');
  const videos = evidences.filter(e => e.type === 'video');
  const socialMedia = evidences.filter(e => e.type === 'social');
  const documents = evidences.filter(e => e.type === 'document' || e.type === 'audio');

  const Section = ({ title, items, color }: { title: string, items: Evidence[], color: string }) => {
    if (items.length === 0) return null;
    return (
      <section>
        <h3 className={`text-lg font-semibold text-gray-900 mb-4 flex items-center`}>
          <span className={`w-2 h-2 ${color} rounded-full mr-2`}></span>
          {title} ({items.length})
        </h3>
        <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {items.map((evidence) => (
            <InteractiveEvidenceCard
              key={evidence.id}
              evidence={evidence}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Evidence & Documentation</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg border ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg border ${
              viewMode === 'list'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <Section title="Photo Evidence" items={images} color="bg-blue-500" />
        <Section title="Video Evidence" items={videos} color="bg-red-500" />
        <Section title="Social Media Evidence" items={socialMedia} color="bg-purple-500" />
        <Section title="Documents & Files" items={documents} color="bg-green-500" />
      </div>
    </div>
  );
};

export default EnhancedEvidenceSection;