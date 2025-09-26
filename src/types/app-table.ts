import React from 'react';

export interface TableColumn<T> {
  key: string; // Unique identifier for the column, usually maps to a data property
  header: string; // Display name for the column header
  render?: (item: T, index: number) => React.ReactNode; // Optional custom render function for cell content
  className?: string; // General classes for the column header and cells (e.g., text alignment)
  headerClassName?: string; // Tailwind classes specifically for the column header
  cellClassName?: string; // Tailwind classes specifically for the column cells
  colSpanClasses?: string; // Tailwind classes for grid column span, e.g., "col-span-6 md:col-span-3"
}

export interface AppTableProps<T> {
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