import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E293B]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Disclaimer */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L16 28L28 4" stroke="#159A23" strokeWidth="3" strokeLinejoin="round"/>
                <path d="M4 4L16 16L28 4" stroke="#159A23" strokeWidth="2" strokeLinejoin="round" opacity="0.5"/>
              </svg>
              <span className="text-lg font-bold text-white">Goloans Canada</span>
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              <strong className="text-[#9CA3AF]">Disclaimer:</strong> All loans are subject to credit and underwriting approval. GoLoans is a loan distribution and lead assessment platform, not a lender. GoLoans helps evaluate, score, and route loan inquiries to third-party financial service providers for review. GoLoans does not guarantee approval, loan amounts, rates, fees, or terms. Final approval and loan terms are determined solely by the participating financing provider. GoLoans works to connect applicants with providers that operate in accordance with applicable Canadian laws and regulations.
            </p>
            <div className="mt-4 text-sm text-[#9CA3AF]">
              <p>Address: 555-21, 10405 Jasper Ave, Edmonton, AB T5J 3S2, Canada.</p>
              <p>Phone: +1(866)-478-4199</p>
            </div>
          </div>

          {/* Important Links */}
          <div className="md:text-center">
            <h4 className="text-base font-semibold text-white mb-4">Important Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/blogs" className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200">
                Blog
              </Link>
              <a href="#faq" className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200">
                FAQs
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h4 className="text-base font-semibold text-white mb-4">Find us on</h4>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#374151] hover:bg-[#159A23] transition-colors duration-200"
            >
              <Facebook size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#374151]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-[#9CA3AF]">All rights reserved &copy; 2026 GoLoans.ca</p>
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <span className="hover:text-white cursor-pointer transition-colors duration-200">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors duration-200">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
