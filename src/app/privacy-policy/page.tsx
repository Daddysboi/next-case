'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 my-12">
              Privacy Policy
            </h1>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl  border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                  At NextCase, we are committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our complaint submission platform.
                </p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-12">
                {/* Section 1 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                      <p className="text-gray-700 leading-relaxed">
                        When you submit a complaint, we may collect personal information such as:
                      </p>
                      <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                        <li>Full name and contact information</li>
                        <li>Email address and phone number</li>
                        <li>Demographic information relevant to your complaint</li>
                        <li>Any other information you voluntarily provide</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Technical Information</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We automatically collect certain technical information when you visit our platform:
                      </p>
                      <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                        <li>IP address and browser type</li>
                        <li>Device information and operating system</li>
                        <li>Usage patterns and platform interaction data</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. How We Use Your Information
                  </h2>
                  <ul className="space-y-3">
                    {[
                      'Process and manage your complaint submissions effectively',
                      'Communicate with you regarding your complaint status',
                      'Improve our platform and user experience',
                      'Ensure platform security and prevent fraud',
                      'Comply with legal obligations and regulatory requirements',
                      'Provide customer support and respond to inquiries',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div
                          className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
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
                    3. Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties
                    without your consent, except in the following circumstances:
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4 mb-4">
                    <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                      <li>With your explicit consent for specific purposes</li>
                      <li>To comply with legal obligations or court orders</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>With service providers who assist in platform operations</li>
                      <li>In connection with business transfers or mergers</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect
                    your personal information against unauthorized access, alteration, disclosure,
                    or destruction. These measures include encryption, access controls, and regular
                    security assessments.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Your Rights and Choices
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: 'Access', desc: 'Request access to your personal information' },
                      { title: 'Correction', desc: 'Update or correct inaccurate information' },
                      { title: 'Deletion', desc: 'Request deletion of your personal data' },
                      { title: 'Objection', desc: 'Object to certain processing activities' },
                      { title: 'Portability', desc: 'Receive your data in a portable format' },
                      { title: 'Consent Withdrawal', desc: 'Withdraw consent at any time' },
                    ].map((right, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">{right.title}</h3>
                        <p className="text-gray-700 text-sm">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 6 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze platform
                    usage, and deliver personalized content. You can control cookie preferences through
                    your browser settings, but disabling cookies may affect platform functionality.
                  </p>
                </section>

                {/* Section 7 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Data Retention
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the
                    purposes outlined in this policy, unless a longer retention period is required
                    or permitted by law. Complaint data is typically retained for 7 years following
                    case resolution.
                  </p>
                </section>

                {/* Section 8 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. International Data Transfers
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your
                    country of residence. We ensure appropriate safeguards are in place to protect
                    your information in accordance with this Privacy Policy.
                  </p>
                </section>

                {/* Section 9 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Children&#39;s Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our platform is not intended for individuals under the age of 18. We do not
                    knowingly collect personal information from children. If you believe we have
                    inadvertently collected such information, please contact us immediately.
                  </p>
                </section>

                {/* Section 10 */}
                <section className="border-l-4  pl-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices
                    or legal requirements. We will notify you of significant changes by posting the
                    new policy on our platform and updating the effective date.
                  </p>
                </section>
              </div>

            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;