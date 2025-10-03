function getGreeting(isLoggedIn) {
  if (isLoggedIn) {
    return <h1>Selamat datang kembali!</h1>;
  } else {
    return <h1>Silakan masuk.</h1>;
  }
}

function App() {
  const isLoggedIn = false;// klo true diakan ambil yang "selamat datang kembali!"
  return (
    <div>
      {getGreeting(isLoggedIn)}
    </div>
  );
}

export default App;