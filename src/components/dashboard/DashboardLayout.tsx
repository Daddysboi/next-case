// components/dashboard/DashboardLayout.tsx - UPDATED VERSION
'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // New state for desktop collapse

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`relative z-40 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isCollapsed={isCollapsed} // Pass collapsed state to Sidebar
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Toggle Button for Sidebar */}
      <button
        onClick={toggleSidebar}
        className={`hidden lg:flex fixed top-24 z-50 
          w-6 h-6 bg-white rounded-full shadow-md 
          items-center justify-center hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-700
          ${isCollapsed ? 'left-13' : 'left-61'}`}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}</button>
    </div>
  );
};

export default DashboardLayout;