"use client";

import { Header, Footer } from "@/components";
import HomePage from "@/screens/homePage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}