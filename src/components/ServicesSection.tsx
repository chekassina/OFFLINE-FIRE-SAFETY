import { useState } from 'react';
import { SERVICES } from '../data';
import { Flame, Search, ShieldCheck, ChevronRight, Check, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  setActiveTab: (tab: string) => void;
  onSelectServiceForQuote: (serviceName: string) => void;
}

export default function ServicesSection({ setActiveTab, onSelectServiceForQuote }: ServicesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pb-6 border-b border-gray-100">
          <div className="space-y-3 max-w-2xl">
            <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">Specialist Services</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Fire Safety Services</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Certified design, rapid installation, authorized refilling, custom compliance audits, and hands-on drills tailored to keep your facilities protected.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium transition-all outline-none"
              id="service-search-input"
            />
          </div>
        </div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-dashed border-gray-200">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-900 font-bold text-lg">No services found</p>
            <p className="text-gray-500 text-sm mt-1">Try resetting your search query or entering general keywords like 'Extinguisher' or 'Refilling'.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 px-4 py-2 rounded-lg"
              id="reset-service-search-btn"
            >
              Clear Search Query
            </button>
          </div>
        )}

        {/* Services List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-red-100 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Decorative side accent bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-red-600 transition-all" />

              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex justify-between items-start gap-4">
                  <div className="bg-red-50 text-red-600 p-3.5 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm shadow-red-600/5 shrink-0">
                    <Flame className="w-6 h-6 animate-pulse" />
                  </div>
                  <button
                    onClick={() => onSelectServiceForQuote(srv.name)}
                    className="bg-neutral-50 hover:bg-red-50 text-gray-700 hover:text-red-600 font-semibold text-xs py-1.5 px-3 rounded-lg border border-gray-100 hover:border-red-100 transition-all cursor-pointer"
                    id={`service-add-quote-${srv.id}`}
                  >
                    Select for Quote
                  </button>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                    {srv.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Sub-details checklist */}
                <div className="space-y-2.5 pt-4 border-t border-gray-50">
                  <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">What's Covered:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.details.map((det, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <div className="bg-green-50 text-green-600 rounded-full p-0.5 shrink-0 mt-0.5 border border-green-100">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs text-gray-600 leading-tight">{det}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Footer CTA */}
              <div className="pt-6 border-t border-gray-50 mt-6 flex justify-between items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-neutral-50 py-1 px-2.5 rounded-full border border-gray-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" /> Fully Compliant
                </span>
                <button
                  onClick={() => onSelectServiceForQuote(srv.name)}
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                  id={`service-cta-btn-${srv.id}`}
                >
                  Request quote for this service <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
