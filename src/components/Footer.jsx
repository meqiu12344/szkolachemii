import { Link } from 'react-router-dom';
import { Beaker } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/50 bg-white/40 backdrop-blur-3xl shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
      {/* Apple-style top inset gradient for glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl py-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start justify-between">

          {/* Kolumna 1 - Logo i opis krótki */}
          <div className="flex flex-col items-center text-center flex-1 max-w-lg ml-auto mr-auto">
            <Link to="/" className="flex items-center gap-2 text-indigo-600 font-extrabold text-2xl font-['Outfit'] mb-6 transition-transform hover:scale-105">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <Beaker className="w-6 h-6" />
              </div>
              <span>Szkoła Chemii</span>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Najskuteczniejsze przygotowanie maturalne z chemii. Zrozum zasady, zbuduj logiczne pojęcia i zgarnij 100%.
            </p>
          </div>

          {/* Kolumna 2 - Nawigacja */}
          <div className="flex flex-col items-center text-center ml-auto mr-auto">
            <h4 className="font-bold text-slate-800 mb-6 font-['Outfit'] relative">
              Nawigacja
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 w-8 h-1 bg-indigo-500/20 rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-4 mt-2">
              <Link to="/o-mnie" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">O mnie</Link>
              <Link to="/oferta" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Korepetycje i Kursy</Link>
              <Link to="/materialy" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Darmowe Materiały</Link>
              <Link to="/kontakt" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Kontakt</Link>
            </div>
          </div>

          {/* Kolumna 3 - Ważne linki */}
          <div className="flex flex-col items-center text-center ml-auto mr-auto">
            <h4 className="font-bold text-slate-800 mb-6 font-['Outfit'] relative">
              Ważne linki
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 w-8 h-1 bg-indigo-500/20 rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-4 mt-2">
              <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Platforma VOD</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Regulamin</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Polityka Prywatności</a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-300/40 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Szkoła Chemii. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">TikTok</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
