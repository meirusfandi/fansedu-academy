import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import WhyFansedu from "./components/WhyFansedu";
import Pathway from "./components/Pathway";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import { LeadFormData } from "./types";
import { CheckCircle2, X } from "lucide-react";

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  const handleSuccessLeadSubmit = (data: LeadFormData) => {
    // Show premium floating notification toast
    setSuccessToast(
      `Selamat! Akun bimbingan Free Trial untuk ${data.fullName} berhasil diproses.`
    );
    
    // Auto clear toast after 8 seconds
    setTimeout(() => {
      setSuccessToast(null);
    }, 8000);
  };

  const handleScrollToEcosystem = () => {
    const el = document.getElementById("our-ecosystem");
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-900 bg-white">
      {/* Premium Sticky Navigation Column */}
      <Header onOpenLeadModal={handleOpenLeadModal} />

      {/* Main Sections Stack */}
      <main className="relative">
        {/* Section 1: Hero Segment */}
        <Hero 
          onOpenLeadModal={handleOpenLeadModal} 
          onExploreClick={handleScrollToEcosystem} 
        />

        {/* Section 2: About Fansedu */}
        <About />

        {/* Section 3: Our Ecosystem Cards */}
        <Ecosystem />

        {/* Section 4: Why Fansedu 6 Grid Pillars */}
        <WhyFansedu />

        {/* Section 5: Learning Pathway Interactive Roadmap */}
        <Pathway />

        {/* Section 6: Dynamic statistics with editable controllers */}
        <Statistics />

        {/* Section 7: Future Testimony layout placeholder + builder draft */}
        <Testimonials />

        {/* Section 8: Partner school/community placeholders */}
        <Partners onOpenLeadModal={handleOpenLeadModal} />

        {/* Section 9: Collapsible Indonesian FAQ stack */}
        <FAQ />

        {/* Section 10: Final high-trust CTAs */}
        <FinalCTA 
          onOpenLeadModal={handleOpenLeadModal} 
          onExploreClick={handleScrollToEcosystem} 
        />
      </main>

      {/* Footer detailing legal copyright & resource indexes */}
      <Footer />

      {/* Fast lead registration modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        onSuccessSubmit={handleSuccessLeadSubmit}
      />

      {/* Floating Success Toast Overlay */}
      {successToast && (
        <div 
          className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-800 flex items-start gap-3.5 animate-bounce-subtle"
          id="success-toast-alert"
        >
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0 mt-0.5">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          
          <div className="flex-1 space-y-1">
            <span className="block font-display font-bold text-sm tracking-tight text-white hover:text-emerald-400">
              Registrasi Berhasil
            </span>
            <p className="text-xs text-slate-350 font-sans leading-relaxed text-slate-400">
              {successToast}
            </p>
          </div>

          <button
            onClick={() => setSuccessToast(null)}
            className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white transition-colors"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
      )}
    </div>
  );
}
