'use client';

import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TablePagination from './TablePagination';
import { TableColumn, AppTableProps } from '../../../types/app-table';

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
      <TableHeader
        columns={columns}
        rowGridClasses={rowGridClasses}
        renderRowActions={!!renderRowActions}
      />
      <TableBody
        columns={columns}
        data={data}
        loading={loading}
        emptyMessage={emptyMessage}
        rowGridClasses={rowGridClasses}
        renderRowActions={renderRowActions}
      />
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AppTable;
