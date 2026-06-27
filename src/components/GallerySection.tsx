import { useState } from 'react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';
import { Maximize2, X, Info } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'extinguishers', label: 'Fire Extinguishers' },
    { id: 'installations', label: 'Installations' },
    { id: 'alarms', label: 'Fire Alarms' },
    { id: 'training', label: 'Safety Training' },
    { id: 'events', label: 'Company Events' },
    { id: 'projects', label: 'Completed Projects' }
  ];

  const filteredGallery = GALLERY.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">Visual Showcase</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Equipment & Gallery</h1>
          <p className="text-gray-500 text-sm">
            Inspect our certified product designs, professional field installations, fire extinguisher servicing depots, and public training sessions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/10'
                  : 'bg-neutral-50 text-gray-600 border-gray-200 hover:bg-neutral-100 hover:text-gray-900'
              }`}
              id={`gal-cat-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-neutral-50 rounded-xl overflow-hidden border border-gray-200 hover:border-red-500 hover:shadow-md transition-all cursor-pointer relative aspect-square shrink-0"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-red-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <div className="self-end bg-white/20 p-2 rounded-lg backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-wider uppercase bg-red-600 text-white px-2 py-0.5 rounded-full w-fit">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm mt-1.5 leading-tight">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all cursor-pointer"
              aria-label="Close image preview"
              id="close-gallery-modal-btn"
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full border border-gray-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square w-full bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-red-50 text-red-600 border border-red-100 px-2.5 py-1 rounded-full font-bold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 mt-2">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs py-2 px-4 rounded-xl cursor-pointer"
                  id="gallery-modal-done-btn"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
