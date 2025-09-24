'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center my-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Welcome to our complaint submission platform. By using our services,
                  you agree to comply with and be bound by the following terms and conditions.
                  Please review them carefully before proceeding.
                </p>
              </div>

              {/* Terms Sections */}
              <div className="space-y-12">
                {/* Section 1 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using this platform, you accept and agree to be bound by
                    the terms and provisions of this agreement. If you do not agree to abide
                    by these terms, please do not use this service.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Complaint Submission Guidelines
                  </h2>
                  <p className="text-gray-700 mb-4">
                    When submitting a complaint, you agree to the following guidelines:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Provide accurate and truthful information at all times",
                      "Ensure that any evidence provided is authentic and not altered",
                      "Refrain from using abusive, defamatory, or offensive language",
                      "Not submit content that is illegal, harmful, threatening, or invasive of privacy",
                      "Understand that your complaint may be made public as part of the resolution process"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                          <span className="text-green-600 text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 3 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Evidence and Documentation
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for the accuracy and authenticity of all evidence and
                    documentation submitted. Submitting false or misleading information may
                    result in the rejection of your complaint and further appropriate action
                    by platform administrators.
                  </p>
                </section>

                {/* Section 4 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Privacy Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please refer to our{' '}
                    <Link
                      href="/privacy-policy"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>{' '}
                    for comprehensive information on how we collect, use, and protect your
                    personal information.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Disclaimer of Warranties
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The service is provided on an "as is" and "as available" basis. We make
                    no warranties, expressed or implied, regarding the operation of this
                    service or the information, content, materials, or products included.
                  </p>
                </section>

                {/* Section 6 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We will not be liable for any damages arising from the use of this service,
                    including but not limited to direct, indirect, incidental, punitive, and
                    consequential damages.
                  </p>
                </section>

                {/* Section 7 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Governing Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance
                    with the laws of your jurisdiction. You irrevocably submit to the
                    exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                {/* Section 8 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Changes to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these Terms and Conditions at any time.
                    Continued use of the platform after changes constitutes acceptance of
                    the modified terms.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsAndConditionsPage;