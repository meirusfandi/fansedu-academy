import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Clock, Globe } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Informasi Lengkap Layanan Fansedu
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Menjawab keraguan dan memberikan kepastian informasi mengenai kualifikasi mentor, sistem pembelajaran, sertifikat, dan bimbingan belajar putra-putri Anda.
          </p>
        </div>

        {/* 10 Accordion Stack */}
        <div className="space-y-4" id="faq-list-container">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-blue-50/20 border-blue-200/80 shadow-md"
                    : "bg-slate-50/50 border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                }`}
                id={`faq-item-${faq.id}`}
              >
                
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start space-x-3">
                    <span className="font-mono text-xs sm:text-sm text-blue-600 font-bold mt-0.5 min-w-[20px]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  <span className={`p-1 bg-white rounded-lg border border-slate-100 text-slate-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-600 border-blue-200" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Collapsible Content Area */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100/50" : "max-h-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Contact WhatsApp redirect hint if not found */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-bold text-sm text-slate-900">Punya Pertanyaan Lain yang Belum Terdaftar?</span>
              <span className="block text-xs text-slate-500 font-sans">Tim konsultan pendidikan kami siap memandu bimbingan Anda secara langsung.</span>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Fansedu%20Academy%2C%20saya%20tertarik%20dengan%20program%20bimbingan%20anak..."
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs px-4.5 py-2.5 rounded-xl border border-emerald-500 flex items-center space-x-1 hover:-translate-y-0.5 transition-all text-center shrink-0 shadow-sm"
          >
            <span>Tanya Kakak Mentor</span>
          </a>
        </div>

      </div>
    </section>
  );
}
