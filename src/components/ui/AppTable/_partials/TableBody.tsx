import React from 'react';
import { TableColumn } from '@/components/ui/AppTable/_partials/types/app-table';
import TableRow from './TableRow';
import TableLoadingState from './TableLoadingState';
import TableEmptyState from './TableEmptyState';

interface TableBodyProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  loading: boolean;
  emptyMessage: string;
  rowGridClasses: string;
  renderRowActions?: (item: T, index: number) => React.ReactNode;
}

const TableBody = <T extends { id: string | number }>({ columns, data, loading, emptyMessage, rowGridClasses, renderRowActions }: TableBodyProps<T>) => {
  return (
    <div className="divide-y divide-gray-100">
      {loading ? (
        <TableLoadingState />
      ) : data.length > 0 ? (
        data.map((item, rowIndex) => (
          <TableRow
            key={item.id}
            item={item}
            rowIndex={rowIndex}
            columns={columns}
            rowGridClasses={rowGridClasses}
            renderRowActions={renderRowActions}
          />
        ))
      ) : (
        <TableEmptyState emptyMessage={emptyMessage} />
      )}
    </div>
  );
};

export default TableBody;
