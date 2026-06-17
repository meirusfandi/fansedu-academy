import { CheckCircle2, Award, Users, MonitorUp, Compass } from "lucide-react";
import { ABOUT_TEXT, ABOUT_HIGHLIGHTS } from "../data";

export default function About() {
  // Mapping highlights with corresponding icons for premium visual enhancement
  const bulletIcons = [
    <MonitorUp className="h-5 w-5 text-blue-600 shrink-0" key="bullet-1" />,
    <Users className="h-5 w-5 text-indigo-600 shrink-0" key="bullet-2" />,
    <Award className="h-5 w-5 text-amber-500 shrink-0" key="bullet-3" />,
    <MonitorUp className="h-5 w-5 text-emerald-600 shrink-0" key="bullet-2-alt" />,
    <Compass className="h-5 w-5 text-purple-600 shrink-0" key="bullet-4" />
  ];

  return (
    <section id="about-fansedu" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Promise Card */}
          <div className="lg:col-span-5 space-y-4" id="about-brand-card">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Users className="w-56 h-56" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <span className="bg-white/20 text-white text-[11px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full inline-block">
                  Brand Promise
                </span>
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
                  Unit Pendidikan Resmi Fans Digital Group
                </h3>
                
                <p className="text-sm text-blue-100 leading-relaxed font-sans">
                  Kami menggabungkan kekuatan teknologi digital mutakhir dengan strategi kurikulum interaktif untuk mendampingi masa tumbuh kembang talenta anak.
                </p>

                <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xl font-bold font-display">1 + 1</span>
                    <span className="block text-[10px] text-blue-200">Math &amp; Programming Core</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold font-display">Small Class</span>
                    <span className="block text-[10px] text-blue-200">Bimbingan Terarah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Description and Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block">
                Tentang Fansedu
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                Mempersiapkan Generasi Berbakat dengan Keterampilan Abad ke-21
              </h2>
            </div>

            {/* Core Description Text */}
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>

            {/* Highlights Grid */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Pilar Pembelajaran Unggulan Kami:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_HIGHLIGHTS.map((highlight, index) => (
                  <div
                    key={`about-highlight-${index}`}
                    className="flex items-start space-x-3 p-3.5 bg-slate-50/60 hover:bg-blue-50/20 border border-slate-100 hover:border-blue-100 rounded-xl transition-all duration-200"
                  >
                    <div className="mt-0.5 shrink-0 bg-white p-1 rounded-md shadow-sm">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-900 font-sans">
                        {highlight}
                      </span>
                      <span className="block text-[11px] text-slate-500 font-mono mt-0.5">
                        {index === 0 && "Berorientasi proyek nyata berbasis hasil"}
                        {index === 1 && "Maksimal 8 anak per kelas virtual interaktif"}
                        {index === 2 && "Dimentori oleh pakar & praktisi bersertifikasi"}
                        {index === 3 && "Memanfaatkan software & platform AI terbaru"}
                        {index === 4 && "Fokus pada kreativitas, logika & problem-solving"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
