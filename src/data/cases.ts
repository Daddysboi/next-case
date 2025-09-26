
export interface Evidence {
  id: string;
  type: 'image' | 'video' | 'document' | 'link' | 'social';
  url: string;
  title: string;
  description?: string;
  thumbnail?: string;
  timestamp?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'filed' | 'evidence' | 'hearing' | 'decision' | 'update' | 'resolution';
  important: boolean;
}

export interface SocialMedia {
  platform: 'instagram' | 'twitter' | 'facebook' | 'youtube' | 'tiktok' | 'linkedin';
  handle: string;
  url: string;
  followers?: number;
}

export interface CaseDetail {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  status: 'active' | 'resolved' | 'under_review' | 'appeal' | 'closed';
  amount: number;
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  isLiked: boolean;
  isFollowing: boolean;
  isBookmarked: boolean;
  category: string;
  subcategory: string;
  parties: {
    name: string;
    type: 'plaintiff' | 'defendant' | 'witness' | 'lawyer';
    role: string;
    contact?: string;
    socialMedia?: SocialMedia[];
  }[];
  evidences: Evidence[];
  timeline: TimelineEvent[];
  tags: string[];
  jurisdiction: string;
  caseNumber: string;
  court: string;
  judge: string;
  nextHearing?: string;
  relatedCases: string[];
  socialMediaLinks: SocialMedia[];
  progress: number;
  complexity: 'low' | 'medium' | 'high';
}

export const dummyCases: CaseDetail[] = [
    {
        id: '1',
        title: 'Commercial Lease Dispute Resolution',
        description: 'A dispute between a landlord and tenant over the terms of a commercial lease agreement.',
        detailedDescription: `This case involves a significant commercial lease dispute between Global Retail Inc. and Property Masters LLC. The plaintiff alleges that the defendant failed to maintain the property according to lease terms, resulting in substantial business losses.Key Issues:- Breach of maintenance obligations- Failure to provide essential services- Constructive eviction claims- Damages calculation for lost revenueThe case has attracted attention from commercial real estate stakeholders and could set precedents for similar disputes in the region.`,
        status: 'active',
        amount: 75000,
        createdAt: '2023-10-26T10:00:00Z',
        updatedAt: '2024-01-15T14:30:00Z',
        likes: 128,
        comments: 12,
        shares: 45,
        views: 2540,
        isLiked: false,
        isFollowing: true,
        isBookmarked: false,
        category: 'Real Estate',
        subcategory: 'Commercial Lease',
        parties: [
          {
            name: 'Global Retail Inc.',
            type: 'plaintiff',
            role: 'Tenant',
            contact: 'legal@globalretail.com',
            socialMedia: [
              { platform: 'twitter', handle: '@GlobalRetail', url: 'https://twitter.com/GlobalRetail', followers: 12500 },
              { platform: 'linkedin', handle: 'Global Retail Inc.', url: 'https://linkedin.com/company/global-retail', followers: 3400 }
            ]
          },
          {
            name: 'Property Masters LLC',
            type: 'defendant',
            role: 'Landlord',
            contact: 'info@propertymasters.com',
            socialMedia: [
              { platform: 'instagram', handle: '@PropertyMasters', url: 'https://instagram.com/PropertyMasters', followers: 8900 }
            ]
          },
          {
            name: 'Sarah Johnson, Esq.',
            type: 'lawyer',
            role: 'Lead Counsel for Plaintiff'
          }
        ],
        evidences: [
          {
            id: 'ev-1-1',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Property Damage - Front View',
            description: 'Clear evidence of structural damage to the commercial property',
            thumbnail: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            timestamp: '2023-11-15T14:20:00Z',
          },
          {
            id: 'ev-1-2',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Property Walkthrough Video',
            description: 'Complete video documentation of property conditions',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
            timestamp: '2023-11-20T10:30:00Z',
          },
        ],
        timeline: [
          {
            id: '1',
            date: '2023-10-26',
            title: 'Case Filed',
            description: 'Initial complaint submitted to the court',
            type: 'filed',
            important: true
          },
          {
            id: '2',
            date: '2023-11-15',
            title: 'Evidence Submission',
            description: 'Plaintiff submitted initial evidence package',
            type: 'evidence',
            important: false
          },
        ],
        tags: ['commercial-lease', 'property-maintenance', 'business-disruption', 'real-estate-law'],
        jurisdiction: 'State Court, California',
        caseNumber: 'SC-CV-2023-04567',
        court: 'Superior Court of California',
        judge: 'Hon. Margaret Williams',
        nextHearing: '2024-02-15T09:00:00Z',
        relatedCases: ['2', '4', '7'],
        socialMediaLinks: [
          { platform: 'instagram', handle: '@CaseUpdate_4567', url: 'https://instagram.com/CaseUpdate_4567', followers: 1200 },
          { platform: 'twitter', handle: '@JusticeTrack_4567', url: 'https://twitter.com/JusticeTrack_4567', followers: 850 }
        ],
        progress: 65,
        complexity: 'high'
    }
];

export function getCaseById(id: string): CaseDetail | undefined {
    return dummyCases.find(c => c.id === id);
}

export function getEvidenceById(id: string): Evidence | undefined {
  for (const caseItem of dummyCases) {
    const evidence = caseItem.evidences?.find(e => e.id === id);
    if (evidence) {
      return evidence;
    }
  }
  return undefined;
}
