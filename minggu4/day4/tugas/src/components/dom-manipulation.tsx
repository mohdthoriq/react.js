import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function DemoManipulation() {
    const inputRef = useRef<HTMLInputElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    const focusInput = () => {
        inputRef.current?.focus()
        inputRef.current?.classList.add('ring-2', 'ring-blue-500', 'border-blue-500')
        setTimeout(() => {
            inputRef.current?.classList.remove('ring-2', 'ring-blue-500', 'border-blue-500')
        }, 1000)
    }

    const scrollToTop = () => {
        scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
        setScrollPosition(0)
    }

    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            const bottom = scrollContainerRef.current.scrollHeight;
            scrollContainerRef.current.scrollTo({ top: bottom, behavior: 'smooth' })
            setScrollPosition(bottom)
        }
    }

    const handleScroll = () => {
        setScrollPosition(scrollContainerRef.current?.scrollTop || 0)
    }

    // Calculate scroll percentage for gradient
    const scrollPercentage = scrollContainerRef.current 
        ? (scrollPosition / (scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight)) * 100 
        : 0

    return (
        <div className="p-4">
            <Card className="w-full max-w-md bg-gradient-to-br from-sky-50 to-blue-50 border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Tugas 1 - DOM Manipulation useRef
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                        Demonstrasi akses dan manipulasi elemen DOM secara interaktif
                    </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 p-6">
                    {/* Input Focus Section */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <h3 className="font-semibold text-blue-800">Focus Manipulation</h3>
                        </div>
                        
                        <div className="space-y-3">
                            <input 
                                ref={inputRef}
                                placeholder="Klik tombol untuk fokus ke sini..."
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                                         focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                                         transition-all duration-300 bg-white shadow-sm
                                         placeholder:text-gray-400"
                            />
                            <Button 
                                onClick={focusInput} 
                                className="w-full bg-gradient-to-r from-blue-500 to-sky-500 
                                         hover:from-blue-600 hover:to-sky-600 
                                         transition-all duration-300 shadow-md
                                         hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                <span className="flex items-center gap-2">
                                    <FocusIcon />
                                    Fokus ke Input
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Scroll Manipulation Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                            <h3 className="font-semibold text-sky-800">Scroll Manipulation</h3>
                        </div>

                        {/* Scroll Progress Bar */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-blue-600 font-medium">
                                    Scroll Position: <strong>{scrollPosition}px</strong>
                                </span>
                                <span className="text-blue-500 font-semibold">
                                    {Math.round(scrollPercentage)}%
                                </span>
                            </div>
                            
                            <div className="w-full bg-blue-200 rounded-full h-2">
                                <div 
                                    className="bg-gradient-to-r from-blue-500 to-sky-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${scrollPercentage}%` }}
                                />
                            </div>
                        </div>

                        {/* Scroll Buttons */}
                        <div className="flex gap-3">
                            <Button 
                                variant='outline' 
                                size='sm' 
                                onClick={scrollToTop}
                                className="flex-1 bg-white border-blue-300 text-blue-600 
                                         hover:bg-blue-50 hover:border-blue-500 
                                         transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <ArrowUpIcon />
                                    Ke Atas
                                </span>
                            </Button>
                            <Button 
                                variant='outline' 
                                size='sm' 
                                onClick={scrollToBottom}
                                className="flex-1 bg-white border-sky-300 text-sky-600 
                                         hover:bg-sky-50 hover:border-sky-500 
                                         transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <ArrowDownIcon />
                                    Ke Bawah
                                </span>
                            </Button>
                        </div>

                        {/* Scroll Container */}
                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="h-32 border-2 border-blue-200 rounded-xl p-4 
                                     overflow-y-auto bg-gradient-to-b from-blue-50 to-sky-50
                                     shadow-inner scrollbar-thin scrollbar-thumb-blue-300 
                                     scrollbar-track-blue-100"
                        >
                            {Array.from({ length: 20 }, (_, i) => (
                                <div 
                                    key={i} 
                                    className="py-3 border-b border-blue-100 last:border-b-0
                                             hover:bg-white hover:shadow-sm rounded-lg px-2 
                                             transition-all duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-sky-400 
                                                     rounded-full flex items-center justify-center text-white 
                                                     text-xs font-bold">
                                            {i + 1}
                                        </div>
                                        <span className="text-gray-700">
                                            Item {i + 1} - <span className="text-blue-500">scroll untuk melihat efek</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 
                                  rounded-lg p-3">
                        <div className="flex items-start gap-2">
                            <InfoIcon />
                            <div>
                                <p className="text-blue-800 text-sm font-medium">
                                    Tips Interaksi:
                                </p>
                                <p className="text-blue-600 text-xs">
                                    Gunakan tombol untuk melihat manipulasi DOM secara langsung
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Icons Components
function FocusIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    )
}

function ArrowUpIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    )
}

function ArrowDownIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    )
}

function InfoIcon() {
    return (
        <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}