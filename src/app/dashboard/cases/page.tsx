import DashboardLayout from '@/components/dashboard/DashboardLayout';
import CasesSection from '@/components/dashboard/CasesSection';

export default function DashboardCasesPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Cases</h2>
      <CasesSection />
    </DashboardLayout>
  );
}