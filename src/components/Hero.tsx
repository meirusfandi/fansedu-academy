import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Sparkles, Trophy, Code2, BrainCircuit, GraduationCap } from "lucide-react";
import { TAGLINE, ALT_TAGLINE } from "../data";

interface HeroProps {
  onOpenLeadModal: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onOpenLeadModal, onExploreClick }: HeroProps) {
  return (
    <section 
      id="hero-banner" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-tr from-white via-blue-50/20 to-indigo-50/10"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
              <span className="inline-flex items-center space-x-1 text-slate-500 text-[11px] font-medium px-1">
                <span>⚡ Fansedu Academy Ecosystem</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Membangun Generasi <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Pembelajar & Kreator
              </span>{" "}
              Masa Depan Indonesia
            </h1>

            {/* Subheadline & Alternative Tagline */}
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Fansedu Academy adalah ekosistem pendidikan modern yang membantu siswa mengembangkan kemampuan akademik, teknologi, kreativitas, dan problem solving melalui berbagai program unggulan.
            </p>

            <blockquote className="border-l-4 border-amber-400 pl-4 py-1.5 bg-amber-50/50 rounded-r-xl max-w-2xl">
              <p className="text-sm font-semibold text-slate-800 italic">
                &ldquo;{ALT_TAGLINE}&rdquo;
              </p>
            </blockquote>

            {/* Calls To Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer group"
                id="hero-primary-cta"
              >
                <span>Jelajahi Program</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenLeadModal}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-sans font-semibold px-7 py-4 rounded-xl shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-secondary-cta"
              >
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span>Konsultasi Bebas</span>
              </button>
            </div>



          </div>

          {/* Right Visual Element (Technology + Achievement Ecosystem Dashboard) */}
          <div className="lg:col-span-5 relative" id="hero-illustration-pane">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto max-w-[440px] lg:max-w-none"
            >
              
              {/* Main Premium Illustration Card Wrapper */}
              <div className="relative bg-white rounded-3xl p-5 shadow-2xl border border-slate-100/80 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                
                {/* Header of Visual Mockup representing digital applet */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-red-400 block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
                      <span className="w-3 h-3 rounded-full bg-green-400 block" />
                    </div>
                    <span className="text-slate-400 font-mono text-[10px]">fansedu_workspace.py</span>
                  </div>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-semibold">Live Preview</span>
                </div>

                {/* Simulated Educational Interactive Visualizer */}
                <div className="bg-slate-950 text-slate-200 p-4 rounded-2xl font-mono text-xs space-y-3 leading-relaxed shadow-inner">
                  <div className="text-slate-400"># Memulai Ekosistem Pendidikan Abad-21</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400">&gt;&gt;&gt;</span>
                    <span className="text-blue-400">import</span>
                    <span>fansedu_academy as academy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400">&gt;&gt;&gt;</span>
                    <span>student = academy.Siswa(minat=</span>
                    <span className="text-amber-300">&quot;Coding &amp; Olimpiade&quot;</span>
                    <span>)</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 space-y-1">
                    <div className="text-cyan-400 font-bold flex items-center space-x-1">
                      <Trophy className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>[PRESTASI NYATA FOUNDATION]</span>
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      - Computational Thinking: <span className="text-emerald-400">COMPLETED</span> <br />
                      - Logical Reasoning Math: <span className="text-emerald-400">COMPLETED</span> <br />
                      - Game Development: <span className="text-emerald-400">ACTIVE</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 text-indigo-300">
                    <span className="animate-pulse">●</span>
                    <span className="text-[10px]">Compiling path: USIA_8_TO_18</span>
                  </div>
                </div>

                {/* Dynamic UI Cards Layering */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  
                  {/* Miniature Box 1: Olimpiade */}
                  <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 flex items-center space-x-2.5">
                    <div className="p-1.5 bg-blue-600 rounded-lg text-white">
                      <BrainCircuit className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-800">Olimpiade</span>
                      <span className="block text-[10px] text-slate-500">Logika &amp; Matematika</span>
                    </div>
                  </div>

                  {/* Miniature Box 2: Code */}
                  <div className="bg-indigo-50/60 p-3 rounded-xl border border-indigo-100 flex items-center space-x-2.5">
                    <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-800">Coding Camp</span>
                      <span className="block text-[10px] text-slate-500">Scratch &amp; Python</span>
                    </div>
                  </div>

                </div>

                {/* Small illustration footer */}
                <div className="mt-4 flex items-center justify-between bg-slate-50 p-2.5 rounded-xl text-[10px] text-slate-500 border border-slate-100">
                  <span className="flex items-center space-x-1">
                    <GraduationCap className="h-3 w-3 text-blue-500" />
                    <span className="font-medium">Curriculum: Google Ed + Khan Academy Insp.</span>
                  </span>
                  <span className="font-mono text-emerald-600 font-bold">✓ Verified</span>
                </div>

              </div>

              {/* Decorative Widgets floating around */}
              <div className="absolute -top-6 -right-6 bg-amber-400 text-slate-900 border-4 border-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-lg transform rotate-6 animate-pulse-subtle flex items-center space-x-1 z-20">
                <Trophy className="h-4 w-4" />
                <span>Ecosystem Center</span>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3.5 border border-slate-800 z-20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <span className="block font-bold text-[11px]">Siswa Daftar Hari Ini</span>
                  <span className="block text-[10px] text-slate-400 text-left">4 Siswa Terjadwal Trial</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
