import { useState, ChangeEvent, FormEvent } from 'react';
import { Product } from '../types';
import { COMPANY_DETAILS, PRODUCTS } from '../data';
import { FileText, Trash2, Calendar, MapPin, Check, Plus, AlertTriangle, ArrowRight, Loader2, Download } from 'lucide-react';

interface QuoteItem {
  product: Product;
  quantity: number;
}

interface QuoteSectionProps {
  basket: QuoteItem[];
  onRemoveFromBasket: (productId: string) => void;
  onUpdateBasketQty: (productId: string, qty: number) => void;
  onClearBasket: () => void;
  setActiveTab: (tab: string) => void;
}

export default function QuoteSection({ basket, onRemoveFromBasket, onUpdateBasketQty, onClearBasket, setActiveTab }: QuoteSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    installationRequired: 'yes',
    location: '',
    notes: '',
    // Manual inputs if basket is empty
    manualEquipment: 'ABC Powder Fire Extinguisher',
    manualQuantity: '1'
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [quoteId, setQuoteId] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);

  const manualOptions = [
    "ABC Powder Fire Extinguisher",
    "CO2 Fire Extinguisher",
    "Foam Fire Extinguisher",
    "Smoke Detector & Sounders",
    "Central Fire Alarm Panel",
    "Heavy Duty Hose Reel",
    "Safety Helmets & PPE Sets",
    "Emergency Backup Lights",
    "Industrial First Aid Kit",
    "Other - Custom Specification"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      alert("Please fill in all required fields (Name, Email, Phone, and Location).");
      return;
    }

    setLoading(true);
    // Simulate API posting
    setTimeout(() => {
      const generatedId = `OFS-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteId(generatedId);
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleResetQuote = () => {
    onClearBasket();
    setSuccess(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      installationRequired: 'yes',
      location: '',
      notes: '',
      manualEquipment: 'ABC Powder Fire Extinguisher',
      manualQuantity: '1'
    });
  };

  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">Instant Pricing</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Request an Equipment Quote</h1>
          <p className="text-gray-500 text-sm">
            Compile your list of fire extinguishers, alarms, hoses, and training contracts, specify installation parameters, and receive a competitive corporate quote.
          </p>
        </div>

        {success ? (
          /* Receipt / Confirmation Screen */
          <div className="max-w-3xl mx-auto bg-neutral-50 rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Red Top Bar */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white text-center space-y-2">
              <div className="mx-auto bg-white/20 p-3 rounded-full w-14 h-14 flex items-center justify-center backdrop-blur-xs">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Quote Request Submitted</h2>
              <p className="text-xs text-red-100 font-mono">REFERENCE NUMBER: {quoteId}</p>
            </div>

            {/* Receipt details */}
            <div className="p-8 space-y-8">
              <div className="text-center max-w-md mx-auto">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your custom quotation profile has been registered in Nairobi safety database.
                </p>
              </div>

              {/* Items Summary */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">Equipment List</h4>
                
                {basket.length > 0 ? (
                  <div className="space-y-3.5">
                    {basket.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs text-gray-600">
                        <div className="flex gap-2 items-center">
                          <span className="bg-red-50 text-red-600 font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono">{idx + 1}</span>
                          <span className="font-semibold text-gray-900">{item.product.name}</span>
                        </div>
                        <span className="font-mono bg-neutral-100 py-1 px-2.5 rounded-md font-bold text-gray-800">Qty: {item.quantity}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <span className="font-semibold text-gray-900">{formData.manualEquipment}</span>
                    <span className="font-mono bg-neutral-100 py-1 px-2.5 rounded-md font-bold text-gray-800">Qty: {formData.manualQuantity}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-gray-400 font-medium">Installation:</span>
                    <span className="font-bold text-gray-900 uppercase">{formData.installationRequired}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 font-medium">Delivery District:</span>
                    <span className="font-bold text-gray-900">{formData.location}</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Checklist */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">What Happens Next?</h4>
                <div className="space-y-2.5 text-xs text-gray-600">
                  <div className="flex gap-2 items-start">
                    <span className="bg-red-100 text-red-700 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
                    <p className="pt-0.5"><strong className="text-gray-900">Technical Assessment</strong>: A certified safety engineer will evaluate your space size and volume hazards.</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="bg-red-100 text-red-700 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
                    <p className="pt-0.5"><strong className="text-gray-900">Official Proforma PDF</strong>: We generate and email a detailed commercial quote with certified KEBS seal within 1 hour.</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="bg-red-100 text-red-700 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
                    <p className="pt-0.5"><strong className="text-gray-900">Contract Scheduling</strong>: Optional onsite mounting, pressure tagging, and staff extinguisher drills arranged upon downpayment.</p>
                  </div>
                </div>
              </div>

              {/* Download corporate profile or start over */}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="w-full sm:w-1/2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="receipt-download-profile-btn"
                >
                  <Download className="w-4 h-4 text-red-500" />
                  <span>Preview & Download Profile</span>
                </button>
                <button
                  onClick={handleResetQuote}
                  className="w-full sm:w-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center cursor-pointer"
                  id="receipt-start-over-btn"
                >
                  Start New Quotation
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Basket Preview or Manual Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-50 rounded-2xl p-6 border border-gray-100 space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-600" /> Selected Safety Items
                  </h3>
                  {basket.length > 0 && (
                    <button
                      onClick={onClearBasket}
                      className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                      id="clear-basket-btn"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {basket.length > 0 ? (
                  /* Display Basket Items */
                  <div className="space-y-4">
                    {basket.map((item, idx) => (
                      <div key={idx} className="flex gap-3 bg-white p-3 rounded-xl border border-gray-200/60 shadow-xs relative group">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded-lg shrink-0 border border-gray-100"
                        />
                        <div className="flex-grow min-w-0 pr-6">
                          <h4 className="font-bold text-xs text-gray-900 truncate">{item.product.name}</h4>
                          <span className="block text-[10px] text-gray-400 capitalize mt-0.5">{item.product.category}</span>
                          
                          {/* Qty adjustments */}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] text-gray-400 font-medium">Quantity:</span>
                            <div className="flex items-center border border-gray-100 rounded-md bg-neutral-50">
                              <button
                                type="button"
                                onClick={() => onUpdateBasketQty(item.product.id, item.quantity - 1)}
                                className="w-5 h-5 text-gray-500 hover:text-red-600 hover:bg-white rounded-md text-xs font-bold"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-[10px] font-bold text-gray-800 font-mono">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => onUpdateBasketQty(item.product.id, item.quantity + 1)}
                                className="w-5 h-5 text-gray-500 hover:text-red-600 hover:bg-white rounded-md text-xs font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => onRemoveFromBasket(item.product.id)}
                          className="absolute top-2 right-2 p-1 bg-red-50 hover:bg-red-100 rounded-md text-red-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          aria-label="Remove item"
                          id={`remove-item-${item.product.id}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}

                    <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 flex gap-2 items-start text-xs text-red-950">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <p>
                        Need further items? Visit our <button type="button" onClick={() => setActiveTab('products')} className="font-bold underline text-red-700 cursor-pointer">Products Catalog</button> to add more to your basket dynamically!
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Display Manual Selectors if basket is empty */
                  <div className="space-y-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Your quote basket is currently empty. You can specify what you need manually below or browse the products tab.
                    </p>
                    
                    <div className="space-y-3 pt-3 border-t border-gray-200">
                      <div className="space-y-1">
                        <label htmlFor="manual-eq-select" className="text-xs font-semibold text-gray-600">Equipment / Service Needed</label>
                        <select
                          id="manual-eq-select"
                          name="manualEquipment"
                          value={formData.manualEquipment}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-2 px-3 text-xs outline-none transition-all cursor-pointer"
                        >
                          {manualOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="manual-qty-input" className="text-xs font-semibold text-gray-600">Estimated Quantity Needed</label>
                        <input
                          id="manual-qty-input"
                          type="number"
                          min="1"
                          name="manualQuantity"
                          value={formData.manualQuantity}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-2 px-3 text-xs outline-none transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center block transition-all"
                      id="browse-products-quote-btn"
                    >
                      Browse Products Tab
                    </button>
                  </div>
                )}
              </div>

              {/* Company profile shortcut card */}
              <div className="bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 space-y-4">
                <div className="flex gap-3 items-center">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Download Our Profile</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Explore our licenses, client lists & complete listings</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 font-bold py-2.5 px-4 rounded-xl text-xs text-center block transition-all cursor-pointer"
                  id="sidebar-download-profile-btn"
                >
                  Preview Corporate PDF Profile
                </button>
              </div>
            </div>

            {/* Right Col: Quote Request Details Form (7 cols) */}
            <div className="lg:col-span-7 bg-neutral-50 rounded-2xl p-6 sm:p-10 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200/60 pb-3 mb-6">Request Specific Quotation</h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="quote-name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Contact Person <span className="text-red-500">*</span></label>
                    <input
                      id="quote-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-company" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Company / Organization</label>
                    <input
                      id="quote-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Alpha logistics Kenya"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="quote-email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                    <input
                      id="quote-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@yourdomain.com"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      id="quote-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0721 000 000"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="quote-install" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Professional Installation Needed?</label>
                    <select
                      id="quote-install"
                      name="installationRequired"
                      value={formData.installationRequired}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="yes">Yes - Setup & Mounting by OFFLINE Engineers</option>
                      <option value="no">No - Supply Only (DIY / External Contractor)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-location" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Installation / Delivery Location <span className="text-red-500">*</span></label>
                    <input
                      id="quote-location"
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Westlands / Mombasa Road, Nairobi"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-notes" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Additional Project Notes / Special Demands</label>
                  <textarea
                    id="quote-notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Provide any specific height requirements, gas agent classes, zone sizes, or timing schedules."
                    className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/15 flex items-center justify-center gap-2 cursor-pointer"
                  id="quote-form-submit-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting quote specifications...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Corporate Profile PDF Preview Simulator Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full border border-gray-200 shadow-2xl flex flex-col justify-between max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Profile Header */}
              <div className="bg-[#111] text-white p-6 border-b border-red-950 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="bg-red-600 p-1.5 rounded-md text-white font-bold text-xs">OFS</span>
                  <div>
                    <h3 className="font-bold text-base">OFFLINE FIRE & SAFETY LTD</h3>
                    <p className="text-[10px] text-gray-400">CORPORATE PROFILE PREVIEW • Nairobi, Kenya</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-400 hover:text-white font-bold text-sm bg-neutral-800 hover:bg-neutral-700 py-1 px-3 rounded-lg cursor-pointer"
                  id="close-profile-modal-btn"
                >
                  Close
                </button>
              </div>

              {/* Printable PDF Body */}
              <div className="p-8 sm:p-10 space-y-6 overflow-y-auto max-h-[60vh] text-xs font-sans leading-relaxed text-gray-600">
                <div className="border-b-2 border-red-600 pb-4 flex justify-between items-end">
                  <div>
                    <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">CORPORATE PROFILE BRIEF</h1>
                    <p className="text-[9px] text-gray-400 mt-0.5">REG NO: CPR-2024-OFS-4917</p>
                  </div>
                  <div className="text-right text-[10px] font-mono">
                    <p>Accra Road, Nairobi, Kenya</p>
                    <p className="text-red-600 font-bold">offlinefr716@gmail.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] border-b border-gray-100 pb-1 text-red-600">1. Executive Overview</h4>
                  <p>
                    OFFLINE FIRE & SAFETY LTD is an accredited engineering enterprise incorporated in Kenya, specializing in full-cycle fire hazard prevention, certified alarm installations, high-pressure extinguisher refilling services, and professional staff evacuation drills. We support over 10 active commercial sectors.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] border-b border-gray-100 pb-1 text-red-600">2. Licensing & Standards</h4>
                    <ul className="space-y-1 list-disc list-inside text-gray-500">
                      <li>KEBS (Kenya Bureau of Standards) Approved</li>
                      <li>Nairobi County Fire Department Licensed</li>
                      <li>OSHA Workplace Safety Certified</li>
                      <li>NFPA Guidelines Adherent Solutions</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] border-b border-gray-100 pb-1 text-red-600">3. Distribution Partners</h4>
                    <p className="text-gray-500">
                      We source central alarm panels, heat sensors, landing valves, and safety PPE gear strictly from vetted EN3 certified international manufacturing plants to guarantee absolute trigger precision.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] border-b border-gray-100 pb-1 text-red-600">4. Core Deliverable Capacities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[10px]">
                    <div className="bg-neutral-50 p-2 rounded-lg border border-gray-100">
                      <span className="block font-bold text-red-600">SUPPLY</span>
                      <span className="text-[9px] text-gray-500">Extinguishers, Alarms, Hydrants, Cabinets, Hoses</span>
                    </div>
                    <div className="bg-neutral-50 p-2 rounded-lg border border-gray-100">
                      <span className="block font-bold text-red-600">INSTALL</span>
                      <span className="text-[9px] text-gray-500">Wiring sensors, mounting brackets, water sprinklers</span>
                    </div>
                    <div className="bg-neutral-50 p-2 rounded-lg border border-gray-100">
                      <span className="block font-bold text-red-600">MAINTAIN</span>
                      <span className="text-[9px] text-gray-500">Annual contracts, hydrostatic pressure tests, refills</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Print CTA */}
              <div className="bg-neutral-50 p-6 border-t border-gray-200 flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                  id="print-profile-btn"
                >
                  <Download className="w-4 h-4 text-red-500" /> Print / Save PDF
                </button>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs cursor-pointer"
                  id="profile-close-bottom-btn"
                >
                  Got It, Thanks
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
