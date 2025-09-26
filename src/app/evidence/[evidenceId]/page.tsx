'use client';

import React from 'react';
import MainLayout from '@/components/lib/MainLayout';
import EvidenceViewer from '@/components/cases/EvidenceViewer';

export default function EvidencePage({ params }: { params: { evidenceId: string } }) {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <EvidenceViewer evidenceId={params.evidenceId} />
        </div>
      </div>
    </MainLayout>
  );
}