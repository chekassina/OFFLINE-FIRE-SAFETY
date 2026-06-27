import { useState } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Search, Check, ShoppingCart, ShieldCheck, ListFilter, ArrowRight } from 'lucide-react';

interface ProductsSectionProps {
  onAddToQuote: (product: Product, quantity: number) => void;
  quoteBasketCount: number;
  setActiveTab: (tab: string) => void;
}

// Key specifications for each product to make the catalog professional and compliant
const PRODUCT_SPECS: Record<string, Record<string, string>> = {
  p1: {
    "Capacity": "6kg / 9kg",
    "Agent": "Monoammonium Phosphate",
    "Rating": "34A 183B C",
    "Approval": "KEBS & CE Certified"
  },
  p2: {
    "Capacity": "2kg / 5kg",
    "Agent": "Liquid CO₂ Gas",
    "Rating": "55B / Electrical",
    "Approval": "NFPA & CE Approved"
  },
  p3: {
    "Capacity": "9 Liters",
    "Agent": "Aqueous Film-Forming Foam",
    "Rating": "21A 183B",
    "Approval": "EN3 / KEBS Certified"
  },
  p4: {
    "Capacity": "8 to 32 Zones",
    "Interface": "LCD Backlit Screen",
    "Backup": "24V Rechargeable Battery",
    "Approval": "EN54 Standard Compliant"
  },
  p5: {
    "Power": "9V DC / 24V Loop",
    "Sensing": "Dual Photoelectric Chamber",
    "Sounder": "85dB Alert Tone",
    "Approval": "KEBS Approved"
  },
  p6: {
    "Hose Length": "30 Meters",
    "Diameter": "19mm Reinforced Rubber",
    "Max Pressure": "12 Bar Operating",
    "Drum": "UV Powder Coated Steel"
  },
  p7: {
    "Helmet": "High-Impact ABS Shell",
    "Gloves": "Heavy-Duty Heat Leather",
    "Boots": "Steel-Toe S3 Grade",
    "Jacket": "Flame-Retardant High-Vis"
  },
  p8: {
    "Battery Type": "Ni-Cd Rechargeable",
    "Autonomy": "Over 180 Minutes",
    "Bulb": "High-Luminance LED",
    "Mounting": "Wall / Ceiling Bracket"
  },
  p9: {
    "Cabinet": "Heavy-Duty Wall Mount",
    "Item Count": "85 Essential Supplies",
    "Standard": "OSHA & KEBS Compliant",
    "Dimensions": "35cm x 25cm x 12cm"
  },
  p10: {
    "Material": "Woven Fiberglass Fabric",
    "Max Temp": "Up to 550°C",
    "Dimensions": "1.2m x 1.2m / 1.8m x 1.8m",
    "Standard": "BS EN 1869:1997 Approved"
  }
};

