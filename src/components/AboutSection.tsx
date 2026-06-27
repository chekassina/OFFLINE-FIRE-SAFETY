import { Shield, Target, Lightbulb, BadgeCheck, Users, Eye, HelpCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function AboutSection() {
  const coreValues = [
    { name: "Safety First", desc: "Our ultimate, unwavering priority in every single installation, training session, or safety report we compile." },
    { name: "Integrity", desc: "Transparent consultations, honest quotes, and delivering on every certified safety guarantee." },
    { name: "Professionalism", desc: "Highly trained engineers and accredited inspectors who strictly follow KEBS, OSHA, and NFPA protocols." },
    { name: "Excellence", desc: "Striving for the highest possible build quality on every single fire alarm panel, pump, and sensor." },
    { name: "Reliability", desc: "We provide persistent support and scheduled inspections so your emergency systems operate smoothly in real crises." },
    { name: "Innovation", desc: "Using advanced addressable gas and smart detectors to minimize false alerts and improve safety response times." },
    { name: "Customer Satisfaction", desc: "We listen to your space constraints and budget to formulate the most optimal, safe layouts." }
  ];

  return (
    <div className="py-12 bg-white font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-red-50 border border-red-200 py-1 px-3 rounded-full text-red-600 text-xs font-mono tracking-wider uppercase font-semibold">About Our Enterprise</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">OFFLINE FIRE & SAFETY LTD</h1>
          <p className="text-gray-500 text-base sm:text-lg">
            Dedicated to safeguarding lives, livelihoods, and industrial progress through premium fire safety services.
          </p>
        </div>

        {/* Overview & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Our Operational Philosophy</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              At **{COMPANY_DETAILS.name}**, we understand that fire emergencies happen when least expected. Our company is committed to providing premium, highly reliable fire protection products and services that completely meet local and international safety standards.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We partner with world-renowned fire safety developers to ensure every fire extinguisher, smoke detector, and central control console we install is guaranteed to trigger accurately and withstand harsh environmental conditions.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5 shadow-sm">
              <p className="text-xs font-mono text-red-800 uppercase tracking-widest font-bold">Strategic Partnership</p>
              <p className="text-sm text-red-950 font-medium mt-1">
                "Our equipment matches stringent NFPA standards and is approved by the Kenya Bureau of Standards (KEBS) and local county fire departments."
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl border border-gray-100 p-8 shadow-inner space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" /> Safe-Site Guarantee
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="bg-red-100 text-red-600 font-bold p-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                <p className="text-gray-600"><strong className="text-gray-900">KEBS Certified</strong>: Every extinguisher refilled or supplied is marked with compliance stickers.</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-red-100 text-red-600 font-bold p-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                <p className="text-gray-600"><strong className="text-gray-900">Risk Assessment Integrated</strong>: We inspect exit routes, ventilation, and potential hazards before selling any equipment.</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-red-100 text-red-600 font-bold p-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                <p className="text-gray-600"><strong className="text-gray-900">Drills & Evacuations</strong>: We supply evacuation training so your staff handles extinguishers flawlessly under heat.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 p-8 shadow-sm flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-full opacity-30 blur-lg" />
            <div className="bg-red-600 text-white p-3 rounded-xl shrink-0 shadow-md shadow-red-600/10">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">Our Corporate Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To provide highly affordable, dependable, and professional fire safety solutions across all public, private, and industrial buildings in Africa, while ensuring maximum safety, regulatory compliance, and total customer satisfaction.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-gray-100 p-8 shadow-sm flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-full opacity-50 blur-lg" />
            <div className="bg-neutral-900 text-white p-3 rounded-xl shrink-0 shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">Our Strategic Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become the premier and leading fire protection, installation, and safety maintenance enterprise in Africa by delivering world-class safety systems, exceptional support services, and state-of-the-art technological warning tools.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-red-600 font-semibold text-xs font-mono uppercase tracking-widest">Principles That Guide Us</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Core Corporate Values</h3>
            <p className="text-xs sm:text-sm text-gray-500">Every interaction and installation is guided by these seven pillars of safety excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-neutral-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 hover:bg-white transition-all shadow-sm">
                <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  <BadgeCheck className="w-3.5 h-3.5" /> Pillar {i+1}
                </span>
                <h4 className="font-bold text-gray-900 text-base mb-1.5">{v.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
