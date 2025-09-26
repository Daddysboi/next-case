import React from 'react';
import { TableColumn } from '@/components/ui/AppTable/_partials/types/app-table';

interface TableRowProps<T> {
  item: T;
  rowIndex: number;
  columns: TableColumn<T>[];
  rowGridClasses: string;
  renderRowActions?: (item: T, index: number) => React.ReactNode;
}

const TableRow = <T extends { id: string | number }>({ item, rowIndex, columns, rowGridClasses, renderRowActions }: TableRowProps<T>) => {
  return (
    <div key={item.id} className={`${rowGridClasses} px-6 py-4 hover:bg-gray-50 transition-colors duration-150`}>
      {columns.map((column) => (
        <div key={`${item.id}-${column.key}`} className={`${column.cellClassName || column.className || ''} ${column.colSpanClasses || 'col-span-full'}`}>
          {column.render ? column.render(item, rowIndex) : (item as any)[column.key]}
        </div>
      ))}
      {renderRowActions && (
        <div className="col-span-1 flex justify-end items-center">
          {renderRowActions(item, rowIndex)}
        </div>
      )}
    </div>
  );
};

export default TableRow;
