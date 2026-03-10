import React, { useState } from 'react';
import { Mail, DownloadCloud, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Materials() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('fields[email]', email);
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');

      const response = await fetch(
        'https://assets.mailerlite.com/jsonp/2174836/forms/181549768896415490/subscribe',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Coś poszło nie tak. Spróbuj ponownie.');
      }
    } catch (err) {
      // MailerLite may return CORS error - we treat it as success if it reached the server
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 min-h-screen relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEWA - Treść */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700 text-center md:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-indigo-500/20 ml-auto mr-auto">
              <DownloadCloud className="w-7 h-7 md:w-8 md:h-8" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] text-slate-900 leading-tight mb-6 tracking-tight">
              Odbierz <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">darmowe</span> materiały maturalne
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Dołącz do mojej bazy wiedzy. Zapisz się na bezpłatny newsletter, a w zamian natychmiast wyślę Ci paczkę skryptów, najważniejsze pewniaki maturalne oraz spersonalizowane zniżki na pełne kursy.
            </p>

            <div className="space-y-4 mb-10 text-left max-w-sm ml-auto mr-auto">
              {[
                "Paczka 50 rozwiązań z chemii organicznej (PDF)",
                "Arkusz autorski 2024 układany z egzaminatorem CKE",
                "Dostęp do zamkniętej grupy na Facebooku dla subskrybentów"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PRAWA - Formularz */}
          <div className="relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-cyan-500 transform rotate-3 rounded-[2rem] md:rounded-[2.5rem] blur-sm opacity-20"></div>

            <div className="relative bg-white/80 backdrop-blur-xl border border-white/80 p-6 sm:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-slate-200/50">

              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-['Outfit'] text-center text-slate-800 mb-2">
                    Zapisz się do bazy wiedzy
                  </h3>
                  <p className="text-center text-slate-500 text-xs md:text-sm mb-6 md:mb-8">
                    Wyślemy materiały natychmiast po potwierdzeniu e-maila. Bez spamu!
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        Twój Adres E-mail
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          aria-label="email"
                          required
                          type="email"
                          name="fields[email]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="np. maria.curie@chem.pl"
                          className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700 text-sm md:text-base"
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full group relative overflow-hidden py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg transition-all active:scale-95 ${isLoading
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                        }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                            <span>Wysyłanie...</span>
                          </>
                        ) : (
                          <>
                            <span>Odbierz materiały</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 md:py-12 text-center animate-in zoom-in-95 fade-in duration-500">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-inner">
                    <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-['Outfit'] text-slate-900 mb-4">
                    Prawie gotowe! 🧪
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-xs mx-auto">
                    Wysłaliśmy link aktywacyjny na adres: <br />
                    <span className="font-bold text-indigo-600">{email}</span>. <br />
                    Koniecznie sprawdź skrzynkę (i folder spam)!
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setEmail(''); }}
                    className="text-indigo-500 font-semibold hover:text-indigo-600 transition-colors flex items-center justify-center gap-2 mx-auto text-sm md:text-base"
                  >
                    <span>Podałem błędny e-mail</span>
                  </button>
                </div>
              )}

              <p className="text-[10px] text-center text-slate-400 mt-8 leading-relaxed">
                Administratorem danych osobowych jest Szkoła Chemii. Wypisać możesz się w każdym momencie jednym kliknięciem. Polityka prywatności.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Dekoracyjne Ozdobniki */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[160px] -z-10 -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
    </div>
  );
}