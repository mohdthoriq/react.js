import { createPortal } from "react-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface PortalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

function ModalContent({ isOpen, onClose, title, children }: PortalModalProps) {
    if (!isOpen) return null

    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />
            <Card className="w-full max-w-md relative z-10 bg-gradient-to-br from-sky-50 to-blue-50 border-blue-200 shadow-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8 hover:bg-white/20 text-white"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="p-6">
                    {children}
                </CardContent>
            </Card>
        </div>,
        document.body
    );
}

export default function PortalModalDemo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card className="w-full max-w-md bg-gradient-to-br from-sky-50 to-blue-50 border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                   Tugas 2 - React Portal Modal
                </CardTitle>
                <CardDescription className="text-blue-100">
                    Modal di-render di luar hierarki DOM menggunakan Portal
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
                <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-sky-500 
                             hover:from-blue-600 hover:to-sky-600 
                             transition-all duration-300 shadow-md
                             hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    <span className="flex items-center gap-2">
                        <ModalIcon />
                        Buka Modal Portal
                    </span>
                </Button>

                <ModalContent
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Tugas 2 - React Portal Modal"
                >
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Modal ini di-render langsung di <strong>body element</strong> menggunakan React Portal, 
                            sehingga tidak terpengaruh oleh styling parent component.
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-blue-800 font-semibold text-sm">
                                        Cek DevTools Elements Tab
                                    </p>
                                    <p className="text-blue-600 text-xs mt-1">
                                        Modal berada langsung di body, bukan di dalam card component!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <Button 
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 bg-gradient-to-r from-blue-500 to-sky-500 
                                         hover:from-blue-600 hover:to-sky-600"
                            >
                                Tutup Modal
                            </Button>
                            <Button 
                                variant="outline"
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 border-blue-300 text-blue-600 
                                         hover:bg-blue-50 hover:border-blue-500"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </ModalContent>

                {/* Info Section */}
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-blue-800 font-semibold text-sm">
                                Keuntungan React Portal:
                            </p>
                            <ul className="text-blue-600 text-xs mt-1 space-y-1">
                                <li>• Tidak terpengaruh overflow: hidden parent</li>
                                <li>• Z-index management yang lebih baik</li>
                                <li>• Semantic HTML yang proper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

// Icon Component
function ModalIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
    );
}