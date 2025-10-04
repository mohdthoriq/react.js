
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// App.jsx
import './App.css'; // Import file CSS
import { useState, useEffect } from 'react';
import DynamicButton from './assets/component/DynamicButton';
import DynamicCard from './assets/dynamicCard/DynamicCard';


function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const isHighlighted = true;
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div className="container">
      <h1 className="title">Styling dengan <span className="highlight">CSS Classes</span></h1>
      <p>
        Ini adalah cara paling umum untuk me-style komponen React.
        Kita mengimpor file CSS dan menggunakan atribut <code className="highlight">className</code>.
      </p>
      <DynamicButton variant="primary" size="large" onClick={() => alert('Tombol ditekan')}>Tombol Dinamis</DynamicButton>
      <DynamicButton variant="secondary" size="medium" onClick={() => alert('Tombol ditekan')}>Tombol Dinamis</DynamicButton>
      <DynamicButton variant="danger" size="small" onClick={() => alert('Tombol ditekan')}>Tombol Dinamis</DynamicButton>

      <div>
        <DynamicCard title="Sukses" content="Data berhasil diproses." status="success" />
        <DynamicCard title="Peringatan" content="Periksa kembali input Anda." status="warning" />
        <DynamicCard title="Error" content="Terjadi kesalahan." status="error" />
      </div>


      <h1>Ukuran Layar Anda: {width}px</h1>
      {isMobile ? (
        <p>Anda sedang melihat di perangkat mobile.</p>
      ) : (
        <p>Anda sedang melihat di perangkat desktop/tablet.</p>
      )}
      <div style={{
        backgroundColor: isMobile ? 'orange' : 'purple',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        Konten ini berubah berdasarkan lebar layar.
      </div>

    </div>
  );
}

export default App;
