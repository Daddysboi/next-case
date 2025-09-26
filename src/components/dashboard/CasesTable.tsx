'use client';

import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

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

const CasesTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Update
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dummyCases.map((caseItem) => (
              <tr key={caseItem.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {caseItem.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {caseItem.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    caseItem.status === 'Active' ? 'bg-green-100 text-green-800' :
                    caseItem.status === 'Resolved' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {caseItem.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {caseItem.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {caseItem.lastUpdate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                    <Eye size={18} />
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">
                    <Edit size={18} />
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasesTable;