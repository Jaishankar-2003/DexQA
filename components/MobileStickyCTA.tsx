"use client";

import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <Link
          href="#contact"
          className="block w-full bg-accent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-center text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

