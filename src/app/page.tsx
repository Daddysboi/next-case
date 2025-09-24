"use client";

import HomePage from "@/screens/homePage";
import { MainLayout } from '@/components';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <HomePage />
      </div>
    </MainLayout>
  );
}