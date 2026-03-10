import { CheckCircle2, Award, Heart, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-8 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Outfit'] text-slate-900 mb-6">
            Poznajmy się <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">bliżej</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wierzę, że chemia to nie zbiór dziwnych znaczków i trudnych równań, ale najbardziej logiczna ze wszystkich nauk o świecie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          
          {/* LEWA: Zdjęcie / Grafika */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-[3rem] -rotate-3 scale-105 blur-lg transition-transform group-hover:rotate-0"></div>
            <div className="relative aspect-[4/5] bg-white border border-white/60 rounded-[3rem] shadow-xl p-2">
              <div className="w-full h-full bg-slate-100 rounded-[2.5rem] flex items-center justify-center overflow-hidden relative">
                <span className="text-slate-400 font-medium z-10">[ Twoje profesjonalne zdjęcie ]</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/50"></div>
              </div>
            </div>
          </div>

          {/* PRAWA: Tekst */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-['Outfit'] text-slate-800 mb-4">
              Cześć! Jestem Twoją nową przewodniczką po świecie chemii.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Przez lata edukacji zauważyłam jedno: chemia w szkole jest często uczona jako zlepek nudnych regułek i suchych faktów. Uczeń ma "wykuć na blachę" reakcje, zamiast zrozumieć dlaczego dany proces w ogóle ma miejsce.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dlatego stworzyłam <strong>Szkołę Chemii</strong>. Moją misją jest pokazanie Ci, jak fascynująca, tętniąca życiem i przede wszystkim logiczna jest ta dziedzina. Wspólnie rozwikłamy zagadki zadań maturalnych.
            </p>

            <div className="pt-6 space-y-4">
              {[
                "Własne, autorskie metody tłumaczenia trudnych schematów",
                "Odczarowanie chemii organicznej",
                "Pełne wsparcie motywacyjne aż do dnia matury"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOLNA: Misja i Wartości */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Dekoracje tła */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-['Outfit'] mb-12 text-center">Dlaczego moja szkoła?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Doświadczenie", text: "Przeprowadziłam setki uczyników przez najtrudniejsze meandry maturalne osiągając wyniki powyżej 90%." },
                { icon: BookOpen, title: "Zrozumienie", text: "Zamiast pamięciówki stawiam na myślenie przyczynowo-skutkowe. Uczę jak łączyć ze sobą fakty." },
                { icon: Heart, title: "Pasja", text: "Chemia to moja wielka miłość. Obiecuję, że na każdych zajęciach zarażę Cię pozytywną energią i chęcią do nauki." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors">
                  <val.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                  <p className="text-indigo-100 text-sm leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
