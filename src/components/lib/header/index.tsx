'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import Logo from '@/components/ui/Logo';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) { // Adjust this value based on your hero section's height
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent  backdrop-blur-md '}`;
  const linkClasses = `font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-600'}`;
  const mobileLinkClasses = `font-medium py-2 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`;

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className={linkClasses}>
              How It Works
            </Link>
            <Link href="#cases" className={linkClasses}>
              Live Cases
            </Link>
            <Link href="#features" className={linkClasses}>
              Features
            </Link>
            <Link href="#faq" className={linkClasses}>
              FAQ
            </Link>
            <Link
              href="/complaint"
              className="bg-orange-400 text-black px-6 py-2 font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Make Complaint
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
              <Link href="#how-it-works" className={mobileLinkClasses}>
                How It Works
              </Link>
              <Link href="#cases" className={mobileLinkClasses}>
                Live Cases
              </Link>
              <Link href="#features" className={mobileLinkClasses}>
                Features
              </Link>
              <Link href="#faq" className={mobileLinkClasses}>
                FAQ
              </Link>
              <Link
                href="/complaint"
                className="bg-gradient-to-r from-orange-200 to-orange-400 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Make Complaint
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
