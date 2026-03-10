import { ArrowRight, Star, GraduationCap } from 'lucide-react';

export default function Offer() {
  const courses = [
    {
      title: 'Matura na 100% - Pakiet VIP',
      desc: 'Kompleksowe przygotowanie od zera. Ponad 100 godzin nagrań, live Q&A oraz pełne wsparcie autorskimi materiałami. Idealne dla celujących w medycynę.',
      price: 'Cena na platformie',
      badge: '',
      features: ['Dostęp roczny', 'Dedykowana grupa', 'Sprawdzanie arkuszy']
    },
    {
      title: 'Chemia Organiczna w Pigułce',
      desc: 'Zrozum, a nie kujemy na blachę. Przejrzyste schematy oraz najczęściej pojawiające się typy zadań na maturze.',
      price: 'Cena na platformie',
      badge: 'Bestseller',
      features: ['Nagrania VOD', 'Notatki PDF', 'Quizy powtórkowe']
    },
    {
      title: 'Warsztaty Zadaniowe (Zbiór)',
      desc: 'Praktyka czyni mistrza. Przerobimy razem setki zadań maturalnych. Krok po kroku wyjaśnię każdy schemat oceniania by nie tracić punktów.',
      price: 'Cena na platformie',
      badge: '',
      features: ['Baza 500+ zadań', 'Schematy CKE', 'Rozwiązania wideo']
    }
  ];

  return (
    <div className="pt-12 md:pt-20 pb-20 md:pb-32 min-h-screen relative overflow-hidden bg-slate-50/50 uppercase-none">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        <div className="text-center mb-10 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner rotate-3">
            <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-slate-900 tracking-tight leading-[1.1] mb-6">
            Wybierz formę <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">nauki dla siebie</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            Stworzyłam pakiety dostosowane do Twojego poziomu. Wybierz rozwiązanie idealne dla Twojego celu na maturze.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-20">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`flex flex-col relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 animate-in fade-in slide-in-from-bottom-8`}
              style={{ animationDelay: `${(idx + 1) * 150}ms`, animationFillMode: 'both' }}
            >

              {/* Absolutna wstążka / Badge */}
              {course.badge && (
                <div className="absolute top-6 -right-10 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-1 px-10 rotate-45 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-md">
                  {course.badge}
                </div>
              )}

              <div className="mb-6 pr-8">
                <h3 className="text-xl md:text-2xl font-bold font-['Outfit'] text-slate-800 mb-2 md:mb-3">{course.title}</h3>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400" />)}
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-600 mb-8 flex-grow leading-relaxed">
                {course.desc}
              </p>

              <div className="mb-8 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <p className="font-semibold text-xs md:text-sm text-slate-800 mb-3">Co w pakiecie?</p>
                <ul className="space-y-2">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                <span className="font-bold text-base md:text-lg text-indigo-700">{course.price}</span>
                {/* 
                  Aby podmienić pod platformę wystarczy zamienić # na odpowiedni link do konkretnego kursu. 
                */}
                <a href="#" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium transition-colors text-xs md:text-sm">
                  Zobacz <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center animate-in fade-in duration-1000 delay-500">
          <p className="text-slate-400 text-[10px] md:text-xs max-w-md mx-auto italic px-4">
            * Podmiana linków do platformy kursowej będzie polegała przypisaniu Twoich linków do powiązanych z buttonem miejsc w kodzie z powyższej sekcji.
          </p>
        </div>
      </div>

      {/* Dekoracyjne Ozdobniki (System-wide style) */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[160px] -z-10 -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
    </div>
  );
}
