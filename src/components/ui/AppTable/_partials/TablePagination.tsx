import React from 'react';
import Pagination from '../../Pagination';
import { AppTablePaginationProps } from '../../../../types/app-table';

const TablePagination: React.FC<AppTablePaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  if (!onPageChange || !currentPage || !totalPages || !totalItems || !itemsPerPage || totalPages <= 1) {
    return null; // Don't render pagination if not all props are provided or only one page exists
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-gray-100 rounded-b-xl">
      <div className="text-sm text-gray-700">
        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
      </div>
      <div className="flex space-x-2">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages!}
          onPageChange={onPageChange}
          limit={itemsPerPage}
          total={totalItems}
        />
      </div>
    </div>
  );
};

export default TablePagination;
