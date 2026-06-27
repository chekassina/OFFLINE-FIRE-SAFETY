import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, ShieldAlert, CheckCircle2, Flame, Bell, ShieldCheck, Zap } from 'lucide-react';

export default function FireSafetyVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0); // 0: Idle, 1: Outbreak, 2: Detected, 3: Supression, 4: Contained
  const [isMuted, setIsMuted] = useState(false);
  const [speed, setSpeed] = useState(1);

  // Auto-running simulation when isPlaying is true
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + (0.8 * speed);
        if (nextProgress >= 100) {
          // Restart simulation
          setActiveStep(0);
          return 0;
        }
        
        // Map progress percentage to simulation steps
        if (nextProgress < 15) {
          setActiveStep(0); // Normal Safe Room
        } else if (nextProgress >= 15 && nextProgress < 40) {
          setActiveStep(1); // Smoke/Fire Outbreak
        } else if (nextProgress >= 40 && nextProgress < 65) {
          setActiveStep(2); // Smoke Alarm Triggered & Signals Sent
        } else if (nextProgress >= 65 && nextProgress < 85) {
          setActiveStep(3); // Water/Powder Sprayer Suppressing Fire
        } else {
          setActiveStep(4); // Fire Extinguished, Safe & Secure
        }

        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setProgress(0);
    setActiveStep(0);
    setIsPlaying(true);
  };

  const getStepLabel = () => {
    switch (activeStep) {
      case 0: return "SECURE ROOM: 24/7 Photoelectric Vigilance Active";
      case 1: return "FIRE OUTBREAK: Smoke & Heat Rising in Zone 4";
      case 2: return "DETECTION TRIGGERED: Alarm Sounding, Signal Sent to Panel";
      case 3: return "ACTIVE SUPPRESSION: Discharging ABC Powder Sprinklers";
      case 4: return "THREAT CONTAINED: Room Secure, KEBS Compliance Met";
      default: return "";
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 p-6 rounded-none space-y-6 max-w-4xl mx-auto">
      {/* Title & Metadata */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="text-[9px] font-mono font-bold text-red-700 uppercase tracking-widest block">Instructional Motion Graphic</span>
          <h3 className="text-lg font-display font-black uppercase text-slate-900 tracking-tight">Active Safety Suppression Video</h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
          <span className="w-2 h-2 rounded-full bg-red-700 animate-ping"></span>
          <span>ASSET ID: ANIM_FIRE_SUPPRESSION_C4</span>
        </div>
      </div>

      {/* Screen Frame */}
      <div className="relative bg-slate-950 aspect-video w-full border border-slate-800 overflow-hidden flex flex-col justify-between p-4 group select-none">
        
        {/* Subtle grid line overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />

        {/* Video HUD Top overlay */}
        <div className="flex justify-between items-center z-20 pointer-events-none">
          <div className="bg-slate-900/90 text-[10px] font-mono text-white px-2 py-1 flex items-center gap-1.5 border border-slate-800">
            <span className={`w-2 h-2 bg-${activeStep > 0 ? 'red-600' : 'emerald-600'} rounded-full`}></span>
            <span>SYSTEM: {activeStep === 0 ? "SECURE" : activeStep < 4 ? "ALERT" : "RESOLVED"}</span>
          </div>
          <div className="bg-slate-900/90 text-[9px] font-mono text-slate-300 px-2 py-1 border border-slate-800">
            1080P COMPLIANT • REF: SEC_SYS_4
          </div>
        </div>

        {/* Screen Content Graphics area */}
        <div className="flex-grow flex flex-col items-center justify-center relative py-6">
          
          {/* Step 0: Idle Safe Room */}
          {activeStep === 0 && (
            <div className="flex flex-col items-center space-y-4 animate-fade-in text-center">
              {/* Smoke detector ceiling unit */}
              <div className="relative w-28 h-10 bg-slate-100 rounded-b-xl border-x border-b border-slate-300 flex justify-center items-end pb-1.5 shadow-md">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-md shadow-emerald-500/50" />
                <span className="absolute -top-4 text-[7px] text-slate-400 font-mono">CEILING MOUNTED DETECTOR</span>
              </div>
              <div className="text-center space-y-1 pt-4">
                <p className="text-xs font-bold text-slate-300 font-mono tracking-wider">ALL ZONES INTEGRATED</p>
                <p className="text-[10px] text-slate-500 max-w-xs font-mono">Photoelectric laser beam is currently secure and clear of blockages.</p>
              </div>
            </div>
          )}

          {/* Step 1: Outbreak */}
          {activeStep === 1 && (
            <div className="flex flex-col items-center space-y-4 text-center w-full">
              {/* Flame simulation */}
              <div className="relative flex flex-col items-center">
                <Flame className="w-20 h-20 text-orange-500 animate-bounce" />
                {/* Smoke particles using simple CSS */}
                <div className="absolute -top-6 w-3 h-3 bg-slate-600/40 rounded-full animate-ping" />
                <div className="absolute -top-10 left-4 w-5 h-5 bg-slate-500/20 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                <div className="absolute -top-12 -left-3 w-4 h-4 bg-slate-500/30 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-red-500 font-mono flex items-center gap-1.5 justify-center tracking-widest">
                  <ShieldAlert className="w-4 h-4 animate-pulse" /> SMOKE / HEAT DETECTED
                </p>
                <p className="text-[10px] text-slate-400 font-mono">Wastebasket outbreak triggering high temperature sensors.</p>
              </div>
            </div>
          )}

          {/* Step 2: Detected & Alerting */}
          {activeStep === 2 && (
            <div className="flex flex-col items-center space-y-4 text-center w-full">
              {/* Alarm system blasting */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-red-600/20 animate-ping border border-red-500" />
                <div className="w-14 h-14 bg-red-700 text-white rounded-full flex items-center justify-center animate-pulse border-2 border-white">
                  <Bell className="w-7 h-7" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-red-500 font-mono tracking-widest uppercase">
                  85dB SOUNDER ACTIVATED
                </p>
                <p className="text-[10px] text-slate-400 font-mono">Zone alert dispatched. Pre-set signals transmitted to Offline Fire panel.</p>
              </div>
            </div>
          )}

          {/* Step 3: Suppression */}
          {activeStep === 3 && (
            <div className="flex flex-col items-center space-y-4 text-center w-full relative">
              {/* Automated Sprinklers in action */}
              <div className="relative w-full flex flex-col items-center justify-center">
                {/* Sprinkler ceiling head */}
                <div className="w-16 h-8 bg-slate-200 rounded-b-md border border-slate-300 flex flex-col items-center justify-end pb-1 shadow-inner">
                  <div className="w-3 h-2 bg-red-700 rounded-sm animate-pulse" />
                </div>
                {/* Dynamic spray particles using simple CSS lines */}
                <div className="h-16 w-32 border-x-2 border-dashed border-sky-300/40 mt-1 animate-pulse flex flex-wrap justify-around">
                  <div className="w-0.5 h-10 bg-sky-300/50 animate-bounce" />
                  <div className="w-0.5 h-10 bg-sky-300/50 animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-0.5 h-10 bg-sky-300/50 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-0.5 h-10 bg-sky-300/50 animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
                {/* Smothered Fire */}
                <Flame className="w-10 h-10 text-orange-400/40 mt-1" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-sky-400 font-mono tracking-widest uppercase">
                  ACTIVE CHEMICAL/WATER DISCHARGE
                </p>
                <p className="text-[10px] text-slate-400 font-mono">Smothering flame sources instantly. Pressure limits normalized.</p>
              </div>
            </div>
          )}

          {/* Step 4: Contained */}
          {activeStep === 4 && (
            <div className="flex flex-col items-center space-y-4 text-center w-full animate-fade-in">
              {/* Beautiful green shield check */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-emerald-600/20 border border-emerald-500 animate-pulse" />
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center border-2 border-white shadow-xl">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-emerald-500 font-mono tracking-widest uppercase">
                  THREAT SUCCESSFULLY ELIMINATED
                </p>
                <p className="text-[10px] text-slate-400 font-mono">Building safety secured. Extinguisher servicing record updated.</p>
              </div>
            </div>
          )}

        </div>

        {/* Video HUD Bottom Overlay */}
        <div className="space-y-2 z-20">
          {/* Progress Slider (Interactive representation) */}
          <div className="w-full bg-slate-800 h-1 relative overflow-hidden">
            <div 
              className="bg-red-700 h-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Controller Bar */}
          <div className="flex justify-between items-center text-white font-mono text-[10px] pt-1">
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePlayPause}
                className="hover:text-red-500 transition-colors p-1 cursor-pointer focus:outline-none"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white text-white" /> : <Play className="w-4 h-4 fill-white text-white" />}
              </button>
              <button 
                onClick={handleRestart}
                className="hover:text-red-500 transition-colors p-1 cursor-pointer focus:outline-none"
                aria-label="Restart Video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <div className="text-slate-400">
                {Math.floor((progress / 100) * 12).toString().padStart(2, '0')}:{(Math.floor((progress % 25) * 2.4)).toString().padStart(2, '0')} / 00:12
              </div>
            </div>

            {/* Live simulation label text */}
            <div className="hidden md:block text-slate-300 font-bold uppercase tracking-wider text-[8px] max-w-sm truncate">
              {getStepLabel()}
            </div>

            {/* Mute and Speed Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="hover:text-red-500 transition-colors p-1 cursor-pointer"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isMuted ? 'text-slate-500 line-through' : 'text-white'}`} />
              </button>
              <button 
                onClick={() => setSpeed(prev => prev === 1 ? 2 : prev === 2 ? 0.5 : 1)}
                className="bg-slate-900 border border-slate-800 hover:border-red-700 px-2 py-0.5 font-bold text-[8px] transition-colors"
              >
                SPEED: {speed}X
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Narrative Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {[
          { icon: ShieldCheck, title: "1. Monitor", desc: "Sensors monitor loop status continuously" },
          { icon: Flame, title: "2. Outbreak", desc: "Smoke particle density crosses safety thresholds" },
          { icon: Bell, title: "3. Alarm", desc: "Siren alerts local building occupants" },
          { icon: Zap, title: "4. Suppress", desc: "Overhead discharge or manual extinguishers deploy" },
          { icon: CheckCircle2, title: "5. Secure", desc: "Flame smothered, status restored to safe" }
        ].map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <div 
              key={idx}
              className={`p-3 border transition-colors ${
                isActive 
                  ? 'bg-red-50 border-red-700 text-red-900' 
                  : 'bg-white border-slate-200 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-red-700 animate-pulse' : 'text-slate-400'}`} />
                <span className="font-bold text-[10px] uppercase tracking-wider">{step.title}</span>
              </div>
              <p className="text-[9px] leading-snug mt-1">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
