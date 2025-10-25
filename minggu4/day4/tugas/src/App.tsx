import DomManipulation from './components/dom-manipulation';
import PortalModalDemo from './components/portal-modal';
import HOCDemo from './components/with-logging';
import RenderPropsDemo from './components/mouse-tracker';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Tugas Day 4 minggu 4
          </h1>
          <p className="text-lg text-gray-600">
            Demonstrasi useRef, Portal, HOC, dan Render Props
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DomManipulation />
          <PortalModalDemo />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <HOCDemo />
          <RenderPropsDemo />
        </div>
      </div>
    </div>
  );
}

export default App;