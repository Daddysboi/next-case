export interface BlacklistedVendor {
  id: string;
  name: string;
  reason: string;
  date: string;
  category: string;
  status: 'Permanent' | 'Temporary' | 'Under Review';
  location: string;
}

export const blacklistedVendors: BlacklistedVendor[] = [
  {
    id: '1',
    name: 'XYZ Construction Ltd',
    reason: 'Multiple cases of substandard materials and contract violations',
    date: '2024-01-15',
    category: 'Construction',
    status: 'Permanent',
    location: 'Lagos, Nigeria',
  },
  {
    id: '2',
    name: 'QuickServe Suppliers',
    reason: 'Consistent delivery delays and fraudulent billing practices',
    date: '2024-02-20',
    category: 'Logistics',
    status: 'Temporary',
    location: 'Abuja, Nigeria',
  },
  {
    id: '3',
    name: 'Innovate Solutions Inc.',
    reason: 'Intellectual property theft and unauthorized use of proprietary software.',
    date: '2023-11-30',
    category: 'Technology',
    status: 'Permanent',
    location: 'Nairobi, Kenya',
  },
  {
    id: '4',
    name: 'GreenHarvest Agro',
    reason: 'Sale of uncertified and low-quality seeds to farmers.',
    date: '2024-03-05',
    category: 'Agriculture',
    status: 'Under Review',
    location: 'Accra, Ghana',
  },
  {
    id: '5',
    name: 'MediCare Pharmaceuticals',
    reason: 'Distribution of expired and counterfeit medical drugs.',
    date: '2023-10-01',
    category: 'Healthcare',
    status: 'Permanent',
    location: 'Johannesburg, South Africa',
  },
  {
    id: '6',
    name: 'Swift Logistics & Freight',
    reason: 'Repeated failure to meet delivery timelines and damaged goods.',
    date: '2024-04-12',
    category: 'Logistics',
    status: 'Temporary',
    location: 'Cairo, Egypt',
  },
  {
    id: '7',
    name: 'Digital-First Marketing',
    reason: 'Misleading advertising and failure to deliver promised results.',
    date: '2023-12-22',
    category: 'Marketing',
    status: 'Under Review',
    location: 'Lagos, Nigeria',
  },
  {
    id: '8',
    name: 'BuildRight Construction',
    reason: 'Use of inferior building materials, leading to structural integrity issues.',
    date: '2024-01-25',
    category: 'Construction',
    status: 'Permanent',
    location: 'Abuja, Nigeria',
  },
  {
    id: '9',
    name: 'TechPro Solutions',
    reason: 'Data breach and failure to protect sensitive client information.',
    date: '2023-09-18',
    category: 'Technology',
    status: 'Permanent',
    location: 'Nairobi, Kenya',
  },
  {
    id: '10',
    name: 'AgroMax Ltd.',
    reason: 'Non-payment to local farmers and suppliers.',
    date: '2024-05-01',
    category: 'Agriculture',
    status: 'Temporary',
    location: 'Accra, Ghana',
  },
  {
    id: '11',
    name: 'HealthBridge Diagnostics',
    reason: 'Inaccurate lab results and poor handling of patient data.',
    date: '2023-08-15',
    category: 'Healthcare',
    status: 'Under Review',
    location: 'Johannesburg, South Africa',
  },
  {
    id: '12',
    name: 'Global-Exporters',
    reason: 'Violation of trade agreements and smuggling of goods.',
    date: '2024-02-10',
    category: 'Logistics',
    status: 'Permanent',
    location: 'Cairo, Egypt',
  },
];