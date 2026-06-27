import { useState } from 'react';
import { FAQS, CLIENTS } from '../data';
import { ChevronDown, HelpCircle, Building2, ShieldAlert, CheckCircle } from 'lucide-react';

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        
        {/* FAQ Area */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">Knowledge Depot</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h1>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Find immediate answers regarding certified fire alarm panel installations, cylinder hydrostatic testing, and regional licensing requirements.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-neutral-50 rounded-2xl border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left py-5 px-6 font-bold text-gray-900 text-sm sm:text-base flex justify-between items-center gap-4 hover:text-red-600 transition-colors cursor-pointer"
                    id={`faq-btn-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-150 pt-4 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Clients Sectors Area */}
        <div className="space-y-8 pt-6 border-t border-gray-100">
          <div className="text-center space-y-2">
            <span className="text-red-600 font-semibold text-xs font-mono uppercase tracking-widest">Industry Footprint</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Organizations We Serve</h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">Vetted fire safety compliance partners across diverse industries in East Africa.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENTS.map((cl) => (
              <div
                key={cl.id}
                className="bg-neutral-50 p-4 border border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50/5 transition-all text-center flex flex-col justify-center items-center gap-1 group"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-red-600 shadow-sm border border-gray-100 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Building2 className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-gray-900 text-xs mt-1.5">{cl.name}</h5>
                <span className="text-[10px] text-gray-400 font-mono">{cl.category}</span>
              </div>
            ))}
          </div>

          {/* Verification Logos Banner */}
          <div className="bg-neutral-50 rounded-2xl p-6 border border-gray-100/80 flex flex-wrap justify-around items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
              <span>KEBS Certified Equipments</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
              <span>NEMA Fire Compliance Standard</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
              <span>OSHA Workplace Safety Protocols</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
