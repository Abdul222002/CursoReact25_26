import React from "react";
import PlatosList from "./components/PlatosList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Menu Platos 
          <span className="text-orange-600">PREMIUM</span>
        </h1>
        <p>Explora nuestra carta de platos internacionales.Usando:
          <code className="text-orange-300 px-2 rounded">React 19</code>
        </p>
      </header>
      <main>
        <PlatosList />
      </main>
    </div>
  );
};

export default App;
