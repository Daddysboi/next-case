import React from 'react';

interface TableEmptyStateProps {
  emptyMessage: string;
}

const TableEmptyState: React.FC<TableEmptyStateProps> = ({ emptyMessage }) => {
  return (
    <div className="px-6 py-12 text-center">
      <div className="text-gray-400 text-4xl mb-4">🔍</div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{emptyMessage}</h3>
      <p className="text-gray-600">Try adjusting your filters or search terms.</p>
    </div>
  );
};

export default TableEmptyState;
