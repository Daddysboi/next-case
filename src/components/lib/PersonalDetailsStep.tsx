
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppInputField, AppSelectField, Button } from '@/components';
import { FormData } from '../ComplaintWizard'; // Import FormData

interface PersonalDetailsStepProps {
  formData: FormData;
  onPrevious: () => void;
  onSubmit: (data: Partial<FormData>) => void;
}

const nigerianStates = [
  { value: 'abia', label: 'Abia' },
  { value: 'adamawa', label: 'Adamawa' },
  { value: 'akwa_ibom', label: 'Akwa Ibom' },
  { value: 'anambra', label: 'Anambra' },
  { value: 'bauchi', label: 'Bauchi' },
  { value: 'bayelsa', label: 'Bayelsa' },
  { value: 'benue', label: 'Benue' },
  { value: 'borno', label: 'Borno' },
  { value: 'cross_river', label: 'Cross River' },
  { value: 'delta', label: 'Delta' },
  { value: 'ebonyi', label: 'Ebonyi' },
  { value: 'edo', label: 'Edo' },
  { value: 'ekiti', label: 'Ekiti' },
  { value: 'enugu', label: 'Enugu' },
  { value: 'gombe', label: 'Gombe' },
  { value: 'imo', label: 'Imo' },
  { value: 'jigawa', label: 'Jigawa' },
  { value: 'kaduna', label: 'Kaduna' },
  { value: 'kano', label: 'Kano' },
  { value: 'katsina', label: 'Katsina' },
  { value: 'kebbi', label: 'Kebbi' },
  { value: 'kogi', label: 'Kogi' },
  { value: 'kwara', label: 'Kwara' },
  { value: 'lagos', label: 'Lagos' },
  { value: 'nasarawa', label: 'Nasarawa' },
  { value: 'niger', label: 'Niger' },
  { value: 'ogun', label: 'Ogun' },
  { value: 'ondo', label: 'Ondo' },
  { value: 'osun', label: 'Osun' },
  { value: 'oyo', label: 'Oyo' },
  { value: 'plateau', label: 'Plateau' },
  { value: 'rivers', label: 'Rivers' },
  { value: 'sokoto', label: 'Sokoto' },
  { value: 'taraba', label: 'Taraba' },
  { value: 'yobe', label: 'Yobe' },
  { value: 'zamfara', label: 'Zamfara' },
  { value: 'fct', label: 'FCT' },
];

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({
  formData,
  onPrevious,
  onSubmit,
}) => {
  const [complainantName, setComplainantName] = useState(formData.complainantName || '');
  const [complainantEmail, setComplainantEmail] = useState(formData.complainantEmail || '');
  const [complainantPhone, setComplainantPhone] = useState(formData.complainantPhone || '');
  const [complainantAddress, setComplainantAddress] = useState(formData.complainantAddress || '');
  const [selectedCountry, setSelectedCountry] = useState(formData.selectedCountry || '');
  const [selectedState, setSelectedState] = useState(formData.selectedState || '');
  const [twitterProfile, setTwitterProfile] = useState(formData.twitterProfile || '');
  const [instagramProfile, setInstagramProfile] = useState(formData.instagramProfile || '');
  const [whatsAppNumber, setWhatsAppNumber] = useState(formData.whatsAppNumber || '');
  const [evidenceAttested, setEvidenceAttested] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!evidenceAttested) {
      alert('Please attest that the evidence provided is complete and valid.');
      return;
    }

    if (!termsAccepted) {
      alert('Please accept the Terms and Conditions.');
      return;
    }

    onSubmit({
      complainantName,
      complainantEmail,
      complainantPhone,
      complainantAddress,
      selectedCountry,
      selectedState,
      twitterProfile,
      instagramProfile,
      whatsAppNumber,
      evidenceAttested,
      termsAccepted,
    });
  };

  const isNigeria = selectedCountry.toLowerCase() === 'nigeria';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <AppInputField
        id="complainantName"
        name="complainantName"
        label="Your Full Name"
        type="text"
        value={complainantName}
        onChange={(e) => setComplainantName(e.target.value)}
        required
      />

      <AppInputField
        id="complainantEmail"
        name="complainantEmail"
        label="Your Email Address"
        type="email"
        value={complainantEmail}
        onChange={(e) => setComplainantEmail(e.target.value)}
        required
      />

      <AppInputField
        id="complainantPhone"
        name="complainantPhone"
        label="Your Phone Number (optional)"
        type="tel"
        value={complainantPhone}
        onChange={(e) => setComplainantPhone(e.target.value)}
      />

      <AppInputField
        id="complainantAddress"
        name="complainantAddress"
        label="Your Address (optional)"
        type="text"
        value={complainantAddress}
        onChange={(e) => setComplainantAddress(e.target.value)}
      />

      <AppInputField
        id="country"
        name="country"
        label="Country"
        type="text"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        required
      />

      {isNigeria ? (
        <AppSelectField
          id="state"
          name="state"
          label="State (Nigeria)"
          value={selectedState}
          onChange={(value) => setSelectedState(value)}
          options={nigerianStates}
          required
          placeholder="Select a state"
        />
      ) : (
        <AppInputField
          id="stateProvince"
          name="stateProvince"
          label="State/Province"
          type="text"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          required
        />
      )}

      <AppInputField
        id="twitterProfile"
        name="twitterProfile"
        label="Twitter Profile (optional)"
        type="text"
        value={twitterProfile}
        onChange={(e) => setTwitterProfile(e.target.value)}
        placeholder="e.g., @username"
      />

      <AppInputField
        id="instagramProfile"
        name="instagramProfile"
        label="Instagram Profile (optional)"
        type="text"
        value={instagramProfile}
        onChange={(e) => setInstagramProfile(e.target.value)}
        placeholder="e.g., @username"
      />

      <AppInputField
        id="whatsAppNumber"
        name="whatsAppNumber"
        label="WhatsApp Number (optional)"
        type="tel"
        value={whatsAppNumber}
        onChange={(e) => setWhatsAppNumber(e.target.value)}
        placeholder="e.g., +2348012345678"
      />

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="evidenceAttested"
          checked={evidenceAttested}
          onChange={(e) => setEvidenceAttested(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="evidenceAttested" className="ml-2 block text-sm text-gray-900">
          I attest that the evidence provided is valid, and not doctored.
        </label>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="termsAccepted"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">
          I accept the <Link href="/terms-and-conditions" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link>.
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <Button type="button" variant="secondary" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit" variant="primary">
          Submit Complaint
        </Button>
      </div>
    </form>
  );
};

export default PersonalDetailsStep;
