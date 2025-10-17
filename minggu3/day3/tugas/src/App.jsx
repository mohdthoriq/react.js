import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";
import Navbar from "./components/Navbar";
import './App.css'
import Parent from './components/Parent'
import CallbackParent from './components/CallbackParent'
import Expensive from './components/Expensive'
import FastComponent from "./components/FastComponent";
import SlowComponent from "./components/SlowComponent";
import HeavyList from "./components/HeavyList";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));





export default function App() {
  const [count, setCount] = useState(0);
  
  console.log("App Rendered 🌀");

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full p-4 sm:p-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* --- Kartu Tugas 1 & 2 --- */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg border border-slate-700">
          <Parent />
          <hr className="my-8 border-slate-600" />
          <Expensive />
        </section>

        {/* --- Kartu Tugas 3 --- */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6">Tugas 3 - Optimasi dengan useCallback ⚙️</h1>
          <CallbackParent />
        </section>

        {/* --- Kartu Tugas 4 --- */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">⚙️ Tugas 4 - Code Splitting & Lazy Loading</h1>
          <Router>
            <Navbar />
            <Suspense fallback={<p className="text-yellow-400 mt-6">Loading Page...</p>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Router>
        </section>

        {/* --- Kartu Tugas 5 --- */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Tugas 5 - Profil Halaman 🧠 Performance Profiling Demo</h1>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition"
          >
            Re-render App ({count})
          </button>
          <div className="mt-6 flex flex-col sm:flex-row gap-5 w-full max-w-2xl justify-center">
            <FastComponent />
            <SlowComponent />
            <HeavyList />
          </div>
        </section>
      </div>
    </div>
  )
}
