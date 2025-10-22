import './App.css'
import { CardDemo } from './components/CardDemo'
import { ModeToggle } from './components/ModeToggle'
import { ThemeProvider } from './components/ThemeProvider'
import { Navbar} from './components/Navbar'

function App() {
  

  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative">

        <Navbar/>
        
        {/* Isi utama app lu */}
        <CardDemo />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
