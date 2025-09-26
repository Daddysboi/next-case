'use client';

import React, { useState } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { AppTable } from '@/components/ui/AppTable/_partials';
import { TableColumn } from '@/components/ui/AppTable/_partials/types/app-table';

interface Case {
  id: string;
  title: string;
  status: 'Active' | 'Resolved' | 'Pending';
  client: string;
  category?: string;
  lastUpdate: string; // ISO or human-friendly
  createdAt: string; // ISO date
  summary?: string;
}

const dummyCases: Case[] = [
  {
    id: 'JC-2024-001',
    title: 'Client dispute over service delivery',
    status: 'Active',
    client: 'Acme Corp',
    category: 'Service',
    lastUpdate: '2025-09-25T12:30:00Z',
    createdAt: '2025-09-20T09:00:00Z',
    summary: 'Client claims service was not completed as agreed; requesting refund.',
  },
  {
    id: 'JC-2024-002',
    title: 'Contract violation claim',
    status: 'Resolved',
    client: 'Globex Inc',
    category: 'Contract',
    lastUpdate: '2025-09-18T08:15:00Z',
    createdAt: '2025-09-10T10:00:00Z',
    summary: 'Terms allegedly breached; settlement reached.',
  },
  {
    id: 'JC-2024-003',
    title: 'Intellectual property infringement',
    status: 'Pending',
    client: 'Soylent Corp',
    category: 'IP',
    lastUpdate: '2025-09-22T16:00:00Z',
    createdAt: '2025-09-12T11:25:00Z',
    summary: 'Claims of unauthorized use of copyrighted material.',
  },
  {
    id: 'JC-2024-004',
    title: 'Employee misconduct review',
    status: 'Active',
    client: 'Initech',
    category: 'HR',
    lastUpdate: '2025-09-25T09:45:00Z',
    createdAt: '2025-09-21T14:00:00Z',
    summary: 'Internal complaint; under investigation.',
  },
  {
    id: 'JC-2024-005',
    title: 'Product liability inquiry',
    status: 'Resolved',
    client: 'Umbrella Corp',
    category: 'Product',
    lastUpdate: '2025-09-01T07:00:00Z',
    createdAt: '2025-08-25T13:00:00Z',
    summary: 'Issue resolved with product recall and refund.',
  },
];

const statusClasses = {
  Active: 'bg-yellow-100 text-yellow-800',
  Resolved: 'bg-green-100 text-green-800',
  Pending: 'bg-gray-100 text-gray-800',
} as const;

const columns: TableColumn<Case>[] = [
  {
    key: 'index',
    header: '#',
    colSpanClasses: 'col-span-1 flex items-center justify-center',
    // render receives (item, index)
    render: (_item, index) => (
      <div className="text-sm text-gray-500">{index + 1}</div>
    ),
  },
  {
    key: 'caseInfo',
    header: 'Case',
    colSpanClasses: 'col-span-6 md:col-span-3',
    render: (item) => (
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50">
          <span className="text-xs font-semibold text-blue-600">
            {item.client.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <div className="min-w-0">
          <div className="font-medium text-gray-900 text-sm truncate">{item.title}</div>
          <div className="text-xs text-gray-500 mt-0.5 truncate">{item.summary}</div>
          <div className="text-xs text-gray-400 mt-1">Client: <span className="text-gray-600 font-medium">{item.client}</span></div>
        </div>
      </div>
    ),
  },
  {
    key: 'reason',
    header: 'Category',
    colSpanClasses: 'hidden md:block md:col-span-2',
    render: (item) => (
      <div className="text-sm text-gray-700">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {item.category ?? 'General'}
        </span>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    colSpanClasses: 'col-span-2 md:col-span-1',
    render: (item) => (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusClasses[item.status]}`}
      >
        {item.status}
      </span>
    ),
  },
  {
    key: 'date',
    header: 'Updated',
    colSpanClasses: 'col-span-2 text-right',
    render: (item) => {
      const d = new Date(item.lastUpdate);
      const fmt = d.toLocaleString(undefined, { month: 'short', day: 'numeric' });
      return <div className="text-xs text-gray-500 text-right">{fmt}</div>;
    },
  },
  {
    key: 'actions',
    header: 'Actions',
    colSpanClasses: 'col-span-2 md:col-span-2', // Removed text-right
    headerClassName: 'text-right', // Added explicit right alignment for header
    render: (item) => (
      <div className="flex items-center justify-end">
        <button aria-label={`View ${item.id}`} className="p-1 rounded-md hover:bg-gray-100">
          <Eye className="w-4 h-4 text-gray-600" />
        </button>
        <button aria-label={`Edit ${item.id}`} className="p-1 rounded-md hover:bg-gray-100 ml-0.5">
          <Edit className="w-4 h-4 text-gray-600" />
        </button>
        <button aria-label={`Delete ${item.id}`} className="p-1 rounded-md hover:bg-gray-100 ml-0.5">
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      </div>
    ),
  },
];

const CasesSection: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5; // Or another suitable number

  const totalItems = dummyCases.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <AppTable<Case>
        data={dummyCases}
        columns={columns}
        emptyMessage="No cases found"
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CasesSection;
