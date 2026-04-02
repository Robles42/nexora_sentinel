import React from 'react'

function App() {
  const inventory = [
    { id: 1, name: 'Iconic Snapback Black', stock: 50, price: 350 },
    { id: 2, name: 'Nexora Perfume Gold', stock: 12, price: 850 }
  ];

  return (
    <div className="p-8">
      <header className="mb-10 border-b border-slate-700 pb-4">
        <h1 className="text-4xl font-bold text-blue-400">🛡️ Nexora Sentinel Dashboard</h1>
        <p className="text-slate-400">Mazatlán Node | Zero-Trust Verified</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Inventario */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-orange-400">🧢 Inventario: IconicHats</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 border-b border-slate-700">
                <th className="py-2">Producto</th>
                <th>Stock</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id} className="border-b border-slate-700/50">
                  <td className="py-3 font-medium">{item.name}</td>
                  <td>{item.stock}</td>
                  <td className="text-green-400">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Seguridad */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-red-400">🔒 Seguridad: Sentinel Core</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-slate-900 p-3 rounded">
              <span>Argon2 Status</span>
              <span className="text-green-500 font-bold">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900 p-3 rounded">
              <span>Zero-Trust Bridge</span>
              <span className="text-blue-500 font-bold">CONNECTED</span>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-12 text-center text-slate-500 text-sm">
        Nexora Sentinel Ecosystem v1.0 | Robles42 Portfolio Project
      </footer>
    </div>
  )
}

export default App
