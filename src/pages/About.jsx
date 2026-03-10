import React from 'react';
import { CheckCircle2, Award, Heart, BookOpen, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-12 md:pt-20 pb-20 md:pb-32 min-h-screen relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 backdrop-blur-md text-indigo-600 text-xs font-bold uppercase tracking-widest border border-indigo-100/50 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O Mnie</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Poznajmy się <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">bliżej</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Wierzę, że chemia to nie zbiór dziwnych znaczków i trudnych równań, ale najbardziej logiczna ze wszystkich nauk o świecie.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-24 md:mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          
          {/* LEWA: Zdjęcie / Grafika */}
          <div className="relative group px-4 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-[2.5rem] md:rounded-[3rem] -rotate-3 scale-105 blur-lg transition-transform group-hover:rotate-0"></div>
            <div className="relative aspect-[4/5] bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl p-2 md:p-3">
              <div className="w-full h-full bg-slate-100 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center overflow-hidden relative">
                <span className="text-slate-400 font-medium z-10 text-sm md:text-base px-6 text-center">[ Twoje profesjonalne zdjęcie ]</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/50"></div>
              </div>
            </div>
          </div>

          {/* PRAWA: Tekst */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Outfit'] text-slate-800 leading-tight">
              Cześć! Jestem Twoją nową przewodniczką po świecie chemii.
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
              <p>
                Przez lata edukacji zauważyłam jedno: chemia w szkole jest często uczona jako zlepek nudnych regułek i suchych faktów. Uczeń ma "wykuć na blachę" reakcje, zamiast zrozumieć dlaczego dany proces w ogóle ma miejsce.
              </p>
              <p>
                Dlatego stworzyłam <strong>Szkołę Chemii</strong>. Moją misją jest pokazanie Ci, jak fascynująca, tętniąca życiem i przede wszystkim logiczna jest ta dziedzina. Wspólnie rozwikłamy zagadki zadań maturalnych.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              {[
                "Własne, autorskie metody tłumaczenia trudnych schematów",
                "Odczarowanie chemii organicznej",
                "Pełne wsparcie motywacyjne aż do dnia matury"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOLNA: Misja i Wartości - Tiles Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-[2.5rem] md:rounded-[4rem] p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Dekoracje tła */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Outfit'] mb-10 md:mb-16 text-center">Dlaczego moja szkoła?</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Award, title: "Doświadczenie", text: "Przeprowadziłam setki uczyników przez najtrudniejsze meandry maturalne osiągając wyniki powyżej 90%." },
                { icon: BookOpen, title: "Zrozumienie", text: "Zamiast pamięciówki stawiam na myślenie przyczynowo-skutkowe. Uczę jak łączyć ze sobą fakty." },
                { icon: Heart, title: "Pasja", text: "Chemia to moja wielka miłość. Obiecuję, że na każdych zajęciach zarażę Cię pozytywną energią i chęcią do nauki." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <val.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-3">{val.title}</h4>
                  <p className="text-indigo-100 text-xs md:text-sm leading-relaxed opacity-90">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

      {/* Dekoracyjne Ozdobniki (System-wide style) */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[160px] -z-10 -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
    </div>
  );
}
