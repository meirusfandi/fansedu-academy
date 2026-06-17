import { School, Users, Building2, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface PartnersProps {
  onOpenLeadModal: () => void;
}

export default function Partners({ onOpenLeadModal }: PartnersProps) {
  
  const placeholders = [
    {
      id: "part-school",
      title: "Mitra Sekolah (Schools)",
      subtitle: "Sekolah Dasar s/d Menengah Atas",
      desc: "Integrasikan Fansedu Olympiad Academy atau Exam System untuk meningkatkan keunggulan digital dan peringkat tryout kompetisi eksternal sekolah Anda.",
      icon: <School className="h-6 w-6 text-blue-600" />,
      badge: "Sistem Terpadu"
    },
    {
      id: "part-comm",
      title: "Mitra Komunitas (Communities)",
      subtitle: "Komunitas Belajar Anak &amp; Siswa",
      desc: "Dukungan penuh untuk penyelenggaraan Holiday Coding Camp atau pameran karya digital anak. Tingkatkan kompetensi literasi computing komunitas lokal.",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      badge: "Kreativitas Bersama"
    },
    {
      id: "part-org",
      title: "Mitra Yayasan (Organizations)",
      subtitle: "Lembaga Swadaya &amp; Edukasi",
      desc: "Kolaborasi intensif untuk program tanggung jawab sosial (CSR), sertifikasi kompetensi tech usia muda, serta beasiswa bimbingan bakat.",
      icon: <Building2 className="h-6 w-6 text-emerald-600" />,
      badge: "Dampak Nasional"
    }
  ];

  return (
    <section id="partners-section" className="py-20 bg-slate-50/20 border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Kolaborasi Komunitas &amp; Aliansi Sekolah
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Membangun masa depan pendidikan Indonesia tidak dapat dilakukan sendirian. Kami membuka peluang kemitraan dengan empat pilar institusi untuk menyebarkan inovasi belajar.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 1st, 2nd, 3rd placeholders */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholders.map((p) => (
              <div
                key={p.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:border-slate-200/80 transition-all duration-300"
                id={`partner-placeholder-${p.id}`}
              >
                <div>
                  <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 mb-5 group-hover:scale-105 transition-transform">
                    {p.icon}
                  </div>

                  <span className="bg-slate-100 text-slate-600 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-md">
                    {p.badge}
                  </span>

                  <h3 className="font-display font-bold text-base text-slate-900 mt-3">
                    {p.title}
                  </h3>
                  <span className="block text-[11px] font-medium text-slate-400 font-sans mt-0.5">
                    {p.subtitle}
                  </span>

                  <p className="font-sans text-xs text-slate-500 leading-relaxed mt-3">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Slot Pengajuan</span>
                  <span className="text-emerald-500 font-bold">Terbuka ✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Future Partner & Contact Form Trigger */}
          <div className="lg:col-span-4 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-indigo-500/20 text-indigo-200 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-indigo-500/30">
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
                <span>Pilar ke-4: Future Partners</span>
              </div>

              <h3 className="font-display font-extrabold text-xl leading-snug">
                Ajukan Aliansi Pendidikan Baru?
              </h3>

              <p className="font-sans text-xs text-slate-350 leading-relaxed">
                Apakah Anda Kepala Sekolah, Pengurus Yayasan, atau Pemimpin Komunitas Belajar Regional? Kami menyediakan integrasi modul bimbingan yang adaptif dengan laporan belajar langsung.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1.5 text-left">
                <span className="block text-[10px] font-mono text-indigo-300 font-bold uppercase">
                  Fasilitas Kemitraan:
                </span>
                <span className="block text-xs font-sans text-slate-200 leading-relaxed">
                  • Pembagian komisi lisensi exam <br />
                  • Kunjungan &amp; seminar gratis <br />
                  • Sertifikasi guru pendamping
                </span>
              </div>

              <button
                onClick={onOpenLeadModal}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-xs py-3 px-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer leading-none"
              >
                <span>Mulai Kolaborasi</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
