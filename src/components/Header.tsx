import { useState, useEffect } from 'react';
import { Flame, Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Header({ activeTab, setActiveTab, onRequestQuote }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar with Contacts - Highly Visible Fire-Red Accent */}
      <div className="bg-red-700 text-white text-[11px] uppercase tracking-widest py-2.5 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center font-bold gap-1 sm:gap-4 shadow-sm select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
          <span>Certified Fire Protection & Safety Professionals</span>
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <a href={`tel:${COMPANY_DETAILS.phones[0].replace(/\s/g, '')}`} className="hover:underline hover:text-slate-100 transition-colors">
            Nairobi Hotline: {COMPANY_DETAILS.phones[0]}
          </a>
          <span className="hidden sm:inline opacity-70">|</span>
          <span className="hidden sm:inline">Accra Road, Emmacra Arcade</span>
        </div>
      </div>

      {/* Main Navigation with Solid Border and subtle Shadow */}
      <nav className={`w-full py-4 px-4 sm:px-8 border-b-2 border-slate-100 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo - Classic High-Visibility Brand Identity */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 group text-left cursor-pointer focus:outline-none"
            id="header-logo-btn"
          >
            <div className="w-10 h-10 bg-red-700 flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-6 h-6 border-2 border-white rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-black text-lg sm:text-xl tracking-tighter text-slate-900 group-hover:text-red-700 transition-colors">
                OFFLINE <span className="text-red-700">FIRE</span> & SAFETY
              </span>
              <span className="text-[9px] tracking-[0.2em] font-extrabold text-slate-500 uppercase">
                Professional Safety Solutions
              </span>
            </div>
          </button>

          {/* Desktop Links - Solid high-contrast text and robust active markers */}
          <div className="hidden lg:flex items-center space-x-6 text-[12px] font-black uppercase tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 relative py-1.5 cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-red-700 font-black' 
                    : 'text-slate-800 hover:text-red-700'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-700" />
                )}
              </button>
            ))}
          </div>

          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestQuote}
              className="hidden sm:inline-block px-5 py-2.5 bg-slate-900 text-white rounded-sm hover:bg-red-700 transition-colors uppercase text-xs font-black tracking-wider cursor-pointer shadow-sm"
              id="header-quote-btn"
            >
              Request Quote
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-red-700 focus:outline-none cursor-pointer border border-slate-200 rounded-sm"
              aria-label="Toggle menu"
              id="header-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white mt-4 border border-slate-200 shadow-xl overflow-hidden transition-all duration-300">
            <div className="py-2 px-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                    activeTab === item.id 
                      ? 'bg-slate-50 text-red-700 border-l-4 border-red-700 font-black' 
                      : 'text-slate-800 hover:bg-slate-50 hover:text-red-700'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 pb-2 px-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    onRequestQuote();
                    setIsOpen(false);
                  }}
                  className="w-full bg-slate-900 hover:bg-red-700 text-white font-bold text-center py-3 px-4 rounded-sm uppercase text-xs tracking-wider block transition-colors cursor-pointer"
                  id="mobile-header-quote-btn"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
