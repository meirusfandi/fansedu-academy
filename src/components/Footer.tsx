import { GraduationCap, Instagram, Youtube, Globe, ArrowUpRight, ShieldCheck, ExternalLink } from "lucide-react";
import { BRAND_NAME, ABOUT_TEXT } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand Presentation Column (5 rows) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-blue-600 rounded-xl text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight block">
                  Fansedu<span className="text-blue-500"> Academy</span>
                </span>
                <span className="text-[10px] font-mono tracking-wider text-slate-550 text-slate-500 uppercase block">
                  Digital Group Ecosystem
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              {ABOUT_TEXT}
            </p>

            {/* Official seal badges */}
            <div className="flex items-center space-x-3 text-xs bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
              <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
              <div>
                <span className="block font-bold text-white text-[11px] uppercase font-display">Fans Digital Group</span>
                <span className="block text-[10px] text-slate-500 font-mono">Pendidikan &amp; Teknologi Resmi Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 rows) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white pb-2.5 border-b border-slate-900">
              Ekosistem Terintegrasi
            </h4>
            
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <a
                  href="https://olympiad.fansedu.web.id"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>Olympiad Academy</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://tech.fansedu.web.id"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>Tech Academy</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://camp.fansedu.web.id"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>Holiday Coding Camp</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://exam.fansedu.web.id"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="hover:text-blue-400 transition-colors flex items-center justify-between"
                >
                  <span>Exam System Platform</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels Column (4 rows) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white pb-2.5 border-b border-slate-900">
              Saluran Informasi Resmi
            </h4>

            <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-slate-400">
              {/* Instagram link */}
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-slate-900 text-pink-500 border border-slate-800 rounded-xl">
                  <Instagram className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-550 text-slate-500 font-bold">Instagram:</span>
                  <a
                    href="https://instagram.com/fansedu.official"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="hover:text-white font-semibold transition-colors"
                  >
                    @fansedu.official
                  </a>
                </div>
              </li>

              {/* TikTok link */}
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-slate-900 text-cyan-400 border border-slate-800 rounded-xl">
                  <span className="text-xs font-mono font-black font-sans leading-none">🎵</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-550 text-slate-500 font-bold">TikTok:</span>
                  <a
                    href="https://tiktok.com/@fansedu.official"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="hover:text-white font-semibold transition-colors"
                  >
                    @fansedu.official
                  </a>
                </div>
              </li>

              {/* YouTube link */}
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-slate-900 text-red-500 border border-slate-800 rounded-xl">
                  <Youtube className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-550 text-slate-500 font-bold">YouTube:</span>
                  <a
                    href="https://youtube.com/@fansedu.official"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="hover:text-white font-semibold transition-colors"
                  >
                    Fansedu Academy Official
                  </a>
                </div>
              </li>

              {/* Central domain link */}
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-slate-900 text-blue-500 border border-slate-800 rounded-xl">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-550 text-slate-500 font-bold">Website Resmi:</span>
                  <a
                    href="https://fansedu.web.id"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="hover:text-white font-semibold transition-colors flex items-center space-x-1"
                  >
                    <span>fansedu.web.id</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider separator */}
        <div className="w-full h-px bg-slate-900 my-10" />

        {/* Legal Disclaimer Ticker & Copyright */}
        <div className="flex flex-col md:flex-row items-center md:justify-between text-xs text-slate-500 gap-4 font-mono font-medium">
          <div className="text-center md:text-left leading-relaxed max-w-xl font-sans text-[11px] text-slate-500">
            &bull; Fansedu Academy adalah merek dagang terdaftar milik Fans Digital Group (PT/CV terkait sesuai regulasi hukum Republik Indonesia). Hak Pelayanan Hak Cipta dilindungi undang-undang.
          </div>
          <div className="shrink-0 text-[11px]">
            &copy; {currentYear} Fansedu Academy. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
