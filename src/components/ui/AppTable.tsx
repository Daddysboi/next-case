'use client';

import React from 'react';
import Pagination from './Pagination';

// 1. Define the Column Interface
export interface TableColumn<T> {
  key: string; // Unique identifier for the column, usually maps to a data property
  header: string; // Display name for the column header
  render?: (item: T, index: number) => React.ReactNode; // Optional custom render function for cell content
  className?: string; // General classes for the column header and cells (e.g., text alignment)
  headerClassName?: string; // Tailwind classes specifically for the column header
  cellClassName?: string; // Tailwind classes specifically for the column cells
  colSpanClasses?: string; // Tailwind classes for grid column span, e.g., "col-span-6 md:col-span-3"
}

interface AppTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  // Pagination Props (optional, if the table needs its own pagination)
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
  // Optional: Render actions for each row
  renderRowActions?: (item: T, index: number) => React.ReactNode;
  // Optional: Custom class for the table container
  tableContainerClassName?: string;
  // Optional: Custom class for the table body rows (e.g., to define grid-cols)
  rowGridClasses?: string; // New prop for defining the grid for each row
}

const AppTable = <T extends { id: string | number }>({
  columns,
  data,
  loading = false,
  emptyMessage = 'No data available.',
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  renderRowActions,
  tableContainerClassName = 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden',
  rowGridClasses = 'grid grid-cols-12 gap-4', // Default to grid-cols-12
}: AppTableProps<T>) => {

  return (
    <div className={tableContainerClassName}>
      {/* Table Header */}
      <div className="border-b border-gray-100">
        <div className={`${rowGridClasses} px-6 py-4 bg-gray-50`}> {/* Use rowGridClasses here */}
          {columns.map((column) => (
            <div key={column.key} className={`${column.headerClassName || column.className || ''} ${column.colSpanClasses || 'col-span-full'}`}> {/* Use colSpanClasses */}
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                {column.header}
              </span>
            </div>
          ))}
          {renderRowActions && (
            <div className="col-span-1 text-right">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</span>
            </div>
          )}
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {loading ? (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 text-4xl mb-4">⏳</div>
            <h3 className="text-lg font-medium text-gray-900">Loading data...</h3>
          </div>
        ) : data.length > 0 ? (
          data.map((item, rowIndex) => (
            <div key={item.id} className={`${rowGridClasses} px-6 py-4 hover:bg-gray-50 transition-colors duration-150`}> {/* Use rowGridClasses here */}
              {columns.map((column) => (
                <div key={`${item.id}-${column.key}`} className={`${column.cellClassName || column.className || ''} ${column.colSpanClasses || 'col-span-full'}`}> {/* Use colSpanClasses */}
                  {column.render ? column.render(item, rowIndex) : (item as any)[column.key]}
                </div>
              ))}
              {renderRowActions && (
                <div className="col-span-1 flex justify-end items-center">
                  {renderRowActions(item, rowIndex)}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{emptyMessage}</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {onPageChange && currentPage && totalPages && totalItems && itemsPerPage && totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-gray-100 rounded-b-xl">
          <div className="text-sm text-gray-700">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
          </div>
          <div className="flex space-x-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              limit={itemsPerPage}
              total={totalItems}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppTable;
