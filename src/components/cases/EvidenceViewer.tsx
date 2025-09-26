'use client';

import React from 'react';
import Image from 'next/image';
import { Download, ExternalLink } from 'lucide-react';
import { getEvidenceById, Evidence } from '@/data/cases';

interface EvidenceViewerProps {
  evidenceId: string;
}

const EvidenceViewer: React.FC<EvidenceViewerProps> = ({ evidenceId }) => {
  const evidence = getEvidenceById(evidenceId);

  if (!evidence) {
    return <div className="p-8 text-center text-red-500">Evidence not found.</div>;
  }

  const renderMediaContent = () => {
    switch (evidence.type) {
      case 'image':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={evidence.url}
              alt={evidence.title}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        );
      
      case 'video':
        return (
          <div className="w-full h-full bg-black rounded-lg">
            <iframe
              src={evidence.url}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      
      case 'social':
        return (
          <div className="w-full h-full bg-white rounded-lg">
            <div className="h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-lg flex items-center px-4">
              <span className="text-white font-semibold">
                {evidence.platform?.toUpperCase()} Post
              </span>
            </div>
            <div className="p-4 h-[calc(100%-3rem)]">
              <iframe
                src={evidence.url}
                className="w-full h-full rounded-b-lg"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <a 
              href={evidence.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <ExternalLink size={20} />
              <span>View {evidence.type}</span>
            </a>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full bg-gray-900">
      {renderMediaContent()}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{evidence.title}</h3>
        <p className="text-gray-300">{evidence.description}</p>
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
          {evidence.timestamp && (
            <span>Added: {new Date(evidence.timestamp).toLocaleDateString()}</span>
          )}
          {evidence.fileSize && <span>Size: {evidence.fileSize}</span>}
          {evidence.duration && <span>Duration: {evidence.duration}</span>}
        </div>
         {(evidence.type === 'image' || evidence.type === 'document') && (
          <a
            href={evidence.url}
            download
            className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 z-10"
          >
            <Download size={20} />
            <span>Download</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default EvidenceViewer;
