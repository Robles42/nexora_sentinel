import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Snapback', stock: 50, sales: 120 },
  { name: 'Beanie', stock: 30, sales: 85 },
  { name: 'Trucker', stock: 15, sales: 200 },
  { name: 'Perfume', stock: 12, sales: 45 },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent italic">
            NEXORA SENTINEL v1.2
          </h1>
          <p className="text-slate-500 font-mono text-sm tracking-widest mt-1">NODE: MX_MAZ_01 | STATUS: STABLE</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-5 py-2 rounded-full text-xs font-mono text-blue-400 shadow-inner">
          LAST SYNC: {new Date().toLocaleTimeString()}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Market Intelligence: IconicHats
          </h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px'}}
                  itemStyle={{color: '#60a5fa'}}
                />
                <Bar dataKey="sales" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <h2 className="text-xl font-bold mb-6 italic">Security Metrics</h2>
            <div className="space-y-5">
              {[
                { label: 'Rust Engine', status: 'ACTIVE', color: 'bg-emerald-500/10 text-emerald-400' },
                { label: 'Encryption', status: 'ARGON2ID', color: 'bg-blue-500/10 text-blue-400' },
                { label: 'Mazatlán DB', status: 'LOCKED', color: 'bg-orange-500/10 text-orange-400' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-black/30 rounded-2xl border border-white/5">
                  <span className="text-slate-400 font-medium">{item.label}</span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-black ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-white text-slate-950 hover:bg-blue-400 transition-all duration-300 rounded-2xl font-black text-xs uppercase tracking-tighter transform hover:scale-[1.02]">
              RE-VALIDATE ACCESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