export default function ProductsSection({ onAddToQuote, quoteBasketCount, setActiveTab }: ProductsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedProductIds, setAddedProductIds] = useState<Record<string, boolean>>({});

  // Group items into the 4 requested categories
  const sections = [
    {
      id: "extinguishers",
      title: "Fire Extinguishers",
      subtitle: "ABC Dry Powder, CO₂ & Foam Suppression",
      description: "Fully certified heavy-duty fire cylinders built to tackle Class A, B, C, and electrical hazards safely.",
      items: PRODUCTS.filter(p => p.category === 'extinguishers')
    },
    {
      id: "alarms",
      title: "Fire Alarm Systems",
      subtitle: "Intelligent Detectors, Panels & Sounders",
      description: "Advanced early-warning alarm units, panels, and photoelectric detection devices for instant emergency warnings.",
      items: PRODUCTS.filter(p => p.category === 'alarms')
    },
    {
      id: "safety",
      title: "Safety Equipment",
      subtitle: "Hose Reels, Blankets & PPE Clothing",
      description: "Reliable structural water supply systems and personal protection clothing designed for hazard control.",
      items: PRODUCTS.filter(p => p.category === 'safety' || p.category === 'hose')
    },
    {
      id: "emergency",
      title: "Emergency Equipment",
      subtitle: "LED Exit Signs, Alerters & First Aid Cabinets",
      description: "Certified safety compliance kits, medical boxes, and battery-backed direction panels.",
      items: PRODUCTS.filter(p => p.category === 'emergency')
    }
  ];

  const handleQtyChange = (id: string, value: number) => {
    if (value < 1) return;
    setQuantities(prev => ({ ...prev, [id]: value }));
  };

  const handleAddClick = (product: Product) => {
    const qty = quantities[product.id] || 1;
    onAddToQuote(product, qty);
    
    // Trigger visual feedback
    setAddedProductIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProductIds(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`sec-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter sections based on search query
  const filteredSections = sections.map(section => {
    const matchedItems = section.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
    return { ...section, items: matchedItems };
  }).filter(section => section.items.length > 0);

  return (
    <div className="py-12 bg-white font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Page Header (Clean Minimalism Style) */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-4 max-w-2xl">
            <div className="w-12 h-1 bg-red-700"></div>
            <span className="text-red-700 font-mono text-[10px] font-bold uppercase tracking-widest block">
              Equipment Store & Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tight text-slate-900 leading-none">
              Certified Protection Catalog
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Explore our structured catalog of KEBS, CE, and NFPA certified safety devices. Add items directly to your list to compile an official corporate quotation.
            </p>
          </div>

          {/* Search bar & Cart status */}
          <div className="flex flex-col sm:flex-row gap-3 items-center w-full lg:w-auto shrink-0">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search catalog products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-red-700 py-3 pl-10 pr-4 text-xs font-bold uppercase tracking-wider transition-all outline-none rounded-none"
                id="product-search-input"
              />
            </div>

            {quoteBasketCount > 0 && (
              <button
                onClick={() => {
                  setActiveTab('quote');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-950 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none hover:bg-red-700 transition-colors cursor-pointer"
                id="products-view-basket-btn"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Quote Basket ({quoteBasketCount})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Catalog Navigation Bar (Anchor System for organization) */}
        <div className="bg-slate-50 border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider font-mono">
            <ListFilter className="w-4 h-4 text-red-700" />
            <span>Catalog Sections:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-red-700 hover:text-white border border-slate-200 hover:border-red-700 transition-all cursor-pointer rounded-none"
                id={`anchor-btn-${sec.id}`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Catalog View */}
        <div className="space-y-16">
          {filteredSections.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 border border-slate-200 rounded-none">
              <span className="block text-4xl mb-3">🔍</span>
              <p className="text-slate-900 font-bold uppercase tracking-wider text-sm">No Matching Equipment Found</p>
              <p className="text-slate-500 text-xs mt-1 font-mono">Try adjusting your search criteria or reset filters.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 text-[10px] font-bold uppercase tracking-widest text-white bg-slate-900 px-6 py-3 hover:bg-red-700 transition-colors rounded-none"
                id="reset-catalog-btn"
              >
                Clear Search Query
              </button>
            </div>
          ) : (
            filteredSections.map(section => (
              <div 
                key={section.id} 
                id={`sec-${section.id}`} 
                className="space-y-6 pt-6 scroll-mt-24 border-t border-slate-100 first:border-0 first:pt-0"
              >
                {/* Section header banner */}
                <div className="border-l-4 border-red-700 pl-4 space-y-1">
                  <h2 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-slate-900">
                    {section.title}
                  </h2>
                  <p className="text-[11px] text-red-700 font-mono uppercase font-bold tracking-widest">
                    {section.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 max-w-3xl leading-relaxed mt-1">
                    {section.description}
                  </p>
                </div>

                {/* Section Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map(p => {
                    const qty = quantities[p.id] || 1;
                    const isAdded = addedProductIds[p.id];
                    const specs = PRODUCT_SPECS[p.id] || {};

                    return (
                      <div
                        key={p.id}
                        className="bg-white border border-slate-200 rounded-none hover:border-red-700 transition-colors flex flex-col justify-between group"
                      >
                        {/* Image Frame with Asset Metadata Overlay */}
                        <div className="bg-slate-50 aspect-square w-full relative overflow-hidden border-b border-slate-200 shrink-0">
                          <img
                            src={p.image}
                            alt={p.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 bg-slate-900 text-white text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-none font-bold">
                            ASSET ID: {p.image.split('/').pop()?.toUpperCase()}
                          </div>
                          <div className="absolute bottom-3 right-3 bg-red-700 text-white text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-none font-bold">
                            KEBS CERTIFIED
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex-grow flex flex-col justify-between gap-6">
                          <div className="space-y-4">
                            <h3 className="font-display font-bold text-base uppercase tracking-tight text-slate-900 group-hover:text-red-700 transition-colors">
                              {p.name}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {p.description}
                            </p>

                            {/* Technical Specifications Block (Requested) */}
                            <div className="bg-slate-50 border border-slate-200 p-3.5 space-y-2 rounded-none">
                              <span className="block text-[9px] font-black uppercase tracking-widest text-slate-800 font-mono pb-1 border-b border-slate-200">
                                TECHNICAL SPECIFICATIONS
                              </span>
                              <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[10px] font-mono text-slate-600">
                                {Object.entries(specs).map(([key, val]) => (
                                  <div key={key} className="flex flex-col">
                                    <span className="text-slate-400 font-bold uppercase text-[8px] tracking-wider">{key}</span>
                                    <span className="text-slate-800 font-semibold truncate">{val}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Standard features bullet list */}
                            <div className="space-y-1 pt-1">
                              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Key Merits:</span>
                              <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                                {p.features.map((feat, idx) => (
                                  <li key={idx} className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-red-700 shrink-0" />
                                    <span className="truncate">{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* CTA Selector Row */}
                          <div className="space-y-4 pt-4 border-t border-slate-100">
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-[10px] font-bold text-emerald-700 font-mono flex items-center gap-1.5 uppercase">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Compliance Secured
                              </span>

                              {/* Modern minimal quantity controller */}
                              <div className="flex items-center border border-slate-200 bg-slate-50 p-0.5 shrink-0">
                                <button
                                  onClick={() => handleQtyChange(p.id, qty - 1)}
                                  className="w-7 h-7 text-slate-500 hover:text-red-700 hover:bg-white text-xs font-bold flex items-center justify-center transition-all cursor-pointer border border-transparent hover:border-slate-200"
                                  disabled={qty <= 1}
                                  id={`qty-minus-btn-${p.id}`}
                                >
                                  -
                                </button>
                                <span className="w-8 text-center text-xs font-bold text-slate-800 font-mono">{qty}</span>
                                <button
                                  onClick={() => handleQtyChange(p.id, qty + 1)}
                                  className="w-7 h-7 text-slate-500 hover:text-red-700 hover:bg-white text-xs font-bold flex items-center justify-center transition-all cursor-pointer border border-transparent hover:border-slate-200"
                                  id={`qty-plus-btn-${p.id}`}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <button
                              onClick={() => handleAddClick(p)}
                              className={`w-full py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer rounded-none ${
                                isAdded 
                                  ? 'bg-emerald-700 text-white hover:bg-emerald-850'
                                  : 'bg-red-700 text-white hover:bg-red-800'
                              }`}
                              id={`prod-add-btn-${p.id}`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Added to Quote!</span>
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="w-3.5 h-3.5" />
                                  <span>Add {qty} Unit{qty > 1 ? 's' : ''} to Quote</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
