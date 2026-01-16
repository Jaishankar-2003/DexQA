"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary">
              DexQA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="#services"
              className="text-slate-600 hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#industries"
              className="text-slate-600 hover:text-primary transition-colors font-medium"
            >
              Industries
            </Link>
            <Link
              href="#tools"
              className="text-slate-600 hover:text-primary transition-colors font-medium"
            >
              Tools
            </Link>
            <Link
              href="#packages"
              className="text-slate-600 hover:text-primary transition-colors font-medium"
            >
              Packages
            </Link>
            <Link
              href="#contact"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              href="#services"
              className="block text-slate-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#industries"
              className="block text-slate-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="#tools"
              className="block text-slate-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools & Frameworks
            </Link>
            <Link
              href="#packages"
              className="block text-slate-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="#about"
              className="block text-slate-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block bg-accent text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

