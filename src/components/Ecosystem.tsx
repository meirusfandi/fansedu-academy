import { Award, Code2, Sparkles, Layers, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ECOSYSTEM_PROGRAMS } from "../data";
import { EcosystemCard } from "../types";

export default function Ecosystem() {
  
  // Render corresponding lucide icon dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="h-6 w-6 text-blue-600" />;
      case "Code2":
        return <Code2 className="h-6 w-6 text-indigo-600" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-amber-500" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-emerald-600" />;
      default:
        return <Compass className="h-6 w-6 text-purple-600" />;
    }
  };

  const getCardStyle = (id: string) => {
    switch (id) {
      case "olympiad":
        return "border-blue-100/80 hover:border-blue-300 hover:shadow-blue-500/5 bg-gradient-to-b from-white to-blue-50/10";
      case "tech":
        return "border-indigo-100/80 hover:border-indigo-300 hover:shadow-indigo-500/5 bg-gradient-to-b from-white to-indigo-50/10";
      case "camp":
        return "border-amber-100/80 hover:border-amber-300 hover:shadow-amber-500/5 bg-gradient-to-b from-white to-amber-50/10";
      case "exam":
        return "border-emerald-100/80 hover:border-emerald-300 hover:shadow-emerald-500/5 bg-gradient-to-b from-white to-emerald-50/10";
      default:
        return "border-slate-100 hover:border-slate-300 hover:shadow-slate-500/5 bg-slate-50/50";
    }
  };

  return (
    <section id="our-ecosystem" className="py-20 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            Ekosistem Fansedu
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Pusat Program &amp; Layanan Pendidikan Spesialis
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih dan jelajahi platform pendidikan di bawah naungan Fansedu Academy yang didesain secara spesifik sesuai minat, bakat, serta target prestasi akademis putra-putri Anda.
          </p>
        </div>

        {/* Ecosystem Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ECOSYSTEM_PROGRAMS.map((program: EcosystemCard) => {
            const isSoon = program.comingSoon;
            const isExternal = program.url.startsWith("http");

            return (
              <div
                key={program.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 border-2 transition-all duration-300 group ${getCardStyle(
                  program.id
                )} ${isSoon ? "opacity-90 hover:opacity-100" : "shadow-sm hover:shadow-xl"}`}
                id={`ecosystem-card-${program.id}`}
              >
                {/* Coming Soon Badge */}
                {isSoon && (
                  <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full border border-purple-200">
                    Coming Soon
                  </span>
                )}

                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                    {getIcon(program.iconName)}
                  </div>

                  {/* Program Title */}
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {program.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-600 mt-3 leading-relaxed min-h-[3.5rem]">
                    {program.description}
                  </p>

                  <div className="w-full h-[1px] bg-slate-100 my-5" />

                  {/* Bullet Highlights */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Fitur Utama:
                    </span>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="text-xs font-medium font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-8 pt-4">
                  {isSoon ? (
                    <a
                      href="#lead-form-anchor"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("lead-form-anchor");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-center font-semibold text-xs py-3 px-4 rounded-xl block transition-colors border border-slate-200"
                    >
                      {program.ctaLabel}
                    </a>
                  ) : (
                    <a
                      href={program.url}
                      target={isExternal ? "_blank" : undefined}
                      referrerPolicy="no-referrer"
                      className="w-full bg-white hover:bg-blue-600 hover:text-white text-blue-600 text-center font-semibold text-xs py-3 px-4 rounded-xl block transition-all duration-300 border border-blue-200 group-hover:border-blue-600 shadow-sm hover:shadow-lg inline-flex items-center justify-center space-x-1.5 focus:outline-none"
                    >
                      <span>{program.ctaLabel}</span>
                      {isExternal && <ArrowUpRight className="h-3.5 w-3.5" />}
                    </a>
                  )}


                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
