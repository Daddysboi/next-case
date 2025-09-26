'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/lib/MainLayout';
import { getCaseById, CaseDetail, Evidence, TimelineEvent } from '@/data/cases';
import InteractiveEvidenceCard from '@/components/cases/InteractiveEvidenceCard';

const CaseDetailPage = () => {
  const params = useParams();
  const caseId = params.slug as string;

  const [caseData, setCaseData] = useState<CaseDetail | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const data = getCaseById(caseId);
    if (data) {
      setCaseData(data);
    } else {
      setCaseData(null);
    }
  }, [caseId]);

  if (!caseData) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Not Found
          </h1>
          <p className="text-xl text-gray-600">
            The case you are looking for does not exist.
          </p>
        </div>
      </MainLayout>
    );
  }

  const statusColors = {
    active: 'bg-blue-100 text-blue-800 border-blue-200',
    resolved: 'bg-green-100 text-green-800 border-green-200',
    under_review: 'bg-orange-100 text-orange-800 border-orange-200',
    appeal: 'bg-purple-100 text-purple-800 border-purple-200',
    closed: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const timelineColors = {
    filed: 'bg-blue-500',
    evidence: 'bg-green-500',
    hearing: 'bg-orange-500',
    decision: 'bg-purple-500',
    update: 'bg-gray-500',
    resolution: 'bg-red-500'
  };

  const handleLike = () => {
    setCaseData(prev => prev ? { ...prev, likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1, isLiked: !prev.isLiked } : null);
  };

  const handleFollow = () => {
    setCaseData(prev => prev ? { ...prev, isFollowing: !prev.isFollowing } : null);
  };

  const handleBookmark = () => {
    setCaseData(prev => prev ? { ...prev, isBookmarked: !prev.isBookmarked } : null);
  };

  const shareOnSocialMedia = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this case: ${caseData.title}`;
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  const TimelineEventComponent = ({ event }: { event: TimelineEvent }) => {
    return (
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <div className={`w-3 h-3 rounded-full ${timelineColors[event.type]} mt-1`}></div>
          <div className="w-0.5 h-full bg-gray-200"></div>
        </div>
        <div className="flex-1 pb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-900">{event.title}</span>
            <span className="text-xs text-gray-500">{event.date}</span>
          </div>
          <p className="text-sm text-gray-600">{event.description}</p>
          {event.important && (
            <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
              Important
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[caseData.status]}`}>
                    {caseData.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-600">
                    Case {caseData.caseNumber}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {caseData.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span><strong>Court:</strong> {caseData.court}</span>
                  <span><strong>Judge:</strong> {caseData.judge}</span>
                  <span><strong>Amount:</strong> ${caseData.amount.toLocaleString()}</span>
                  <span><strong>Category:</strong> {caseData.category}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                    caseData.isLiked
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>❤️</span>
                  <span>{caseData.likes}</span>
                </button>
                <button
                  onClick={handleFollow}
                  className={`px-4 py-2 rounded-lg border ${
                    caseData.isFollowing
                      ? 'bg-blue-50 border-blue-200 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {caseData.isFollowing ? 'Following' : 'Follow'}
                </button>
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg border ${
                    caseData.isBookmarked
                      ? 'bg-yellow-50 border-yellow-200 text-yellow-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {caseData.isBookmarked ? '★' : '☆'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              {['overview', 'evidence', 'timeline', 'parties', 'discussion'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Overview</h2>
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p>{caseData.detailedDescription}</p>
                    </div>
                  </section>
                  <section>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">Case Progress</h3>
                      <span className="text-sm text-gray-600">{caseData.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${caseData.progress}%` }}
                      ></div>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-600">Jurisdiction</label>
                          <p className="text-gray-900">{caseData.jurisdiction}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Case Complexity</label>
                          <p className="text-gray-900 capitalize">{caseData.complexity}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Date Filed</label>
                          <p className="text-gray-900">{new Date(caseData.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-600">Next Hearing</label>
                          <p className="text-gray-900">
                            {caseData.nextHearing
                              ? new Date(caseData.nextHearing).toLocaleDateString()
                              : 'Not scheduled'
                            }
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Last Updated</label>
                          <p className="text-gray-900">{new Date(caseData.updatedAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Tags</label>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {caseData.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === 'evidence' && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Evidence & Documentation</h2>
                  <div className="grid gap-4">
                    {caseData.evidences.map(evidence => (
                      <InteractiveEvidenceCard key={evidence.id} evidence={evidence} />
                    ))}
                  </div>
                </section>
              )}
              {activeTab === 'timeline' && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Timeline</h2>
                  <div className="space-y-1">
                    {caseData.timeline.map(event => (
                      <TimelineEventComponent key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              )}
              {activeTab === 'parties' && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Involved Parties</h2>
                  <div className="grid gap-6">
                    {caseData.parties.map((party, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{party.name}</h3>
                            <p className="text-sm text-gray-600 capitalize">{party.type} • {party.role}</p>
                            {party.contact && (
                              <p className="text-sm text-gray-600 mt-1">{party.contact}</p>
                            )}
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            party.type === 'plaintiff' ? 'bg-green-100 text-green-800' :
                            party.type === 'defendant' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {party.type.toUpperCase()}
                          </span>
                        </div>
                        {party.socialMedia && party.socialMedia.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Social Media</h4>
                            <div className="flex space-x-3">
                              {party.socialMedia.map(social => (
                                <a
                                  key={social.platform}
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
                                >
                                  <span></span>
                                  <span>{social.handle}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {activeTab === 'discussion' && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Discussion & Comments</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Comment</h3>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your thoughts on this case..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                      />
                      <div className="flex justify-end mt-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Post Comment
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold">U</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">User123</span>
                            <span className="text-sm text-gray-500 ml-2">2 hours ago</span>
                          </div>
                        </div>
                        <p className="text-gray-700">This case highlights important issues in commercial leasing. The evidence seems strong for the plaintiff.</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-semibold">{caseData.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Likes</span>
                    <span className="font-semibold">{caseData.likes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comments</span>
                    <span className="font-semibold">{caseData.comments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shares</span>
                    <span className="font-semibold">{caseData.shares}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Followers</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Updates</h3>
                <div className="space-y-3">
                  {caseData.socialMediaLinks.map(social => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">
                          {social.platform === 'instagram' && ''}
                          {social.platform === 'twitter' && ''}
                          {social.platform === 'youtube' && ''}
                        </span>
                        <span className="font-medium capitalize">{social.platform}</span>
                      </div>
                      <span className="text-sm text-gray-500">{social.followers} followers</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Case</h3>
                <div className="flex space-x-3">
                  <button
                    onClick={() => shareOnSocialMedia('twitter')}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => shareOnSocialMedia('facebook')}
                    className="flex-1 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    Facebook
                  </button>
                </div>
                <div className="mt-3">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Cases</h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Similar Lease Dispute</div>
                    <div className="text-sm text-gray-600 mt-1">Resolved • $45,000</div>
                  </a>
                  <a href="#" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Property Maintenance Case</div>
                    <div className="text-sm text-gray-600 mt-1">Active • $120,000</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseDetailPage;