import { useState, FormEvent } from "react";
import { X, Send, CheckCircle2, MessageSquare, ClipboardCheck, GraduationCap } from "lucide-react";
import { LeadFormData } from "../types";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessSubmit: (data: LeadFormData) => void;
}

export default function LeadModal({ isOpen, onClose, onSuccessSubmit }: LeadModalProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    parentName: "",
    studentAge: 10,
    selectedProgram: "Olympiad Academy",
    whatsappNumber: "",
    emailAddress: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Call high level parent state helper
    onSuccessSubmit(formData);
    
    setFormSubmitted(true);
  };

  const constructWaLink = () => {
    const baseMessage = `Halo Fansedu Academy! Saya ingin mendaftarkan program uji coba (Free Trial) untuk anak saya. \n\n` + 
      `• Detail Registrasi Resmi:\n` +
      `- Nama Orang Tua: ${formData.parentName}\n` +
      `- Nama Siswa: ${formData.fullName}\n` +
      `- Usia Siswa: ${formData.studentAge} Tahun\n` +
      `- Pilihan Program: ${formData.selectedProgram}\n` +
      `- Email: ${formData.emailAddress}\n` +
      `- No. WhatsApp: ${formData.whatsappNumber}\n\n` +
      `Mohon informasikan jadwal Free Trial terdekat serta ketersediaan kuota kelas. Terima kasih!`;
    
    return `https://wa.me/6281234567890?text=${encodeURIComponent(baseMessage)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Back layer overlay background */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Main modal white card panel */}
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 transform translate-y-0 scale-100 transition-all"
        id="lead-modal-panel"
      >
        
        {/* Close Button Trigger */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>

        {!formSubmitted ? (
          <div className="space-y-6">
            
            {/* Header copy */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-blue-600">Konsultasi Free Trial</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                Daftar Kelas Uji Coba Gratis Fansedu Academy
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-505 text-slate-500 leading-relaxed">
                Silakan lengkapi formulir di bawah dengan saksama. Konsultan akademis kami akan menjadwalkan sesi bimbingan bersama mentor tersertifikasi.
              </p>
            </div>

            {/* Input fields */}
            <form onSubmit={handleSubmit} className="space-y-4" id="lead-academy-form">
              {/* Parent raw name */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Nama Lengkap Orang Tua Wali:
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="Contoh: Bpk. Rusfandi"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Student detail row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Nama Lengkap Anak (Siswa):
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Muhammad Kevin"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Usia Anak (Tahun):
                  </label>
                  <input
                    type="number"
                    min={6}
                    max={20}
                    required
                    value={formData.studentAge}
                    onChange={(e) => setFormData({ ...formData, studentAge: parseInt(e.target.value) || 10 })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Program subclass */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Program Utama yang Diminati:
                </label>
                <select
                  value={formData.selectedProgram}
                  onChange={(e) => setFormData({ ...formData, selectedProgram: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  <option value="Olympiad Academy (Matematika &amp; Informatika)">Fansedu Olympiad Academy (Persiapan Olimpiade)</option>
                  <option value="Tech Academy (Coding &amp; AI)">Fansedu Tech Academy (Scratch, Roblox, LUA, Python)</option>
                  <option value="Holiday Coding Camp (Intensive Program)">Fansedu Holiday Camp (Game Creator Camp &amp; Robotics)</option>
                  <option value="Exam System Portal (Assessment)">Fansedu Exam System (Kemitraan Evaluasi Sekolah &amp; Komunitas)</option>
                </select>
              </div>

              {/* Auth and contact parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    No. WhatsApp Aktif Orang Tua:
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="Contoh: 0812XXXXXXXX"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Alamat Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="Contoh: parent@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer mt-4"
              >
                <Send className="h-4 w-4" />
                <span>Simpan Formulir &amp; Lanjutkan</span>
              </button>
            </form>

            {/* Small trust seal */}
            <div className="pt-2 text-[10px] text-slate-400 font-mono text-center flex items-center justify-center space-x-1.5 border-t border-slate-50">
              <ClipboardCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>Privasi data terjaga aman &bull; No Spam Policy</span>
            </div>

          </div>
        ) : (
          <div className="space-y-6 text-center py-6">
            
            {/* Checked illustration */}
            <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 shadow-md">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>

            {/* Title feedback */}
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                Registrasi Berhasil Ditulis!
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Terima kasih Ibu/Bapak <span className="font-bold text-slate-900">{formData.parentName}</span>. Untuk mendapatkan kepastian jadwal Free Trial <span className="text-blue-600 font-bold">{formData.fullName}</span> secara cepat, klik tombol di bawah untuk diverifikasi langsung via WhatsApp admin (Layanan 24 Jam Fansedu).
              </p>
            </div>

            {/* Custom Receipt Metadata */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 max-w-sm mx-auto text-left font-mono text-[10px] sm:text-xs text-slate-600 space-y-1">
              <div><span className="font-bold text-slate-800">No. Registrasi:</span> Fans-{Date.now().toString().slice(-6)}</div>
              <div><span className="font-bold text-slate-800">Nama Siswa:</span> {formData.fullName} ({formData.studentAge} Tahun)</div>
              <div><span className="font-bold text-slate-800">Pilihan Latihan:</span> {formData.selectedProgram}</div>
              <div className="w-full h-px bg-slate-200 my-2" />
              <div className="text-emerald-600 font-bold text-center uppercase">✓ Terdaftar di Server Fans Digital</div>
            </div>

            {/* WA Verification redirection actions */}
            <div className="space-y-3 pt-2 max-w-sm mx-auto">
              <a
                href={constructWaLink()}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm py-4 px-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <MessageSquare className="h-5 w-5 fill-white" />
                <span>Kirim Verifikasi WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setFormSubmitted(false);
                  onClose();
                }}
                className="text-slate-500 hover:text-slate-700 text-xs font-semibold focus:outline-none"
              >
                Kembali ke Landing Page
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
