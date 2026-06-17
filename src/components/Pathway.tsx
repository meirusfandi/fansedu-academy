import { useState } from "react";
import { ArrowDown, Code2, BrainCircuit, Globe, Laptop2, Sparkles } from "lucide-react";
import { PATHWAY_ROADMAP } from "../data";

export default function Pathway() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper icons to represent each roadmap step beautifully
  const getStepIcon = (index: number) => {
    const cls = "h-5 w-5";
    switch (index) {
      case 0:
        return <Laptop2 className={cls} />;
      case 1:
        return <Code2 className={cls} />;
      case 2:
        return <Globe className={cls} />;
      case 3:
        return <BrainCircuit className={cls} />;
      default:
        return <Sparkles className={cls} />;
    }
  };

  return (
    <section id="learning-pathway" className="py-20 bg-slate-50/20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Learning Pathway Fansedu Academy
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Peta jalan kurikulum terpadu dari tingkat dasar hingga mahir. Klik pada kategori umur di bawah untuk melihat detail target kompetensi dan keterampilan digital.
          </p>
        </div>

        {/* Interactive Tab Chooser */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {PATHWAY_ROADMAP.map((step, index) => {
            const isSelected = activeIndex === index;
            return (
              <button
                key={step.age}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-3 rounded-2xl font-display text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer flex items-center space-x-2 border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10 -translate-y-0.5"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
                id={`pathway-tab-${index}`}
              >
                <span className={`p-1 rounded-lg ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {getStepIcon(index)}
                </span>
                <span>{step.age}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content panel display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Descriptive Left Area */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className={`px-3.5 py-1 text-xs font-mono font-bold rounded-full border ${PATHWAY_ROADMAP[activeIndex].badgeColor}`}>
                  {PATHWAY_ROADMAP[activeIndex].age}
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-400">Fansedu Milestone</span>
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950">
                {PATHWAY_ROADMAP[activeIndex].title}
              </h3>

              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                {PATHWAY_ROADMAP[activeIndex].description}
              </p>

              {/* Arrow transition tracker */}
              {activeIndex < PATHWAY_ROADMAP.length - 1 && (
                <div className="pt-2 flex items-center space-x-2 text-slate-400 text-xs">
                  <span className="font-mono">Fase Selanjutnya:</span>
                  <button 
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    className="font-bold text-blue-600 hover:underline flex items-center space-x-1"
                  >
                    <span>{PATHWAY_ROADMAP[activeIndex + 1].title}</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Checklist Right Area */}
            <div className="md:col-span-5 bg-slate-50/60 p-6 rounded-2xl border border-slate-100 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Target Kompetensi Utama:
              </span>

              <div className="space-y-3">
                {PATHWAY_ROADMAP[activeIndex].skills.map((skill, si) => (
                  <div key={si} className="flex items-start space-x-2.5">
                    <span className="mt-1 bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 font-sans leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200/50 mt-4 text-[10px] text-slate-400 font-mono flex justify-between">
                <span>Rasio Lulus Evaluasi</span>
                <span className="text-emerald-600 font-bold">Standardized</span>
              </div>
            </div>

          </div>
        </div>

        {/* Small Horizontal Pipeline Showcase */}
        <div className="hidden lg:flex items-center justify-between max-w-3xl mx-auto mt-16 text-xs text-slate-400 font-medium font-mono relative">
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 z-0" />
          
          {PATHWAY_ROADMAP.map((step, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative z-10 flex flex-col items-center space-y-1.5 focus:outline-none cursor-pointer group`}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? "bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-500/20" 
                    : "bg-white border-slate-200 text-slate-500 group-hover:border-slate-300"
                }`}>
                  <span className="font-sans font-bold text-xs">{idx + 1}</span>
                </div>
                <span className={`text-[10px] ${isActive ? "text-blue-600 font-bold" : "text-slate-400"}`}>{step.age}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
