'use client';

import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import AppTable from '@/components/ui/AppTable'; // Import the new AppTable

interface Case {
  id: string;
  title: string;
  status: 'Active' | 'Resolved' | 'Pending';
  client: string;
  lastUpdate: string;
}

const dummyCases: Case[] = [
  { id: 'JC-2024-001', title: 'Client Dispute over Service', status: 'Active', client: 'Acme Corp', lastUpdate: '2 hours ago' },
  { id: 'JC-2024-002', title: 'Contract Violation Claim', status: 'Resolved', client: 'Globex Inc', lastUpdate: '1 day ago' },
  { id: 'JC-2024-003', title: 'Intellectual Property Theft', status: 'Pending', client: 'Soylent Corp', lastUpdate: '3 days ago' },
  { id: 'JC-2024-004', title: 'Employee Misconduct Review', status: 'Active', client: 'Initech', lastUpdate: '5 hours ago' },
  { id: 'JC-2024-005', title: 'Product Liability Inquiry', status: 'Resolved', client: 'Umbrella Corp', lastUpdate: '1 week ago' },
];

const CasesSection: React.FC = () => { // Renamed to CasesSection
  const columns = [
    { key: 'id', header: 'Case ID', colSpan: 2 },
    { key: 'title', header: 'Title', colSpan: 3 },
    {
      key: 'status',
      header: 'Status',
      colSpan: 2,
      render: (caseItem: Case) => (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          caseItem.status === 'Active' ? 'bg-green-100 text-green-800' :
          caseItem.status === 'Resolved' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {caseItem.status}
        </span>
      ),
    },
    { key: 'client', header: 'Client', colSpan: 2 },
    { key: 'lastUpdate', header: 'Last Update', colSpan: 2 },
    {
      key: 'actions',
      header: 'Actions',
      colSpan: 1,
      render: () => (
        <div className="flex items-center space-x-3">
          <a href="#" className="text-blue-600 hover:text-blue-900">
            <Eye size={18} />
          </a>
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            <Edit size={18} />
          </a>
          <a href="#" className="text-red-600 hover:text-red-900">
            <Trash2 size={18} />
          </a>
        </div>
      ),
      cellClassName: 'justify-end', // Align actions to the right
    },
  ];

  return (
    <AppTable<Case>
      data={dummyCases}
      columns={columns}
      rowGridClasses="grid-cols-12" // Match the grid layout
      emptyMessage="No cases found"
    />
  );
};

export default CasesSection;
