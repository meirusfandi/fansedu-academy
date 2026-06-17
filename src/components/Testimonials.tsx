import { useState, FormEvent } from "react";
import { MessageSquare, Quote, Heart, Send, CheckCircle2, Star } from "lucide-react";

export default function Testimonials() {
  const [draftComment, setDraftComment] = useState("");
  const [draftAuthor, setDraftAuthor] = useState("");
  const [draftRole, setDraftRole] = useState("");
  const [draftSelectedProgram, setDraftSelectedProgram] = useState("Olympiad Academy");
  const [rating, setRating] = useState(5);
  const [submittedDraft, setSubmittedDraft] = useState<any[]>([]);

  const handleDraftSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!draftComment || !draftAuthor) return;

    const newFeedback = {
      id: `draft-${Date.now()}`,
      comment: draftComment,
      author: draftAuthor,
      role: draftRole || "Orang Tua Wali Siswa",
      program: draftSelectedProgram,
      rating: rating,
      timestamp: "Baru saja ditulis (Akan dikurasi oleh admin)"
    };

    setSubmittedDraft([newFeedback, ...submittedDraft]);
    setDraftComment("");
    setDraftAuthor("");
    setDraftRole("");
    setRating(5);
  };

  return (
    <section id="testimonials-section" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Umpan Balik Real &amp; Cerita Keberhasilan
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Demi menjaga transparansi dan kredibilitas, Fansedu Academy tidak mengunggah data ulasan palsu. Di bawah ini adalah slot ulasan rujukan resmi yang siap diisi secara transparan oleh para orang tua murid.
          </p>
        </div>

        {/* Big Grid containing placeholders + Draft form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Testimonial Standard Layout Placeholders (8-stretch cards) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Standard Template Placeholder (Data Riil Mengikuti Kurasi Wali Murid)
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonial-placeholders-grid">
                
                {/* Standard Placeholder Card 1 */}
                <div className="bg-slate-50/50 hover:bg-white border-2 border-dashed border-slate-200/80 rounded-2xl p-6 relative transition-all duration-300">
                  <div className="absolute top-4 right-4 text-slate-300"><Quote className="h-6 w-6" /></div>
                  <div className="flex items-center space-x-1.5 text-amber-300 mb-3">
                    <Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" />
                  </div>
                  <h4 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-2">
                    [ SLOT KOSONG ALUMNI MATH ]
                  </h4>
                  <p className="font-sans text-xs text-slate-500 italic leading-relaxed">
                    &ldquo;Bagikan pengalaman putra-putri Anda saat memenangkan olimpiade matematika atau mendapatkan penghargaan nasional bersama platform Fansedu.&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center space-x-3 text-left">
                    <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-400 font-mono">P1</div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400">Menunggu Ulasan Orang Tua Wali</span>
                      <span className="block text-[9px] text-blue-500 font-mono">Alumni Olimpiade Academy</span>
                    </div>
                  </div>
                </div>

                {/* Standard Placeholder Card 2 */}
                <div className="bg-slate-50/50 hover:bg-white border-2 border-dashed border-slate-200/80 rounded-2xl p-6 relative transition-all duration-300">
                  <div className="absolute top-4 right-4 text-slate-300"><Quote className="h-6 w-6" /></div>
                  <div className="flex items-center space-x-1.5 text-amber-300 mb-3">
                    <Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" /><Star className="h-4 w-4 fill-amber-300" />
                  </div>
                  <h4 className="font-display font-semibold text-sm text-slate-400 uppercase tracking-wider mb-2">
                    [ SLOT KOSONG ALUMNI TECH ]
                  </h4>
                  <p className="font-sans text-xs text-slate-500 italic leading-relaxed">
                    &ldquo;Bagikan kegembiraan anak Anda dalam merancang rilis game Roblox pertamanya atau aplikasi kecerdasan buatan visual di kelas Tech Academy.&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center space-x-3 text-left">
                    <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-400 font-mono">P2</div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400">Menunggu Ulasan Orang Tua Wali</span>
                      <span className="block text-[9px] text-indigo-500 font-mono">Tech Academy Game Creator</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Rendering submitted test comments dynamically to prove working functional interactive elements! */}
            {submittedDraft.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Draf Masukan Anda Berhasil Ditambahkan ke Sesi Ini:</span>
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {submittedDraft.map((item) => (
                    <div key={item.id} className="bg-blue-50/40 border border-blue-100 rounded-2xl p-5 shadow-sm relative">
                      <Heart className="absolute top-4 right-4 h-4 w-4 text-rose-500 animate-pulse fill-rose-500" />
                      
                      <div className="flex items-center space-x-1 text-amber-400 mb-2">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                        ))}
                      </div>

                      <p className="font-sans text-[13px] text-slate-700 italic leading-relaxed">
                        &ldquo;{item.comment}&rdquo;
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-2.5">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold font-display">
                          {item.author[0]}
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-slate-900">{item.author}</span>
                          <span className="block text-[9px] text-slate-500">{item.role} • <span className="text-blue-600 font-mono">{item.program}</span></span>
                        </div>
                      </div>
                      
                      <span className="block text-[9px] font-mono text-emerald-600 mt-2 text-right">
                        {item.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Form to Submit Testimonials */}
          <div className="lg:col-span-5 bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="space-y-4 mb-6">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl w-fit">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Formulir Draf Testimoni
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Apakah Anda adalah wali murid Fansedu? Bantu kami menguji visualisasi dengan mengetik draf kesan pesan Anda di bawah. Hasil draf akan terbit seketika di panel draf sisi kiri.
              </p>
            </div>

            <form onSubmit={handleDraftSubmit} className="space-y-4" id="testimonial-interactive-draft-form">
              {/* Comment text area */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Isi Surat Ulasan Anda:
                </label>
                <textarea
                  value={draftComment}
                  onChange={(e) => setDraftComment(e.target.value)}
                  placeholder="Contoh: Belajar Scratch bersama mentor Fansedu sangat mendampingi tumbuh kembang imajinasi logika anak saya..."
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 leading-relaxed font-sans"
                  required
                />
              </div>

              {/* Author name input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Nama Ibu / Bapak Wali:
                  </label>
                  <input
                    type="text"
                    value={draftAuthor}
                    onChange={(e) => setDraftAuthor(e.target.value)}
                    placeholder="Contoh: Ibu Rusfandi"
                    className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Keterangan Identitas:
                  </label>
                  <input
                    type="text"
                    value={draftRole}
                    onChange={(e) => setDraftRole(e.target.value)}
                    placeholder="Contoh: Orang Tua Kevin (Grade 5)"
                    className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Course category option selector dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Asal Program Kursus:
                  </label>
                  <select
                    value={draftSelectedProgram}
                    onChange={(e) => setDraftSelectedProgram(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    <option value="Olympiad Academy">Olympiad Academy</option>
                    <option value="Tech Academy">Tech Academy</option>
                    <option value="Holiday Coding Camp">Holiday Coding Camp</option>
                    <option value="Exam System">Exam System Platform</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Rating Bintang Anda:
                  </label>
                  <div className="flex items-center space-x-2.5 h-[34px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="focus:outline-none font-sans"
                      >
                        <Star
                          className={`h-5 w-5 ${
                            star <= rating ? "text-amber-400 fill-amber-400" : "text-slate-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-xs py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer mt-4"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Simulasikan Kirim Draf Ulasan</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
