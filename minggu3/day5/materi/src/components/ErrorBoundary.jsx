import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Memperbarui state sehingga render berikutnya akan menampilkan UI fallback.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Anda juga bisa mencatat error ke layanan pelaporan error
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Anda bisa me-render UI fallback kustom apa pun
      return (
        <div style={{ border: '1px solid red', padding: '20px', margin: '20px', backgroundColor: '#ffe6e6' }}>
          <h2>Terjadi Kesalahan!</h2>
          <p>Maaf, ada yang tidak beres.</p>
          {/* Untuk debugging, Anda bisa menampilkan detail error */}
          {/* <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details> */}
        </div>
      );
    }

    return this.props.children;
  }
}

// Komponen yang mungkin mengalami error
function BuggyComponent() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    if (count === 2) {
      // Mensimulasikan error
      throw new Error('Saya adalah error yang disengaja!');
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Tambah Count (akan error di 3)</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Contoh Error Boundary</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <p>Ini adalah konten di luar ErrorBoundary.</p>
    </div>
  );
}

export default App;