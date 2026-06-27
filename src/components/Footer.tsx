import { Flame, MapPin, Phone, Mail, ChevronRight, Award, ShieldAlert } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Footer({ setActiveTab, onRequestQuote }: FooterProps) {
  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#111] text-gray-400 font-sans">
      {/* Top CTA Banner */}
      <div className="border-b border-red-900/30 bg-gradient-to-r from-red-950 to-neutral-950 py-10 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase font-semibold">NEED PROFESSIONAL PROTECTION?</span>
            <h3 className="text-2xl font-bold mt-1 tracking-tight">Need Certified Fire Safety Systems & Equipment?</h3>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Contact OFFLINE FIRE & SAFETY LTD today for certified fire safety assessments, installations, training, and competitive quotations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={onRequestQuote}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg text-sm text-center transition-all shadow-lg shadow-red-600/10 cursor-pointer"
              id="footer-cta-quote-btn"
            >
              Request a Free Quote
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-neutral-800 hover:bg-neutral-700 text-gray-200 border border-neutral-700 font-medium py-3 px-6 rounded-lg text-sm text-center transition-all cursor-pointer"
              id="footer-cta-contact-btn"
            >
              Contact Our Engineers
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Pitch Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-red-600 p-2 rounded-lg text-white">
              <Flame className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">OFFLINE FIRE & SAFETY</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Protecting lives, properties, and businesses across Nairobi and East Africa through premium, certified fire protection equipment and compliance safety contracts.
          </p>
          <div className="flex gap-4 pt-2 text-xs">
            <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 py-1.5 px-3 rounded-full text-gray-300">
              <Award className="w-3.5 h-3.5 text-red-500" /> KEBS Certified
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 py-1.5 px-3 rounded-full text-gray-300">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" /> OSHA Compliant
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-neutral-800">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center gap-1.5 hover:text-red-500 transition-colors focus:outline-none cursor-pointer"
                  id={`footer-link-${link.id}`}
                >
                  <ChevronRight className="w-4 h-4 text-red-600" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-neutral-800">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((srv) => (
              <li key={srv.id}>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="flex items-center gap-1.5 hover:text-red-500 transition-colors focus:outline-none text-left cursor-pointer"
                  id={`footer-srv-link-${srv.id}`}
                >
                  <ChevronRight className="w-4 h-4 text-red-600" />
                  <span>{srv.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts Column */}
        <div className="space-y-5">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-2 border-b border-neutral-800">Get In Touch</h4>
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Head Office Address</p>
                <p className="text-gray-400 mt-1">{COMPANY_DETAILS.address}</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Phone Support</p>
                {COMPANY_DETAILS.phones.map((p, index) => (
                  <a
                    key={index}
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="block hover:text-red-500 transition-colors mt-0.5"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Mail className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Email Enquiries</p>
                {COMPANY_DETAILS.emails.map((e, index) => (
                  <a
                    key={index}
                    href={`mailto:${e}`}
                    className="block hover:text-red-500 transition-colors mt-0.5"
                  >
                    {e}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-900 bg-[#0a0a0a] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} OFFLINE FIRE & SAFETY LTD. All rights reserved.</p>
          <p className="tracking-wide">
            Design & Safety Standards Certified in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
