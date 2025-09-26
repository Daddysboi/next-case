// components/dashboard/DashboardContent.tsx
'use client';

import React from 'react';
import {
  TrendingUp,
  Users,
  FileCheck,
  Clock,
  CheckCircle2,
  MoreVertical,
  BarChart3
} from 'lucide-react';

const DashboardContent: React.FC = () => {
  // Mock data
  const stats = [
    {
      label: 'Total Cases',
      value: '1,247',
      change: '+12.3%',
      trend: 'up',
      icon: FileCheck,
      color: 'blue'
    },
    {
      label: 'Active Users',
      value: '843',
      change: '+5.2%',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      label: 'Resolved Cases',
      value: '892',
      change: '+8.7%',
      trend: 'up',
      icon: CheckCircle2,
      color: 'purple'
    },
    {
      label: 'Pending Review',
      value: '156',
      change: '-2.1%',
      trend: 'down',
      icon: Clock,
      color: 'orange'
    }
  ];

  const recentActivity = [
    { id: 1, case: 'JC-2024-001', action: 'Status Updated', user: 'Sarah Chen', time: '2 min ago', status: 'resolved' },
    { id: 2, case: 'JC-2024-045', action: 'New Evidence Added', user: 'Mike Johnson', time: '15 min ago', status: 'active' },
    { id: 3, case: 'JC-2024-012', action: 'Comment Added', user: 'Emma Davis', time: '1 hour ago', status: 'review' },
    { id: 4, case: 'JC-2024-078', action: 'Case Created', user: 'Alex Kim', time: '2 hours ago', status: 'active' },
    { id: 5, case: 'JC-2024-033', action: 'Document Uploaded', user: 'Tom Wilson', time: '3 hours ago', status: 'pending' }
  ];

  const caseDistribution = [
    { status: 'Active', count: 356, color: 'bg-blue-500' },
    { status: 'Resolved', count: 892, color: 'bg-green-500' },
    { status: 'Under Review', count: 156, color: 'bg-orange-500' },
    { status: 'Pending', count: 89, color: 'bg-gray-500' }
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      active: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
      review: 'bg-orange-100 text-orange-800',
      pending: 'bg-gray-100 text-gray-800'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'text-blue-600 bg-blue-50',
            green: 'text-green-600 bg-green-50',
            purple: 'text-purple-600 bg-purple-50',
            orange: 'text-orange-600 bg-orange-50'
          };

          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                  <Icon size={24} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp size={16} className={stat.trend === 'down' ? 'rotate-180' : ''} />
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-semibold text-sm">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">{activity.user}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {activity.action} on <span className="font-medium">{activity.case}</span>
                  </p>
                </div>
                <StatusBadge status={activity.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Case Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Case Distribution</h2>

          <div className="space-y-4">
            {caseDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{item.status}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-900 font-semibold">{item.count}</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${(item.count / 1493) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-50 text-blue-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                New Case
              </button>
              <button className="bg-gray-50 text-gray-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cases Over Time</h3>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 size={48} className="text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">Case analytics chart</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp size={48} className="text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">User activity chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;