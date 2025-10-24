import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Users from './components/Users'
import { Separator } from './components/ui/separator'

function App() {

  return (
    <div className="dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        {/* Menggunakan Flexbox untuk layout yang responsif */}
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row">
          {/* Setiap anak akan mengambil setengah lebar di layar besar */}
          <div className="w-full lg:w-1/2"><Counter /></div>
          <div className="w-full lg:w-1/2"><Users /></div>
        </div>
      </main>
    </div>
  )
}

export default App
