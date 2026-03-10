import { NavLink, Link } from 'react-router-dom';
import { Beaker, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm py-4 border-b border-white/60' : 'py-6'} ${isOpen ? '!bg-white !backdrop-blur-none border-b-0' : ''}`}>
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-indigo-600 font-extrabold text-2xl font-['Outfit'] z-50 relative">
            <Beaker className="w-8 h-8" />
            <span>Szkoła Chemii</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>Główna</NavLink>
            <NavLink to="/o-mnie" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>O mnie</NavLink>
            <NavLink to="/oferta" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>Oferta</NavLink>
            <NavLink to="/materialy" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>Materiały</NavLink>
            <Link to="/kontakt" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all">
              Skontaktuj się
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden z-50 text-slate-800 relative" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 md:hidden pt-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `font-medium ${isActive ? 'text-indigo-600' : 'text-slate-800'}`}>Strona Główna</NavLink>
        <NavLink to="/o-mnie" onClick={closeMenu} className={({ isActive }) => `font-medium ${isActive ? 'text-indigo-600' : 'text-slate-800'}`}>O mnie</NavLink>
        <NavLink to="/oferta" onClick={closeMenu} className={({ isActive }) => `font-medium ${isActive ? 'text-indigo-600' : 'text-slate-800'}`}>Oferta i Kursy</NavLink>
        <NavLink to="/materialy" onClick={closeMenu} className={({ isActive }) => `font-medium ${isActive ? 'text-indigo-600' : 'text-slate-800'}`}>Darmowe Materiały</NavLink>
        <Link to="/kontakt" onClick={closeMenu} className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 mt-4">
          Kontakt
        </Link>
      </div>
    </>
  );
}
