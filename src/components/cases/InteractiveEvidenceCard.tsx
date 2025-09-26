'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Expand, Play, ExternalLink } from 'lucide-react';
import { Evidence } from '@/data/cases';

const InteractiveEvidenceCard = ({ evidence }: { evidence: Evidence }) => {
  const renderPreview = () => {
    switch (evidence.type) {
      case 'image':
        return (
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={evidence.thumbnail || evidence.url}
              alt={evidence.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <Expand size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src={evidence.thumbnail || '/default-video-thumb.jpg'}
              alt={evidence.title}
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <Play size={32} className="text-white ml-1" />
              </div>
            </div>
            {evidence.duration && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                {evidence.duration}
              </div>
            )}
          </div>
        );
      case 'social':
        return (
          <div
            className="relative w-full h-48 rounded-lg overflow-hidden border-2"
            style={{
              borderColor: evidence.platform === 'instagram' ? '#E1306C' :
                           evidence.platform === 'twitter' ? '#1DA1F2' :
                           evidence.platform === 'facebook' ? '#1877F2' : '#666'
            }}
          >
            <Image
              src={evidence.thumbnail || '/default-social-thumb.jpg'}
              alt={evidence.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-semibold capitalize">
              {evidence.platform}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <ExternalLink size={24} className="text-white opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        );
      default:
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">
                {evidence.type === 'document' && ''}
                {evidence.type === 'audio' && ''}
                {evidence.type === 'link' && ''}
              </div>
              <span className="font-semibold text-gray-700">{evidence.type.toUpperCase()}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <Link href={`/evidence/${evidence.id}`} scroll={false}>
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 group">
        {renderPreview()}
        <div className="mt-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-gray-900 line-clamp-2 flex-1">{evidence.title}</h4>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded ml-2 capitalize">
              {evidence.type}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{evidence.description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            {evidence.timestamp && (
              <span>{new Date(evidence.timestamp).toLocaleDateString()}</span>
            )}
            {evidence.fileSize && <span>{evidence.fileSize}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InteractiveEvidenceCard;