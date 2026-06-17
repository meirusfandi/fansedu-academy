import { ArrowRight, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenLeadModal: () => void;
  onExploreClick: () => void;
}

export default function FinalCTA({ onOpenLeadModal, onExploreClick }: FinalCTAProps) {
  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Visual backgrounds */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8" id="lead-form-anchor">
        
        <div className="max-w-2xl mx-auto space-y-4">
          
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Temukan Program Terbaik <br className="hidden sm:inline" />
            untuk Masa Depan Anak Anda
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Berikan pondasi logika matematika dan kemahiran digital terbaik demi mengimbangi arus teknologi dunia modern. Ambil jatah Kelas Free Trial terbatas Anda sekarang!
          </p>
        </div>

        {/* Double high contrast actions row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
          
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-900 font-sans font-extrabold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 cursor-pointer"
            id="final-cta-explore-btn"
          >
            <span>Explore Programs</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </button>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Fansedu%20Academy%2C%20saya%20ingin%20berkonsultasi%20mengenai%20jadwal%20dan%20biaya%20program%20belajar%20anak..."
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 cursor-pointer"
            id="final-cta-whatsapp-btn"
          >
            <MessageSquare className="h-4.5 w-4.5 text-amber-300 fill-amber-300" />
            <span>Contact WhatsApp</span>
          </a>

        </div>

        {/* Brand guarantee disclaimer */}
        <div className="pt-6 text-[10px] sm:text-xs font-mono text-blue-200 flex items-center justify-center space-x-1.5 opacity-80">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Layanan Resmi Di bawah Fans Digital Group Indonesia</span>
        </div>

      </div>
    </section>
  );
}
