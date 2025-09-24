'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LiveCasesSection = () => {
  const cases = [
    {
      id: 'JH-8472',
      title: 'Online Shopping Fraud',
      amount: '$450',
      status: 'Active',
      update: '2 hours ago - Evidence under review',
      resolution: '3-5 days',
      progress: 60,
      category: 'E-commerce',
      parties: 'Consumer vs. Online Store',
    },
    {
      id: 'JH-8471',
      title: 'Real Estate Scam',
      amount: '$5,200',
      status: 'Under Review',
      update: '1 day ago - Legal team assigned',
      resolution: '1-2 weeks',
      progress: 30,
      category: 'Real Estate',
      parties: 'Buyer vs. Agent',
    },
    {
      id: 'JH-8470',
      title: 'Investment Fraud',
      amount: '$12,000',
      status: 'Resolved',
      update: '3 days ago - Funds recovered',
      resolution: 'Completed',
      progress: 100,
      category: 'Finance',
      parties: 'Investor vs. Company',
    },
    {
      id: 'JH-8469',
      title: 'Service Payment Dispute',
      amount: '$890',
      status: 'Active',
      update: '4 hours ago - Mediation scheduled',
      resolution: '2-3 days',
      progress: 40,
      category: 'Services',
      parties: 'Client vs. Service Provider',
    },
  ];

  const progressBar = (progress: number) => (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
      <div
        className="bg-green-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  const statusBadge = (status: string) => {
    const styles = {
      Active: 'bg-blue-100 text-blue-800 border-blue-200',
      'Under Review': 'bg-orange-100 text-orange-800 border-orange-200',
      Resolved: 'bg-green-100 text-green-800 border-green-200',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status as keyof typeof styles]}`}>
        {status}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Case Tracking
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time updates on active cases showing our transparent resolution process
          </p>
        </div>

        {/* Cases Slider */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Section Header */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Active Cases</h3>
                <p className="text-gray-600 mt-1">Live updates and progress tracking</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Active</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span>Review</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Resolved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="p-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="pb-12"
            >
              {cases.map((caseItem, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="m-3 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group">
                    {/* Case Header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {caseItem.id}
                          </span>
                          <h4 className="font-semibold text-gray-900 mt-2 line-clamp-2">
                            {caseItem.title}
                          </h4>
                        </div>
                        {statusBadge(caseItem.status)}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{caseItem.category}</span>
                        <span className="font-semibold text-lg text-gray-900">{caseItem.amount}</span>
                      </div>
                    </div>

                    {/* Case Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{caseItem.progress}%</span>
                        </div>
                        {progressBar(caseItem.progress)}
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Parties</span>
                          <span className="text-gray-900 font-medium text-right">{caseItem.parties}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Last Update</span>
                          <span className="text-gray-900">{caseItem.update.split(' - ')[0]}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Resolution</span>
                          <span className={`font-medium ${
                            caseItem.status === 'Resolved' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {caseItem.resolution}
                          </span>
                        </div>
                      </div>

                      {/* Evidence Status */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-700 font-medium text-sm">Evidence Status</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3].map((star) => (
                              <span key={star} className={`text-sm ${
                                star * 33 <= caseItem.progress ? 'text-blue-500' : 'text-blue-200'
                              }`}>
                                ✓
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-blue-600 text-xs mt-1">{caseItem.update.split(' - ')[1]}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="swiper-pagination !relative !w-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
          .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
          }

          :global(.swiper-pagination-bullet) {
              background: #cbd5e0;
              opacity: 1;
          }

          :global(.swiper-pagination-bullet-active) {
              background: #3b82f6;
          }
      `}</style>
    </section>
  );
};

export default LiveCasesSection;