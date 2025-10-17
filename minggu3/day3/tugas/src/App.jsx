import { lazy, Suspense, useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import ExpensiveCalc from './components/ExpensiveCalc'
import CallbackParent from './components/CallbackParent'

const PageA = lazy(() => import('./pages/PageA'))
const PageB = lazy(() => import('./pages/PageB'))
const PageC = lazy(() => import('./pages/PageC'))


export default function App() {
  const [route, setRoute] = useState('home')

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-200 p-6">
      <header className="max-w-5xl mx-auto mb-8 p-4 bg-slate-800/50 rounded-lg shadow-md border border-slate-700">
        <h1 className="text-3xl font-bold mb-2">Performance Demo — React.memo / useMemo / useCallback / Lazy</h1>
        <p className="text-sm text-slate-400">Klik nav buat lazy load pages. Buka console buat log render.</p>

        <nav className="mt-4 flex gap-2">
          <button onClick={() => setRoute('home')} className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors">Home</button>
          <button onClick={() => setRoute('pageA')} className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition-colors">Page A (lazy)</button>
          <button onClick={() => setRoute('pageB')} className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition-colors">Page B (lazy)</button>
          <button onClick={() => setRoute('pageC')} className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors">Page C (lazy)</button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        {route === 'home' && (
          <>
            <section className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1 flex">
                <Parent />
              </div>

              <div className="md:col-span-1 flex">
                <ExpensiveCalc />
              </div>

              <div className="md:col-span-1 flex">
                <CallbackParent />
              </div>
            </section>

            <div className="mt-6 p-4 bg-slate-800 rounded-lg shadow">
              <p className="text-sm text-slate-400">Notes: open browser console & React DevTools Profiler to watch renders and profiling.</p>
            </div>
          </>
        )}

        {route !== 'home' && (
          <Suspense fallback={<div className="p-6 bg-slate-800 rounded-lg shadow">Loading page...</div>}>
            {route === 'pageA' && <PageA />}
            {route === 'pageB' && <PageB />}
            {route === 'pageC' && <PageC />}
          </Suspense>
        )}
      </main>
    </div>
    </>
  )
}
