import { GraduationCap, Cpu, Palette, Search, Trophy, Briefcase } from "lucide-react";
import { WHY_FEATURES } from "../data";

export default function WhyFansedu() {
  
  // Render corresponding lucide icon dynamically
  const getIcon = (iconName: string, color: string) => {
    const iconClass = "h-6 w-6";
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className={`${iconClass} text-blue-600`} />;
      case "Cpu":
        return <Cpu className={`${iconClass} text-indigo-600`} />;
      case "Palette":
        return <Palette className={`${iconClass} text-amber-500`} />;
      case "Search":
        return <Search className={`${iconClass} text-emerald-600`} />;
      case "Trophy":
        return <Trophy className={`${iconClass} text-violet-600`} />;
      default:
        return <Briefcase className={`${iconClass} text-rose-600`} />;
    }
  };

  const getAccentBg = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-100/50";
      case "indigo":
        return "bg-indigo-50 border-indigo-100/50";
      case "amber":
        return "bg-amber-50 border-amber-100/50";
      case "emerald":
        return "bg-emerald-50 border-emerald-100/50";
      case "violet":
        return "bg-violet-50 border-violet-100/50";
      default:
        return "bg-rose-50 border-rose-100/50";
    }
  };

  return (
    <section id="why-fansedu" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Mengapa Memilih Fansedu Academy?
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Kami mengintegrasikan kualitas akademik yang kuat dengan akselerasi digital agar siswa cerdas secara analitis sekaligus handal membuat solusi nyata.
          </p>
        </div>

        {/* 6 Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 rounded-3xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`why-feature-card-${feature.id}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${getAccentBg(feature.accentColor)} group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(feature.iconName, feature.accentColor)}
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
