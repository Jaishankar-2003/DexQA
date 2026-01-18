// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <span className="text-2xl font-heading font-bold text-primary">
//               DexQA
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <Link
//               href="#services"
//               className="text-slate-600 hover:text-primary transition-colors font-medium"
//             >
//               Services
//             </Link>
//             <Link
//               href="#industries"
//               className="text-slate-600 hover:text-primary transition-colors font-medium"
//             >
//               Industries
//             </Link>
//             <Link
//               href="#tools"
//               className="text-slate-600 hover:text-primary transition-colors font-medium"
//             >
//               Tools
//             </Link>
//             <Link
//               href="#packages"
//               className="text-slate-600 hover:text-primary transition-colors font-medium"
//             >
//               Packages
//             </Link>
//             <Link
//               href="#contact"
//               className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-50"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isMenuOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 space-y-4 border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
//             <Link
//               href="#services"
//               className="block text-slate-600 hover:text-primary transition-colors font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               href="#industries"
//               className="block text-slate-600 hover:text-primary transition-colors font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Industries
//             </Link>
//             <Link
//               href="#tools"
//               className="block text-slate-600 hover:text-primary transition-colors font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Tools & Frameworks
//             </Link>
//             <Link
//               href="#packages"
//               className="block text-slate-600 hover:text-primary transition-colors font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Packages
//             </Link>
//             <Link
//               href="#about"
//               className="block text-slate-600 hover:text-primary transition-colors font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="#contact"
//               className="block bg-accent text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }


//===========================================================================================================


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../app/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Tools", href: "#tools" },
  { label: "Packages", href: "#packages" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-2 outline-none">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-3 transition-transform">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
              dex<span className="text-primary">QA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-full hover:bg-slate-50 transition-all"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="ml-4 pl-4 border-l border-slate-200">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  bg-slate-900 text-white text-sm font-semibold
                  hover:bg-primary hover:shadow-lg hover:shadow-primary/20 
                  active:scale-95 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center mt-4 px-6 py-3 rounded-xl bg-primary text-white font-bold shadow-md"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}