'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/lib/MainLayout';
import CaseCard from '@/components/cases/CaseCard';
import Pagination from '@/components/ui/Pagination';
import FilterBar from '@/components/cases/FilterBar';
import { useAuth } from '@/context/AuthContext';
import { dummyCases, Case } from '@/data/cases'; // Import from the new location

const CasesPage = () => {
  const { user, isAuthenticated } = useAuth();
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    year: '',
    month: '',
    status: '',
    category: '',
    search: ''
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0
  });

  // Fetch cases (simulated)
  const fetchCases = async (page: number = 1) => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      let filteredCases = dummyCases;

      // Apply filters
      if (filters.search) {
        filteredCases = filteredCases.filter(c => 
          c.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          c.description.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      if (filters.year) {
        filteredCases = filteredCases.filter(c => new Date(c.createdAt).getFullYear().toString() === filters.year);
      }
      if (filters.month) {
        filteredCases = filteredCases.filter(c => (new Date(c.createdAt).getMonth() + 1).toString() === filters.month);
      }
      if (filters.status) {
        filteredCases = filteredCases.filter(c => c.status === filters.status);
      }

      const total = filteredCases.length;
      const totalPages = Math.ceil(total / pagination.limit);
      const startIndex = (page - 1) * pagination.limit;
      const paginatedCases = filteredCases.slice(startIndex, startIndex + pagination.limit);
      
      setCases(paginatedCases);
      setPagination(prev => ({
        ...prev,
        page: page,
        total: total,
        totalPages: totalPages
      }));
    } catch (error) {
      console.error('Error fetching cases:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases(pagination.page);
  }, [filters]);

  const handlePageChange = (page: number) => {
    fetchCases(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleLike = async (caseId: string) => {
    if (!isAuthenticated) return;
    setCases(prevCases => 
      prevCases.map(c => 
        c.id === caseId 
          ? { ...c, likes: c.isLiked ? c.likes - 1 : c.likes + 1, isLiked: !c.isLiked } 
          : c
      )
    );
  };

  const handleFollow = async (caseId: string) => {
    if (!isAuthenticated) return;
    setCases(prevCases => 
      prevCases.map(c => 
        c.id === caseId 
          ? { ...c, isFollowing: !c.isFollowing } 
          : c
      )
    );
  };

  return (
    <MainLayout>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through transparent case records. Track progress, learn from resolutions, 
              and participate in the justice community.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{pagination.total}</div>
              <div className="text-sm text-gray-600">Total Cases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {dummyCases.filter(c => c.status === 'resolved').length}
              </div>
              <div className="text-sm text-gray-600">Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {dummyCases.filter(c => c.status === 'active').length}
              </div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {dummyCases.reduce((sum, c) => sum + c.likes, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar 
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={() => setFilters({
            year: '',
            month: '',
            status: '',
            category: '',
            search: ''
          })}
        />

        {/* Cases Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : cases.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cases.map((caseItem) => (
                <CaseCard
                  key={caseItem.id}
                  case={caseItem}
                  onLike={handleLike}
                  onFollow={handleFollow}
                  isAuthenticated={isAuthenticated}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              limit={pagination.limit}
              total={pagination.total}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No cases found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CasesPage;
