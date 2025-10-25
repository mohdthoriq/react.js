import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface MouseTrackerProps {
  children: (state: { x: number; y: number }) => React.ReactNode;
}

function MouseTracker({ children }: MouseTrackerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <>{children(position)}</>;
}

interface ToggleProps {
  children: (state: { isOn: boolean; toggle: () => void }) => React.ReactNode;
}

function Toggle({ children }: ToggleProps) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return <>{children({ isOn, toggle })}</>;
}

export default function RenderPropsDemo() {
  return (
    <div className="space-y-6">
      <Card className="w-full max-w-2xl bg-gradient-to-br from-sky-50 to-blue-50 border-blue-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
          <CardTitle className="text-xl">Tugas 4 - Render Props Pattern</CardTitle>
          <CardDescription className="text-blue-100">
            Berbagi logika stateful antara komponen dengan render props
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          
          {/* Mouse Tracker Implementation 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="font-semibold text-blue-800">Mouse Tracker - Implementation 1</h3>
            </div>
            <MouseTracker>
              {({ x, y }) => (
                <div className="p-4 border-2 border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50">
                  <p className="text-center text-blue-700 font-medium">
                    Posisi kursor: <strong>({x}, {y})</strong>
                  </p>
                  {/* Lingkaran biru dihapus */}
                </div>
              )}
            </MouseTracker>
          </div>

          {/* Mouse Tracker Implementation 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
              <h3 className="font-semibold text-sky-800">Mouse Tracker - Implementation 2</h3>
            </div>
            <MouseTracker>
              {({ x, y }) => (
                <Card className="border-2 border-blue-200 bg-white">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center text-blue-700">
                      <span className="font-medium">Koordinat X: {x}</span>
                      <span className="font-medium">Koordinat Y: {y}</span>
                    </div>
                    <div className="mt-3 w-full bg-blue-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-sky-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(x / window.innerWidth) * 100}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </MouseTracker>
          </div>

          {/* Toggle Implementation 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-green-800">Toggle - Implementation 1</h3>
            </div>
            <Toggle>
              {({ isOn, toggle }) => (
                <div className="flex items-center space-x-4 p-4 border-2 border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                  <Button 
                    variant={isOn ? "default" : "outline"}
                    onClick={toggle}
                    className={isOn 
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" 
                      : "border-green-300 text-green-600 hover:bg-green-50"
                    }
                  >
                    {isOn ? 'ON' : 'OFF'}
                  </Button>
                  <span className={isOn ? 'text-green-700 font-semibold' : 'text-green-600'}>
                    Status: {isOn ? 'Aktif' : 'Non-aktif'}
                  </span>
                </div>
              )}
            </Toggle>
          </div>

          {/* Toggle Implementation 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="font-semibold text-blue-800">Toggle - Implementation 2</h3>
            </div>
            <Toggle>
              {({ isOn, toggle }) => (
                <Card 
                  className={`cursor-pointer transition-all border-2 ${
                    isOn 
                      ? 'bg-gradient-to-r from-blue-50 to-sky-50 border-blue-300 shadow-md' 
                      : 'bg-white border-blue-200'
                  }`}
                  onClick={toggle}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-800">Notification Settings</p>
                        <p className={`text-sm ${
                          isOn ? 'text-blue-600' : 'text-gray-600'
                        }`}>
                          {isOn ? 'Notifications enabled' : 'Notifications disabled'}
                        </p>
                      </div>
                      <div className={`w-12 h-6 rounded-full relative transition-all ${
                        isOn ? 'bg-gradient-to-r from-blue-500 to-sky-500' : 'bg-gray-300'
                      }`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${
                          isOn ? 'left-7' : 'left-1'
                        }`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </Toggle>
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="text-blue-800 font-semibold text-sm">
                  Cara Kerja Render Props:
                </p>
                <p className="text-blue-600 text-xs mt-1">
                  Komponen MouseTracker dan Toggle menyediakan logika stateful, 
                  sedangkan UI-nya ditentukan oleh parent component melalui function children
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}