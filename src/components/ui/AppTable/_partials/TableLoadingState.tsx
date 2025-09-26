import React from 'react';

const TableLoadingState: React.FC = () => {
  return (
    <div className="px-6 py-12 text-center">
      <div className="text-gray-400 text-4xl mb-4">⏳</div>
      <h3 className="text-lg font-medium text-gray-900">Loading data...</h3>
    </div>
  );
};

export default TableLoadingState;
