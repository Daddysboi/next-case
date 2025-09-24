'use client';

import Link from 'next/link';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import Logo from '@/components/ui/Logo';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="#cases" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Live Cases
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </Link>
            <Link
              href="/complaint"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Report Complaint
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                How It Works
              </Link>
              <Link href="#cases" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Live Cases
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Features
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                FAQ
              </Link>
              <Link
                href="/complaint"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Report Complaint
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
