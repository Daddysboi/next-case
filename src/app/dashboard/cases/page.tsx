import DashboardLayout from '@/components/dashboard/DashboardLayout';
import CasesTable from '@/components/dashboard/CasesTable'; // Will create this next

export default function DashboardCasesPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Cases</h2>
      <CasesTable />
    </DashboardLayout>
  );
}