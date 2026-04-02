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
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-10">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            NEXORA SENTINEL v1.2
          </h1>
          <p className="text-slate-500 font-mono text-sm">Node: MX_MAZ_01 | Status: Stable</p>
        </div>
        <div className="hidden md:block bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-xs font-mono">
          Last Sync: {new Date().toLocaleTimeString()}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfica de Rendimiento */}
        <div className="lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Tendencias de Ventas: IconicHats
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b'}}
                  itemStyle={{color: '#60a5fa'}}
                />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Panel de Control Zero-Trust */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-lg font-bold mb-4">Security Overview</h2>
          <div className="space-y-4">
            {[
              { label: 'Rust Engine', status: 'Active', color: 'text-emerald-400' },
              { label: 'DB Encryption', status: 'Argon2id', color: 'text-blue-400' },
              { label: 'Firewall', status: 'Bypassed', color: 'text-red-400' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between p-3 bg-black/20 rounded-xl">
                <span className="text-slate-400">{item.label}</span>
                <span className={item.color + " font-bold text-sm"}>{item.status}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20">
            FORCE RE-VALIDATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
