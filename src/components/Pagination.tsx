'use client';

import React from 'react';
import { IPagination } from './pagination.types';
import ArrowHeadIcon from '../../../public/assets/svg_components/ArrowHeadIcon';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';

function Pagination({ pagination, size = 'md', batchSize = 5 }: IPagination & { batchSize?: number }) {
  const { setPage, page, pageSize, count } = pagination;

  const totalPages = Math.ceil(count / pageSize);
  if (totalPages <= 1) return null;

  const totalBatches = Math.ceil(totalPages / batchSize);
  const currentBatch = Math.floor((page - 1) / batchSize);

  const startPage = currentBatch * batchSize + 1;
  const endPage = Math.min(startPage + batchSize - 1, totalPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const goToPage = (pg: number) => {
    if (pg >= 1 && pg <= totalPages) setPage(pg);
  };

  const goToBatch = (batchIndex: number) => {
    const pg = batchIndex * batchSize + 1;
    goToPage(pg);
  };

  const sizeClasses = {
    container: {
      sm: 'py-1 px-2 text-[10px]',
      md: 'py-[4px] px-[6px] text-xs',
      lg: 'py-[6px] px-[10px] text-sm',
    },
    icon: {
      sm: 'w-[12px] h-[12px]',
      md: 'w-[14px] h-[14px]',
      lg: 'w-[16px] h-[16px]',
    },
    button: {
      sm: 'p-1',
      md: 'p-1.5',
      lg: 'p-2',
    },
  };

  return (
    <div className="flex items-center justify-center w-fit">
      <div
        className={`flex items-center bg-white shadow-custom-lg border border-gray-200 rounded-full space-x-1 ${sizeClasses.container[size]}`}
      >
        {/* First Page << */}
        <button
          className={`rounded-full transition-colors ${sizeClasses.button[size]} ${page > 1 ? 'cursor-pointer hover:bg-gray-100' : 'cursor-not-allowed'}`}
          onClick={() => goToPage(1)}
          disabled={page <= 1}
        >
          <DoubleArrowLeftIcon
            className={`${sizeClasses.icon[size]} ${page > 1 ? 'stroke-[#04C171]' : 'stroke-gray-400'}`} />
        </button>


        {/* Previous Batch < */}
        <button
          className={`rounded-full hover:bg-gray-100 transition-colors ${sizeClasses.button[size]} ${currentBatch > 0 ? 'cursor-pointer hover:bg-gray-100' : 'cursor-not-allowed'}`}
          onClick={() => goToBatch(currentBatch - 1)}
          disabled={currentBatch <= 0}
        >
          <ArrowHeadIcon
            className={`rotate-180  ${currentBatch > 0 ? 'stroke-[#04C171]' : 'stroke-[#ccc]'} ${sizeClasses.icon[size]} `} />
        </button>

        {/* Page Numbers */}
        {pages.map((pg) => (
          <button
            key={pg}
            onClick={() => goToPage(pg)}
            className={`px-2 py-1 rounded hover:bg-gray-100 ${
              pg === page
                ? 'bg-[#04C171] text-white font-semibold'
                : 'text-gray-700'
            }`}
          >
            {pg}
          </button>
        ))}

        {/* Next Batch > */}
        <button
          className={`rounded-full  transition-colors ${sizeClasses.button[size]} ${currentBatch < totalBatches - 1 ? 'cursor-pointer hover:bg-gray-100' : 'cursor-not-allowed'}`}
          onClick={() => goToBatch(currentBatch + 1)}
          disabled={currentBatch >= totalBatches - 1}
        >
          <ArrowHeadIcon
            className={`${sizeClasses.icon[size]} ${currentBatch < totalBatches - 1 ? 'stroke-[#04C171]' : 'stroke-[#ccc]'}`} />
        </button>

        {/* Last Page >> */}
        <button
          className={`rounded-full transition-colors ${sizeClasses.button[size]} ${page < totalPages ? 'cursor-pointer hover:bg-gray-100' : 'cursor-not-allowed'}`}
          onClick={() => goToPage(totalPages)}
          disabled={page >= totalPages}
        >
          <DoubleArrowRightIcon
            className={`${sizeClasses.icon[size]} ${page < totalPages ? 'text-[#04C171]' : 'stroke-[#ccc]'}`} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
