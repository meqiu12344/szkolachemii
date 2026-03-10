import { ArrowRight, BookOpen, Beaker, Star, CheckCircle, Mail, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-12 pb-24">
          <div className="text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Twoja przewaga na maturze
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold font-['Outfit'] text-slate-900 leading-[1.1] mb-6">
              Zrozum chemię, <br className="hidden lg:block" />
              nie tylko <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">wykuj na blachę</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nowoczesne kursy, indywidualne korepetycje i materiały zbudowane tak, aby pokazać Ci jak fascynująca i logiczna potrafi być chemia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/oferta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-full font-semibold shadow-xl shadow-indigo-600/30 hover:-translate-y-1 transition-all duration-300 text-lg">
                Zobacz Kursy <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/o-mnie" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold shadow-lg shadow-slate-200/50 hover:shadow-xl border border-slate-100 hover:-translate-y-1 transition-all duration-300 text-lg">
                Poznajmy się <BookOpen className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 text-slate-500 text-sm font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden z-10 relative">
                    👤
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400 mb-1 justify-center lg:justify-start">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <span>Setki zadowolonych maturzystów</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 hidden lg:block">
            {/* Abstrakcyjne tło zdjęcia */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-[3rem] rotate-3 scale-105 blur-lg"></div>

            {/* Główne okno / zdjęcie */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-2xl shadow-indigo-900/10 flex items-center justify-center overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/30 z-0"></div>

              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <span className="text-4xl">📸</span>
                </div>
                <h3 className="font-['Outfit'] font-bold text-xl text-slate-800 mb-2">Miejsce na zdjęcie</h3>
                <p className="text-slate-500 text-sm">W przyszłości zamienisz tę przestrzeń na swoje piękne zdjęcie profilowe!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FEATURE SECTION */}
      <section className="py-20 relative border-y border-white/30">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold font-['Outfit'] text-slate-900 mb-4">
              Czego możesz się spodziewać?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Moje zajęcia to nie jest kolejne zwykłe odczytywanie podręcznika. Zbudowałam własny system nauczania.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Zrozumienie, nie wykuwanie", desc: "Kompletnie autorskie metody pokazywania chemii. Tłumaczę do skutku na prostych, życiowych przykładach." },
              { title: "Materiały Premium", desc: "Zyskujesz dostęp do skryptów, pewniaków maturalnych i arkuszy rozwiązywanych krok po kroku." },
              { title: "Indywidualne Podejście", desc: "Niezależnie czy celujesz w 50% czy w 100% z rozszerzenia – zbudujemy plan na Twoją miarę." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-md border border-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Beaker className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-['Outfit'] text-slate-800 mb-3">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/o-mnie" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
              Przeczytaj więcej o moich metodach <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-extrabold font-['Outfit'] text-slate-900 mb-6">
                Co mówią moi uczniowie?
              </h2>
              <p className="text-lg text-slate-600">
                Największą nagrodą za moją pracę są wiadomości od uczniów po odczytaniu wyników maturalnych. Zobacz kilka z nich.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Julia K.", result: "92% Chemia ROZ", text: "Zanim zaczęłam zajęcia z panią Kasią, chemia organiczna była dla mnie czarną magią. Nagle wszystko zaczęło być logiczne! Dzięki zajęciom z łatwością dostałam się na stomatologię. Dziękuję!" },
              { name: "Michał M.", result: "88% Chemia ROZ", text: "Świetny kontakt, mnóstwo cierpliwości i co najważniejsze - brak poczucia, że zmuszam się do nauki. Arkusze maturalne robione na zajęciach okazały się wielkim strzałem w dziesiątkę." },
              { name: "Ania P.", result: "100% Matura!", text: "Autorskie schematy to złoto. Przestałam się uczyć na pamięć, a zaczęłam zauważać dlaczego związki zachowują się w określony sposób. Każdemu maturzyście z całego serca polecam." }
            ].map((opinion, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-md border border-white rounded-3xl p-8 shadow-xl shadow-slate-200/30 relative">
                <Quote className="w-10 h-10 text-indigo-100 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {opinion.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{opinion.name}</h4>
                    <span className="text-sm font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1">Wynik: {opinion.result}</span>
                  </div>
                </div>
                <p className="text-slate-600 italic relative z-10 leading-relaxed">
                  "{opinion.text}"
                </p>
                <div className="flex gap-1 mt-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA NEWSLETTER SECTION */}
      <section className="mb-24 px-6">
        <div className="container mx-auto max-w-5xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-cyan-900 rounded-[3rem] p-10 md:p-16 text-white text-center sm:text-left shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-12">

          {/* Abstract blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-left text-3xl md:text-5xl font-bold font-['Outfit'] mb-6">
              Darmowa paczka zadań na start!
            </h2>
            <p className="text-left text-indigo-100 text-lg mb-8 leading-relaxed">
              Zastanawiasz się jak wyglądają moje materiały? Zapisz się do bazy wiedzy, a w prezencie podeślę Ci "50 pewniaków maturalnych" krok po kroku.
            </p>
            <div className="flex gap-4 items-center justify-center sm:justify-start">
              <Link to="/materialy" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-full font-bold shadow-xl hover:bg-slate-50 transition-colors">
                Odbierz Prezenty <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Floating graphic element */}
          <div className="relative z-10 hidden md:block">
            <div className="relative w-48 h-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl rotate-6 shadow-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-500">
              <div className="w-32 h-32 bg-white/20 rounded-2xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">📄</div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-amber-400 text-amber-900 font-bold px-4 py-2 rounded-xl text-sm transform -rotate-12 shadow-lg">
                Za darmo!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
