import { Send, MapPin, Mail, ArrowRight, MessageSquare, Sparkles, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 pb-32 min-h-screen relative overflow-hidden bg-slate-50/50 uppercase-none">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Main Side-by-Side Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/30 backdrop-blur-[45px] border border-white/60 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(31,38,135,0.08)] p-10 lg:p-20 animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-200">
          
          {/* LEFT COLUMN: Content & Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 backdrop-blur-md text-indigo-600 text-xs font-bold uppercase tracking-widest border border-indigo-100/50">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kontakt</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-['Outfit'] text-slate-900 tracking-tight leading-[1.1]">
                Masz pytania? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Napisz do mnie</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                Jeśli zastanawiasz się, który kurs będzie najlepszy – śmiało! Zazwyczaj odpisuję w ciągu kilku godzin.
              </p>
            </div>

            <div className="space-y-8 pt-6 border-t border-slate-200/50">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-600 border border-white shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail</p>
                  <a href="mailto:kontakt@szkolachemii.pl" className="font-bold text-xl text-slate-800 hover:text-indigo-600 transition-colors">kontakt@szkolachemii.pl</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-600 border border-white shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lokalizacja</p>
                  <p className="font-bold text-xl text-slate-800">Online, Cała Polska</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Social Media</p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Youtube, href: '#' },
                  { icon: Facebook, href: '#' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white rounded-2xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:-translate-y-1 cursor-pointer transition-all shadow-sm group"
                  >
                    <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Form Card (Sticky) */}
          <div className="relative lg:h-full">
            <div className="lg:sticky lg:top-12 bg-white/50 backdrop-blur-xl border border-white/80 p-10 rounded-[3rem] shadow-2xl shadow-indigo-900/5 transition-all duration-500">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Twoje Imię</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all shadow-sm font-medium text-slate-700 placeholder:text-slate-300"
                    placeholder="np. Marysia Curie"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all shadow-sm font-medium text-slate-700 placeholder:text-slate-300"
                    placeholder="np. maria@chem.pl"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Wiadomość</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all shadow-sm font-medium text-slate-700 resize-none placeholder:text-slate-300"
                    placeholder="W czym mogę Ci pomóc?"
                  ></textarea>
                </div>

                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <button 
                  type="submit" 
                  className="w-full group bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                >
                  <span>Wyślij wiadomość</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Background Decoration for the form area */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </div>
          
        </div>

        <p className="text-center text-[10px] text-slate-400 mt-12 leading-relaxed opacity-60">
          Wysyłając wiadomość akceptujesz Politykę Prywatności. Obsługa przez Web3Forms.
        </p>

      </div>

      {/* Tło - Dekoracyjne Orbs (System-wide style) */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[160px] -z-10 -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
    </div>
  );
}
