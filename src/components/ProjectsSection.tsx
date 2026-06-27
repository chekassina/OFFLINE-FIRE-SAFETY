import { PROJECTS } from '../data';
import { MapPin, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  onRequestQuote: () => void;
}

export default function ProjectsSection({ onRequestQuote }: ProjectsSectionProps) {
  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-4">
          <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">Completed Safety Works</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Completed Projects</h1>
          <p className="text-gray-500 text-sm">
            Proven execution of comprehensive fire fighting setups, hazard protection installations, and industrial emergency compliance.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div className="aspect-video w-full bg-neutral-50 relative overflow-hidden border-b border-gray-100 shrink-0">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-mono tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full shadow-md">
                  {proj.category}
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex-grow flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Foot indicators */}
                <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-semibold text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Inspected & Certified Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-neutral-50 rounded-2xl border border-gray-100 p-8 sm:p-10 text-center space-y-4 max-w-4xl mx-auto mt-6">
          <h3 className="text-xl font-bold text-gray-900">Have a similar safety project or expansion?</h3>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            From complete office builds in Nairobi to multi-story factories in industrial districts, we engineer compliant protection structures.
          </p>
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-md shadow-red-600/10 cursor-pointer"
            id="projects-cta-btn"
          >
            Request a Dedicated Consultation <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
