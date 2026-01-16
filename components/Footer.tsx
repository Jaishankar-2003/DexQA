import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 pb-24 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">DexQA</h3>
            <p className="text-slate-300 text-sm">
              Precision-driven quality assurance for modern software teams.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Manual Testing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Test Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Performance Testing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  QA Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>dexqatechnology@gmail.com</li>
              <li>9842139997</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} DexQA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

