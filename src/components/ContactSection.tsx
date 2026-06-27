import { useState, ChangeEvent, FormEvent } from 'react';
import { COMPANY_DETAILS } from '../data';
import { Mail, Phone, MapPin, Send, Check, Loader2, Navigation, Copy, Map, Layers } from 'lucide-react';

export default function ContactSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Supply of Fire Extinguishers',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite'>('streets');
  const [zoomLevel, setZoomLevel] = useState(15);

  const servicesDropdown = [
    "Supply of Fire Extinguishers",
    "Fire Alarm Installation",
    "Fire Extinguisher Servicing",
    "Fire Risk Assessment",
    "Fire Safety Training",
    "Annual Maintenance Contract (AMC)"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in the required fields (Name, Email, and Message).");
      return;
    }

    setLoading(true);
    // Simulate API calling
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: 'Supply of Fire Extinguishers',
        message: ''
      });
    }, 1500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">Contact Our Depot</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Get in Touch with Us</h1>
          <p className="text-gray-500 text-sm">
            Reach out to OFFLINE FIRE & SAFETY LTD for certified product distribution, installations, quick refilling, or training consultations.
          </p>
        </div>

        {/* Form and Address Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-6">
              <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200/60 pb-3">Office Information</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start text-sm">
                  <div className="bg-red-100 text-red-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Nairobi Headquarters</h4>
                    <p className="text-gray-500 mt-1">{COMPANY_DETAILS.address}</p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                      id="copy-address-btn"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Address Details'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-sm">
                  <div className="bg-red-100 text-red-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Call Phone Support</h4>
                    <div className="space-y-1 mt-1">
                      {COMPANY_DETAILS.phones.map((p, idx) => (
                        <a
                          key={idx}
                          href={`tel:${p.replace(/\s/g, '')}`}
                          className="block text-gray-500 hover:text-red-600 font-medium transition-colors"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-sm">
                  <div className="bg-red-100 text-red-600 p-2.5 rounded-xl shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Email Communication</h4>
                    <div className="space-y-1 mt-1">
                      {COMPANY_DETAILS.emails.map((e, idx) => (
                        <a
                          key={idx}
                          href={`mailto:${e}`}
                          className="block text-gray-500 hover:text-red-600 font-medium transition-colors"
                        >
                          {e}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 space-y-4 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-bold flex items-center gap-1">
                  <Map className="w-4 h-4" /> Interactive Locator
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setMapStyle('streets')}
                    className={`p-1 px-2.5 rounded-md text-[10px] font-bold ${mapStyle === 'streets' ? 'bg-red-600 text-white' : 'bg-neutral-800 text-gray-400'}`}
                    id="map-style-streets-btn"
                  >
                    Streets
                  </button>
                  <button
                    onClick={() => setMapStyle('satellite')}
                    className={`p-1 px-2.5 rounded-md text-[10px] font-bold ${mapStyle === 'satellite' ? 'bg-red-600 text-white' : 'bg-neutral-800 text-gray-400'}`}
                    id="map-style-satellite-btn"
                  >
                    Satellite
                  </button>
                </div>
              </div>

              {/* Styled Mock map container */}
              <div className="aspect-video w-full rounded-xl relative overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center text-center">
                
                {/* Visual grid representing streets */}
                <div className={`absolute inset-0 opacity-20 pointer-events-none ${mapStyle === 'satellite' ? 'bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]' : 'bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:20px_20px]'}`} />

                {/* Simulated streets / paths */}
                {mapStyle === 'streets' && (
                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-around text-[9px] font-mono text-neutral-600">
                    <div className="h-6 w-full border-b border-neutral-800 bg-neutral-950/20 flex items-center justify-center">Accra Road</div>
                    <div className="h-6 w-full border-b border-neutral-800 bg-neutral-950/20 flex items-center justify-center">Emmacra Arcade Entrance</div>
                    <div className="h-6 w-full border-b border-neutral-800 bg-neutral-950/20 flex items-center justify-center">Mfangano Street</div>
                  </div>
                )}

                {/* Map center marker */}
                <div className="relative z-10 space-y-2">
                  <div className="mx-auto w-10 h-10 bg-red-600 rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-white">OFFLINE FIRE & SAFETY LTD</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5">Accra Road, Nairobi • Zoom: {zoomLevel}x</p>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-3 right-3 flex flex-col gap-1 z-20">
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(prev + 1, 18))}
                    className="w-7 h-7 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-bold flex items-center justify-center text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(prev - 1, 10))}
                    className="w-7 h-7 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-bold flex items-center justify-center text-white"
                  >
                    -
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] font-mono text-gray-400">Coordinates: 1.2847° S, 36.8312° E</span>
                <a
                  href="https://maps.google.com/?q=Accra+Road+Nairobi+Emmacra+Arcade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-400"
                >
                  <Navigation className="w-3.5 h-3.5" /> Navigate on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl p-6 sm:p-10 border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200/60 pb-3 mb-6">Send an Inquiry</h3>

            {success ? (
              <div className="text-center py-10 space-y-4">
                <div className="mx-auto bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl text-gray-900">Thank You! Message Dispatched Successfully</h4>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  Our certified fire protection engineers have received your details. We will review your inquiry and get in touch within the next 2 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-all cursor-pointer"
                  id="send-another-message-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                    <input
                      id="name-input"
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
                    <label htmlFor="company-input" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Company / Organization</label>
                    <input
                      id="company-input"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Alpha Logistics Ltd"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone-input" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Phone Number</label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0721 000 000"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@yourdomain.com"
                      className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service-select" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Primary Service Needed</label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all cursor-pointer"
                  >
                    {servicesDropdown.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-area" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Message / Project Requirements <span className="text-red-500">*</span></label>
                  <textarea
                    id="message-area"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe what fire protection equipment, testing, certification, or training you require."
                    className="w-full bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl py-3 px-4 text-sm outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/15 flex items-center justify-center gap-2 cursor-pointer"
                  id="contact-form-submit-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting secure details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
