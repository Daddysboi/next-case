'use client';

import Image from 'next/image';
import Link from 'next/link';


const HeroSection = () => {


  return (
    <div className="relative h-[800px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
        >
          <Image
            src={'/images/banner.jpg'}
            alt={`Banner image`}
            fill
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Hero Content - On top of images */}
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-fit flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Fight Back Against
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Fraudulent Vendors</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get the justice you deserve. Simple, transparent, and built to protect you
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/complaint"
                  className="border-2  bg-orange-400 text-black px-6 py-2 font-semibold text-lghover:shadow-lg transition-all hover:scale-105"
                >
                  Make Complaint
                </Link>
                <button
                  className="border-2 border-white text-white px-6 py-2 font-semibold text-lg hover:bg-white/10 transition-colors">
                  See Live Cases
                </button>
              </div>

              <div className="flex items-center mt-8 space-x-4 text-sm text-white/80">
                <div className="flex items-center">
                  <span className="text-green-300 text-lg mr-1">✓</span>
                  100% Free Service
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 text-lg mr-1">✓</span>
                  Transparent Process
                </div>
              </div>
            </div>

            {/* Image Indicator/Dots */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-white text-lg">Live Case Updates</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'VDM-001', vendor: 'TechGadgets Inc', amount: '$500', status: 'Under Review' },
                    { id: 'VDM-002', vendor: 'QuickLoan Services', amount: '$1,200', status: 'Evidence Gathering' },
                    { id: 'VDM-003', vendor: 'ElitePharma', amount: '$750', status: 'Resolved' },
                  ].map((caseItem) => (
                    <div key={caseItem.id}
                         className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div>
                        <div className="font-semibold text-white">{caseItem.id}</div>
                        <div className="text-sm text-white/80">{caseItem.vendor}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">{caseItem.amount}</div>
                        <div className={`text-sm ${
                          caseItem.status === 'Resolved' ? 'text-green-300' :
                            caseItem.status === 'Under Review' ? 'text-blue-300' : 'text-orange-300'
                        }`}>
                          {caseItem.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;