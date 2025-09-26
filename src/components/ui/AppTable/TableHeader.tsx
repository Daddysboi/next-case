import React from 'react';
import { TableColumn } from '../../../types/app-table';

interface TableHeaderProps<T> {
  columns: TableColumn<T>[];
  rowGridClasses: string;
  renderRowActions?: boolean;
}

const TableHeader = <T,>({ columns, rowGridClasses, renderRowActions }: TableHeaderProps<T>) => {
  return (
    <div className="border-b border-gray-100">
      <div className={`${rowGridClasses} px-6 py-4 bg-gray-50`}>
        {columns.map((column) => (
          <div key={column.key} className={`${column.headerClassName || column.className || ''} ${column.colSpanClasses || 'col-span-full'}`}>
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
  );
};

export default TableHeader;
