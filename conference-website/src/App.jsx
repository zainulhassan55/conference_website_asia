import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Conference Website
        </h1>

        <p className="mt-5 text-lg text-slate-300">
          React and Tailwind CSS are installed successfully.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
          Explore Conference
        </button>
      </div>
    </main>
  );
}

export default App;
