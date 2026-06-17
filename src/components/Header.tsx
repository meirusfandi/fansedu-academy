import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck, GraduationCap } from "lucide-react";
import { BRAND_NAME } from "../data";

interface HeaderProps {
  onOpenLeadModal: () => void;
}

export default function Header({ onOpenLeadModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 text-left cursor-pointer focus:outline-none group"
            id="logo-button"
          >
            <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20 group-hover:bg-blue-700 transition-all duration-300 transform group-hover:scale-105">
              <GraduationCap className="h-6 w-6" id="brand-logo-icon" />
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight block">
                Fansedu<span className="text-blue-600"> Academy</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block font-medium">
                Digital Group Ecosystem
              </span>
            </div>
          </button>

          {/* Nav Links Desktop */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            <button
              onClick={() => scrollToSection("about-fansedu")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("our-ecosystem")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Ekosistem
            </button>
            <button
              onClick={() => scrollToSection("why-fansedu")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("learning-pathway")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Pathway Belajar
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="font-sans text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1.5 rounded-full border border-emerald-100 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>Official Hub</span>
            </div>
            <button
              onClick={onOpenLeadModal}
              className="bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center space-x-1.5 cursor-pointer"
              id="cta-register-header"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenLeadModal}
              className="bg-blue-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg"
            >
              Daftar
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[65px] bg-white z-40 transition-all duration-300 md:hidden border-t border-slate-100 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-4"
        }`}
      >
        <div className="p-6 space-y-5 flex flex-col justify-between h-[calc(100vh-65px)] overflow-y-auto">
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("about-fansedu")}
              className="flex w-full text-left font-display font-medium text-lg text-slate-800 py-2.5 hover:text-blue-600 border-b border-slate-50"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("our-ecosystem")}
              className="flex w-full text-left font-display font-medium text-lg text-slate-800 py-2.5 hover:text-blue-600 border-b border-slate-50"
            >
              Ekosistem Pendidikan
            </button>
            <button
              onClick={() => scrollToSection("why-fansedu")}
              className="flex w-full text-left font-display font-medium text-lg text-slate-800 py-2.5 hover:text-blue-600 border-b border-slate-50"
            >
              Keunggulan Kami
            </button>
            <button
              onClick={() => scrollToSection("learning-pathway")}
              className="flex w-full text-left font-display font-medium text-lg text-slate-800 py-2.5 hover:text-blue-600 border-b border-slate-50"
            >
              Pathway Kurikulum
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="flex w-full text-left font-display font-medium text-lg text-slate-800 py-2.5 hover:text-blue-600 border-b border-slate-50"
            >
              Tanya Jawab (FAQ)
            </button>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4 pb-12">
            <div className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 text-xs px-3 py-2 rounded-lg border border-emerald-100 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Sertifikasi & Layanan Resmi Fans Digital Group</span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenLeadModal();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold py-3.5 rounded-xl shadow-md text-center block"
            >
              Konsultasi WhatsApp Sekarang
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
