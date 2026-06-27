import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import ProjectsSection from './components/ProjectsSection';
import GallerySection from './components/GallerySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import QuoteSection from './components/QuoteSection';
import { Product } from './types';
import { COMPANY_DETAILS } from './data';
import { MessageSquare, ArrowUp, Flame, ShieldCheck } from 'lucide-react';

interface QuoteItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [basket, setBasket] = useState<QuoteItem[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll-to-Top display
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Basket Handlers
  const handleAddToQuote = (product: Product, quantity: number) => {
    setBasket(prev => {
      const existingIdx = prev.findIndex(item => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };

  const handleRemoveFromBasket = (productId: string) => {
    setBasket(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleUpdateBasketQty = (productId: string, qty: number) => {
    if (qty < 1) return;
    setBasket(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: qty } : item
    ));
  };

  const handleClearBasket = () => {
    setBasket([]);
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    // Navigate to quote section, populate notes with interest in service
    setActiveTab('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp click prefilled message builder
  const handleWhatsAppClick = () => {
    const text = `Hello OFFLINE FIRE & SAFETY LTD, I visited your website and would like to inquire about fire protection equipment supply, installation and maintenance quotes.`;
    const url = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeSection 
            setActiveTab={setActiveTab} 
            onRequestQuote={() => setActiveTab('quote')} 
          />
        );
      case 'about':
        return <AboutSection />;
      case 'services':
        return (
          <ServicesSection 
            setActiveTab={setActiveTab} 
            onSelectServiceForQuote={handleSelectServiceForQuote} 
          />
        );
      case 'products':
        return (
          <ProductsSection 
            onAddToQuote={handleAddToQuote} 
            quoteBasketCount={basket.reduce((acc, item) => acc + item.quantity, 0)} 
            setActiveTab={setActiveTab} 
          />
        );
      case 'projects':
        return <ProjectsSection onRequestQuote={() => setActiveTab('quote')} />;
      case 'gallery':
        return <GallerySection />;
      case 'faq':
        return <FAQSection />;
      case 'contact':
        return <ContactSection />;
      case 'quote':
        return (
          <QuoteSection 
            basket={basket} 
            onRemoveFromBasket={handleRemoveFromBasket} 
            onUpdateBasketQty={handleUpdateBasketQty} 
            onClearBasket={handleClearBasket} 
            setActiveTab={setActiveTab} 
          />
        );
      default:
        return <HomeSection setActiveTab={setActiveTab} onRequestQuote={() => setActiveTab('quote')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-gray-800">
      {/* Universal Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onRequestQuote={() => {
          setActiveTab('quote');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActiveSection()}
      </main>

      {/* Universal Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onRequestQuote={() => {
          setActiveTab('quote');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Persistent Floating Controls Widget */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group relative"
          aria-label="Contact us on WhatsApp"
          id="global-whatsapp-btn"
        >
          <MessageSquare className="w-6 h-6 fill-white text-green-600" />
          <span className="absolute right-14 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
            aria-label="Scroll to top of page"
            id="global-scroll-top-btn"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
