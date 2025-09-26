// components/dashboard/Sidebar.tsx - UPDATED VERSION
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Folder, Users, Settings, LogOut, X,
  BarChart3, FileText, Shield, Bell, Calendar, TrendingUp
} from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isCollapsed?: boolean; // New prop
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, isCollapsed = false }) => {
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Cases', href: '/dashboard/cases', icon: Folder },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Security', href: '/security', icon: Shield },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        ref={sidebar}
                className={`h-screen bg-white border-r border-gray-200 transform transition-all duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isCollapsed ? 'lg:w-16' : 'lg:w-64'}`}
      >
        {/* Sidebar Header */}
        <div className={`flex items-center justify-between p-4 border-b border-gray-200 ${
          isCollapsed ? 'lg:justify-center lg:px-2' : ''
        }`}>
          <Link href="/dashboard" className={`flex items-center space-x-3 ${isCollapsed ? 'lg:space-x-0' : ''}`}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NextCase
              </span>
            )}
          </Link>

          <button
            ref={trigger}
            className="lg:hidden text-gray-400 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col flex-grow">
          {/* Navigation */}
          <nav className="p-2 flex-grow">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-2 space-x-3'
                    } ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border border-blue-100'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    {!isCollapsed && <span>{item.name}</span>}

                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {item.name}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Sign Out Section */}
          <div className={`mt-auto pt-4 border-t border-gray-200 ${isCollapsed ? 'lg:px-1' : ''}`}>
            <button className={`flex items-center w-full text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 ${
              isCollapsed ? 'lg:justify-center px-2 py-2' : 'px-3 py-2 space-x-3'
            }`}>
              <LogOut size={18} />
              {!isCollapsed && <span>Sign Out</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;