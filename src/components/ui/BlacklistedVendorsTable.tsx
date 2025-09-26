import React from 'react';
import { BlacklistedVendor } from '@/data/blacklisted-vendors';

interface BlacklistedVendorsTableProps {
  vendors: BlacklistedVendor[];
  indexOfFirstItem: number;
}

const BlacklistedVendorsTable: React.FC<BlacklistedVendorsTableProps> = ({ vendors, indexOfFirstItem }) => {
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Table Header */}
      <div className="border-b border-gray-100">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50">
          <div className="col-span-1">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">S/N</span>
          </div>
          <div className="col-span-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Vendor Information</span>
          </div>
          <div className="col-span-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Blacklist Reason</span>
          </div>
          <div className="col-span-2">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</span>
          </div>
          <div className="col-span-2">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</span>
          </div>
          <div className="col-span-1">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</span>
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {vendors.length > 0 ? (
          vendors.map((vendor, index) => (
            <div key={vendor.id}
                 className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-red-50 transition-colors duration-150">
              {/* Serial Number */}
              <div className="col-span-1 flex items-center text-sm text-gray-700">
                {indexOfFirstItem + index + 1}
              </div>

              {/* Vendor Info */}
              <div className="col-span-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{vendor.name}</div>
                    <div className="text-xs text-gray-500">{vendor.location}</div>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="col-span-3">
                <div className="text-sm text-gray-700 line-clamp-2">{vendor.reason}</div>
              </div>

              {/* Category */}
              <div className="col-span-2">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {vendor.category}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vendor.status)}`}>
                  {vendor.status}
                </span>
              </div>

              {/* Date Added */}
              <div className="col-span-1 text-right">
                <div className="text-xs text-gray-500">{formatDate(vendor.date)}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="px-6 py-12 text-center col-span-12">
            <div className="text-gray-400 text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found</h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlacklistedVendorsTable;
