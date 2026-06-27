import { useState } from 'react';
import { SERVICES } from '../data';
import { ChevronRight, ShieldAlert, Star, Building2, Flame, CheckCircle, Lightbulb, PenTool, ClipboardCheck, GraduationCap, CalendarDays } from 'lucide-react';
import FireSafetyVideo from './FireSafetyVideo';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function HomeSection({ setActiveTab, onRequestQuote }: HomeSectionProps) {
  // Why Choose Us list mapping to icons & specific images
  const whyChooseUs = [
    {
      title: "KEBS Approved Equipment",
      desc: "All products carry authentic KEBS, CE, and NFPA seals of conformity. Zero tolerance for sub-standard copies.",
      image: "/images/ter15.jpg",
      assetId: "TER15.JPG"
    },
    {
      title: "Certified Safety Engineers",
      desc: "Our installers hold industry credentials for addressable fire loop programming, hydraulic designs, and inspections.",
      image: "/images/ter16.jpg",
      assetId: "TER16.JPG"
    },
    {
      title: "24/7 Priority Emergency Support",
      desc: "Contract holders receive dispatch support for active fire panel alerts, faulty sensors, or hydrostatic test drops.",
      image: "/images/ter19.jpg",
      assetId: "TER19.JPG"
    }
  ];

  // Map service IDs to corresponding terXX images for visual richness
  const SERVICE_IMAGES: Record<string, { img: string; asset: string }> = {
    supply: { img: "/images/ter11.jpg", asset: "TER11.JPG" },
    "alarm-install": { img: "/images/ter12.jpg", asset: "TER12.JPG" },
    servicing: { img: "/images/ter18.jpg", asset: "TER18.JPG" },
    assessment: { img: "/images/ter17.jpg", asset: "TER17.JPG" },
    training: { img: "/images/ter14.jpg", asset: "TER14.JPG" },
    contracts: { img: "/images/ter19.jpg", asset: "TER19.JPG" }
  };

  const testimonials = [
    {
      quote: "The team delivered complete fire alarm installation ahead of schedule. Their support with KEBS and NEMA compliance certification was flawless.",
      author: "Eng. Moses Gitau",
      organization: "Director, Apex Commercial Hubs"
    },
    {
      quote: "Outstanding hydrostatic cylinder testing and refilling turnarounds. Highly professional contract managers.",
      author: "Sister Beatrice",
      organization: "Administrator, St. Mary Medical Hospital"
    },
    {
      quote: "Offline Fire has been our sole AMC partner for 3 years. Their prompt dispatch and maintenance keeping our alarms 100% active is reassuring.",
      author: "Patrick Kiprop",
      organization: "Security Lead, Mombasa Logistic Depots"
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. Immersive Clean Minimalist Welcome Hero with Image */}
      <section className="relative bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[580px]">
          
          {/* Left Side: Text and Actions */}
          <div className="w-full lg:w-1/2 p-8 sm:p-16 flex flex-col justify-center bg-slate-50">
            <div className="w-12 h-1 bg-red-700 mb-6"></div>
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest font-mono mb-3 block">
              Certified Fire Protection & Safety Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 leading-[1.05] tracking-tighter uppercase mb-6">
              Protecting Lives, <br />Property & <br /><span className="text-red-700">Businesses.</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
              We supply, install, and maintain international-standard safety gear, fire alarms, extinguishers, and sprinklers for commercial, industrial, and residential facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onRequestQuote}
                className="px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-widest text-xs rounded-none hover:bg-red-800 transition-colors text-center cursor-pointer"
                id="hero-quote-btn"
              >
                Request Quote
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs rounded-none hover:bg-slate-900 hover:text-white transition-all text-center cursor-pointer"
                id="hero-contact-btn"
              >
                Contact Us Today
              </button>
            </div>
          </div>

          {/* Right Side: Welcome Message Image */}
          <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full bg-slate-200 border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden">
            <img 
              src="/images/ter11.jpg" 
              alt="Offline Fire welcome display" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover brightness-95" 
            />
            {/* Dark gradient overlay for extreme text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            {/* Monospace Asset ID Indicator */}
            <div className="absolute top-6 left-6 bg-slate-900 text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 border border-slate-800 font-bold z-10">
              FEATURED ASSET ID: TER11.JPG
            </div>

            {/* Float badge */}
            <div className="absolute bottom-6 right-6 bg-white p-5 border-l-4 border-red-700 rounded-none max-w-xs shadow-2xl z-10">
              <p className="italic text-xs text-slate-600 leading-relaxed">
                "Excellent service, quick turnaround on hydrostatic cylinder testing, and highly reliable extinguishers. Outstanding partnership for compliance."
              </p>
              <p className="font-bold text-[10px] mt-2 uppercase tracking-wider text-slate-900">
                — Procurement Manager, Apex Commercial Hubs
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Our Core Focus Area with Images (Requested) */}
      <section className="py-20 px-4 sm:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-red-700"></div>
            <span className="block text-red-700 font-mono text-[10px] font-bold uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 uppercase tracking-tight leading-tight">
              Professional Fire Protection & Risk Solutions
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Offline Fire & Safety Ltd is an industry leader in certified fire prevention systems across East Africa. We handle everything from basic fire extinguisher refilling to multi-zone addressable building panels.
            </p>
            <p className="text-slate-500 leading-relaxed text-xs">
              We focus on safety standards compliance including NEMA regulations, KEBS validation, and OSHA rules, ensuring your property passes statutory audits hassle-free.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-bold uppercase text-xs tracking-wider cursor-pointer"
                id="about-read-more-btn"
              >
                Read More About Us <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Core Focus Areas Grid featuring Images (Requested) */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                Operational Core Focus Areas
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Box 1 */}
              <div className="relative h-44 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter11.jpg" 
                  alt="Certified products" 
                  className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-red-950/20 group-hover:bg-red-950/30 transition-colors" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                  ASSET ID: TER11.JPG
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block text-xl font-display font-black text-red-500">100%</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider mt-0.5">Certified Products</span>
                  <span className="block text-[9px] text-slate-300 font-mono mt-0.5">KEBS Approved Extinguishers</span>
                </div>
              </div>

              {/* Box 2 */}
              <div className="relative h-44 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter12.jpg" 
                  alt="Alarm panels" 
                  className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-red-950/20 group-hover:bg-red-950/30 transition-colors" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                  ASSET ID: TER12.JPG
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block text-xl font-display font-black text-red-500">24/7</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider mt-0.5">Emergency Dispatch</span>
                  <span className="block text-[9px] text-slate-300 font-mono mt-0.5">Active Alarm Monitoring</span>
                </div>
              </div>

              {/* Box 3 */}
              <div className="relative h-44 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter13.jpg" 
                  alt="Hose reel service" 
                  className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-red-950/20 group-hover:bg-red-950/30 transition-colors" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                  ASSET ID: TER13.JPG
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block text-xl font-display font-black text-red-500">AMC</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider mt-0.5">Maintenance Packages</span>
                  <span className="block text-[9px] text-slate-300 font-mono mt-0.5">Scheduled Cylinder Testing</span>
                </div>
              </div>

              {/* Box 4 */}
              <div className="relative h-44 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter14.jpg" 
                  alt="Industrial safety kit" 
                  className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-red-950/20 group-hover:bg-red-950/30 transition-colors" />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                  ASSET ID: TER14.JPG
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block text-xl font-display font-black text-red-500">10+</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider mt-0.5">Industries Served</span>
                  <span className="block text-[9px] text-slate-300 font-mono mt-0.5">Hotels, Schools, Factories</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 4. Our Services with Images (Requested) */}
      <section className="py-20 px-4 sm:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-700 font-mono text-[10px] font-bold uppercase tracking-widest">
              Specialist Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
              Our Professional Services
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4"></div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
              Explore the professional fire safety installations, maintenance programs, and equipment packages we offer to safeguard your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => {
              const serviceAsset = SERVICE_IMAGES[srv.id] || { img: "/images/ter11.jpg", asset: "TER11.JPG" };
              return (
                <div
                  key={srv.id}
                  className="bg-white border border-slate-200 rounded-none flex flex-col justify-between hover:border-red-700 transition-colors group overflow-hidden"
                >
                  <div>
                    {/* Top image banner with Asset ID for each service (Requested) */}
                    <div className="h-44 w-full bg-slate-100 relative overflow-hidden border-b border-slate-200">
                      <img 
                        src={serviceAsset.img} 
                        alt={srv.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5">
                        SERVICE ASSET ID: {serviceAsset.asset}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display font-bold text-base uppercase tracking-tight text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                        {srv.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {srv.description}
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-600 font-mono">
                        {srv.details.slice(0, 3).map((det, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-red-700" />
                            <span className="truncate">{det}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-2">
                    <div className="pt-4 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setActiveTab('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-[10px] font-bold uppercase tracking-widest text-red-700 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                        id={`home-srv-btn-${srv.id}`}
                      >
                        View Details &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us with Images (Requested) */}
      <section className="py-20 px-4 sm:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-700 font-mono text-[10px] font-bold uppercase tracking-widest">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
              Why Choose OFFLINE FIRE
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4"></div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
              We stand apart through our commitment to genuine equipment, strict international testing standards, and continuous technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Why Choose Us Cards */}
            <div className="space-y-6">
              {whyChooseUs.map((w, idx) => {
                return (
                  <div 
                    key={idx} 
                    className="flex gap-4 items-start bg-slate-50 border border-slate-200 p-5 rounded-none hover:border-red-700 transition-colors"
                  >
                    <div className="bg-white border border-slate-200 p-3 shrink-0 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-tight text-slate-900 text-sm">{w.title}</h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{w.desc}</p>
                      
                      {/* Technical asset identifier for each why chose us card (Requested) */}
                      <span className="inline-block font-mono text-[8px] text-slate-400 bg-slate-100 px-2 py-0.5 mt-2">
                        COMPLIANCE REFERENCE: {w.assetId}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us Supporting Visual Gallery Grid (Requested) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-56 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter15.jpg" 
                  alt="Stock warehouse" 
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 font-bold">
                  ASSET: TER15.JPG
                </div>
                <div className="absolute bottom-3 left-3 bg-red-700 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 font-bold">
                  COMPLIANCE STOCK
                </div>
              </div>

              <div className="relative h-56 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter16.jpg" 
                  alt="Cylinder inspection lab" 
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 font-bold">
                  ASSET: TER16.JPG
                </div>
                <div className="absolute bottom-3 left-3 bg-red-700 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 font-bold">
                  HYDRO TESTING LAB
                </div>
              </div>

              <div className="relative h-44 col-span-2 border border-slate-200 overflow-hidden group">
                <img 
                  src="/images/ter19.jpg" 
                  alt="Certified safety gear" 
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 font-bold">
                  ASSET: TER19.JPG
                </div>
                <div className="absolute bottom-3 left-3 bg-red-700 text-white text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 font-bold">
                  NEMA WORKPLACE SAFETY GEAR
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-20 px-4 sm:px-8 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest">
              Sectors Handled
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              Industries We Protect
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4"></div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              Different environments face unique fire threats. We deliver tailored, custom safety systems compliant with sector-specific laws.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Commercial Offices", desc: "Addressable fire panels, smoke loops, and manual alarm points.", icon: Building2 },
              { name: "Hospitals & Hotels", desc: "Gas suppression, wet chemical kitchen hoods, escape lighting.", icon: ShieldAlert },
              { name: "Schools & Colleges", desc: "Audible sirens, fire drill kits, ABC powder canisters.", icon: CheckCircle },
              { name: "Industrial Plants", desc: "Foam systems, heavy landing valves, dry riser hydrants.", icon: Flame }
            ].map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="bg-slate-950 border border-slate-800 rounded-none p-5 hover:border-red-700 transition-colors group">
                  <div className="bg-slate-900 text-red-500 p-3 rounded-none w-fit group-hover:bg-red-700 group-hover:text-white transition-colors mb-4 border border-slate-800 group-hover:border-red-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold uppercase tracking-wider text-white text-xs group-hover:text-red-500 transition-colors">
                    {ind.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-mono">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-700 font-mono text-[10px] font-bold uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
              Trusted by Leading Organizations
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-none flex flex-col justify-between relative hover:border-red-700 transition-colors">
                <div className="text-red-700 opacity-10 absolute top-4 right-6 text-5xl font-serif">“</div>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 mt-6">
                  <p className="font-bold text-xs uppercase tracking-wider text-slate-900">{t.author}</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">{t.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
