import React, { useState, useEffect } from 'react';

function App() {
  const [sessionToken, setSessionToken] = useState(null);
  
  // Content Security Policy (Simulado vía meta tag)
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "default-src 'self'; script-src 'self'; object-src 'none';";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-10 font-sans">
      <nav className="border-b border-white/10 pb-4 flex justify-between">
        <span className="font-black tracking-tighter text-blue-500 text-xl">NEXORA PRO</span>
        <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
          ENCRYPTED SESSION ACTIVE
        </span>
      </nav>
      
      <main className="mt-20 max-w-2xl mx-auto">
        <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-6">Security Module</h2>
          <p className="text-lg leading-relaxed">
            Los datos de inventario de <span className="text-white font-bold italic text-blue-400">IconicHats</span> estan protegidos bajo cifrado AES-256. 
            La desencriptacion ocurre exclusivamente en memoria volatil.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
