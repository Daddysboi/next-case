// components/cases/CaseCard.tsx
import React from 'react';
import Link from 'next/link';

interface Case {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'resolved' | 'under_review';
  amount: number;
  createdAt: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isFollowing: boolean;
  category: string;
  parties: string[];
}

interface CaseCardProps {
  case: Case;
  onLike: (caseId: string) => void;
  onFollow: (caseId: string) => void;
  isAuthenticated: boolean;
}

const CaseCard: React.FC<CaseCardProps> = ({ case: caseItem, onLike, onFollow, isAuthenticated }) => {
  const statusColors = {
    active: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    under_review: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        {/* Case Header */}
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[caseItem.status]}`}>
            {caseItem.status.replace('_', ' ').toUpperCase()}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(caseItem.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Case Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/cases/${caseItem.id}`} className="hover:text-blue-600 transition-colors">
            {caseItem.title}
          </Link>
        </h3>

        {/* Case Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {caseItem.description}
        </p>

        {/* Case Details */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Amount:</span>
            <span className="font-semibold">${caseItem.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Category:</span>
            <span className="font-medium">{caseItem.category}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button
            onClick={() => onLike(caseItem.id)}
            disabled={!isAuthenticated}
            className={`flex items-center space-x-1 text-sm ${
              caseItem.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            } ${!isAuthenticated ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span>❤️</span>
            <span>{caseItem.likes}</span>
          </button>

          <button
            onClick={() => onFollow(caseItem.id)}
            disabled={!isAuthenticated}
            className={`text-sm ${
              caseItem.isFollowing 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-gray-300 hover:text-blue-600'
            } border px-3 py-1 rounded-full transition-colors ${
              !isAuthenticated ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {caseItem.isFollowing ? 'Following' : 'Follow'}
          </button>

          <Link 
            href={`/cases/${caseItem.id}`}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
