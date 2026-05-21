import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function Header() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const hasShadow = scrollY > 80;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleFaqClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-300 ${
          hasShadow ? 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]' : 'border-b border-[#E5E7EB]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L16 28L28 4" stroke="#159A23" strokeWidth="3" strokeLinejoin="round"/>
                <path d="M4 4L16 16L28 4" stroke="#159A23" strokeWidth="2" strokeLinejoin="round" opacity="0.5"/>
              </svg>
              <span className="text-lg font-bold text-[#1F2937]">Goloans Canada</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/blogs" className="text-base text-[#1F2937] hover:text-[#159A23] transition-colors duration-200">
                Blogs
              </Link>
              <a
                href="#faq"
                onClick={handleFaqClick}
                className="text-base text-[#1F2937] hover:text-[#159A23] transition-colors duration-200"
              >
                FAQs
              </a>
            </nav>

            {/* Phone + CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:1-866-478-4119" className="flex items-center gap-2 text-base font-semibold text-[#1F2937]">
                <Phone size={18} className="text-[#159A23]" />
                <span>1-866-478-4119</span>
              </a>
              <button className="bg-[#F28C18] hover:bg-[#D97A14] text-white font-semibold text-base px-7 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                Claim Your Cash
              </button>
            </div>

            {/* Mobile: Hamburger + CTA */}
            <div className="flex items-center gap-3 md:hidden">
              <button className="bg-[#F28C18] text-white font-semibold text-sm px-4 py-2 rounded-full cursor-pointer">
                Claim Your Cash
              </button>
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 text-[#1F2937] cursor-pointer"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 md:hidden"
          onClick={closeMenu}
        >
          <div
            className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button onClick={closeMenu} className="p-2 text-[#1F2937] cursor-pointer" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                to="/blogs"
                onClick={closeMenu}
                className="text-lg text-[#1F2937] py-2 hover:text-[#159A23] transition-colors"
              >
                Blogs
              </Link>
              <a
                href="#faq"
                onClick={(e) => {
                  handleFaqClick(e);
                  closeMenu();
                }}
                className="text-lg text-[#1F2937] py-2 hover:text-[#159A23] transition-colors"
              >
                FAQs
              </a>
              <div className="pt-4 border-t border-[#E5E7EB]">
                <a href="tel:1-866-478-4119" className="flex items-center gap-2 text-base font-semibold text-[#1F2937]">
                  <Phone size={18} className="text-[#159A23]" />
                  <span>1-866-478-4119</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
