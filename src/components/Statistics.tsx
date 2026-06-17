import { useState } from "react";
import { Users, BookOpen, Code2, UserCheck, Sliders, RotateCcw, AlertCircle } from "lucide-react";
import { INITIAL_STATISTICS } from "../data";

export default function Statistics() {
  // Use state to make the values dynamically editable
  const [stats, setStats] = useState(INITIAL_STATISTICS);
  const [showConfig, setShowConfig] = useState(false);

  const handleValueChange = (id: string, newValue: number) => {
    setStats((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  const resetStats = () => {
    setStats(INITIAL_STATISTICS);
  };

  const getIcon = (iconName: string) => {
    const cls = "h-6 w-6 text-white";
    switch (iconName) {
      case "Users":
        return <Users className={cls} />;
      case "BookOpen":
        return <BookOpen className={cls} />;
      case "Code2":
        return <Code2 className={cls} />;
      default:
        return <UserCheck className={cls} />;
    }
  };

  return (
    <section id="statistics-hub" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative ambient elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Statistik Ekosistem Fansedu Academy
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Angka yang menunjukan komitmen kami dalam membimbing generasi muda Indonesia. Anda dapat mengubah nilai angka secara interaktif di panel edukasi bawah!
            </p>
          </div>

          <button
            onClick={() => setShowConfig(!showConfig)}
            className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-slate-700 cursor-pointer transition-colors shrink-0"
            id="statistics-config-toggle"
          >
            <Sliders className="h-4 w-4" />
            <span>{showConfig ? "Tutup Editor" : "Edit Statistik Live"}</span>
          </button>
        </div>

        {/* Big Counter Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden"
              id={`stat-card-${item.id}`}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600" />
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium font-sans text-slate-400">
                  {item.label}
                </span>
                
                {/* Visual Icon Frame with back colors */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center shadow-lg`}>
                  {getIcon(item.iconName)}
                </div>
              </div>

              {/* Editable-responsive state values */}
              <div className="mt-4 flex items-baseline space-x-1">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  {item.value.toLocaleString("id-ID")}
                </span>
                <span className="text-lg font-bold text-amber-400">{item.suffix}</span>
              </div>

              <div className="mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Terverifikasi Aktif</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Simulator Control Panel */}
        {showConfig && (
          <div className="mt-12 bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700/80 animate-pulse-subtle">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-sm text-white">
                    Metrics Simulator Console
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Modifikasi statistik di bawah untuk mensimulasikan persentase pertumbuhan Fansedu Academy.
                  </p>
                </div>
              </div>

              <button
                onClick={resetStats}
                className="bg-slate-700 hover:bg-slate-600 text-white font-mono text-xs px-3.5 py-2 rounded-lg border border-slate-600 flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto"
                id="reset-stats-btn"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Nilai Awal</span>
              </button>
            </div>

            {/* Individual slider controllers */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((item) => (
                <div key={`input-${item.id}`} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-sans font-semibold text-slate-300">
                      {item.label}
                    </span>
                    <span className="font-mono text-amber-400 font-bold">
                      {item.value.toLocaleString("id-ID")} {item.suffix}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min={item.id === "programs" ? 1 : 100}
                      max={
                        item.id === "students"
                          ? 10000
                          : item.id === "programs"
                          ? 100
                          : item.id === "projects"
                          ? 20000
                          : 500
                      }
                      value={item.value}
                      onChange={(e) => handleValueChange(item.id, parseInt(e.target.value) || 0)}
                      className="w-full accent-blue-500 bg-slate-700 rounded-lg appearance-none h-1.5 cursor-pointer"
                    />
                    <input
                      type="number"
                      value={item.value}
                      onChange={(e) => handleValueChange(item.id, parseInt(e.target.value) || 0)}
                      className="w-20 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono py-1 px-2 text-center text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
