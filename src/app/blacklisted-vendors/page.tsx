'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/lib/MainLayout';
import { blacklistedVendors, BlacklistedVendor } from '@/data/blacklisted-vendors';
import AppTable, { TableColumn } from '@/components/ui/AppTable';

const BlacklistedVendorsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter vendors based on search
  const filteredVendors = blacklistedVendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination logic
  const totalItems = filteredVendors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Permanent':
        return 'bg-red-100 text-red-800';
      case 'Temporary':
        return 'bg-orange-100 text-orange-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const columns: TableColumn<BlacklistedVendor>[] = [
    {
      key: 'index',
      header: '#',
      colSpanClasses: 'col-span-1 flex items-center justify-center',
      render: (item, index) => <div className="text-sm text-gray-500">{indexOfFirstItem + index + 1}</div>,
    },
    {
      key: 'vendorInfo',
      header: 'Vendor Information',
      colSpanClasses: 'col-span-6 md:col-span-3',
      render: (item) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <span className="text-red-600 font-bold text-sm">!</span>
          </div>
          <div>
            <div className="font-medium text-gray-900 text-sm">{item.name}</div>
            <div className="text-xs text-gray-500">{item.location}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'reason',
      header: 'Blacklist Reason',
      colSpanClasses: 'hidden md:block md:col-span-4',
      render: (item) => <div className="text-sm text-gray-700 line-clamp-2">{item.reason}</div>,
    },
    {
      key: 'category',
      header: 'Category',
      colSpanClasses: 'col-span-3 md:col-span-2',
      render: (item) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {item.category}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      colSpanClasses: 'col-span-2 md:col-span-1',
      render: (item) => (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
          {item.status}
        </span>
      ),
    },
    {
      key: 'date',
      header: 'Date Added',
      colSpanClasses: 'col-span-1 text-right',
      render: (item) => <div className="text-xs text-gray-500 text-right">{formatDate(item.date)}</div>,
    },
  ];

  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blacklisted Vendors
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A transparent record of vendors with unethical practices. Exercise caution when engaging with these
              entities.
            </p>
          </div>
        </div>
      </div>

      {/* Stats and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{blacklistedVendors.length}</div>
            <div className="text-sm text-gray-600">Total Blacklisted</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">
              {blacklistedVendors.filter(v => v.status === 'Temporary').length}
            </div>
            <div className="text-sm text-gray-600">Temporary Bans</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">
              {blacklistedVendors.filter(v => v.status === 'Permanent').length}
            </div>
            <div className="text-sm text-gray-600">Permanent Bans</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-3">
          <div className="flex-1 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendors, reasons, or categories..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* AppTable Component */}
        <AppTable
          columns={columns}
          data={currentVendors}
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          emptyMessage="No blacklisted vendors found."
          rowGridClasses="grid grid-cols-12 gap-4"
        />
      </div>
    </MainLayout>
  );
};

export default BlacklistedVendorsPage;
