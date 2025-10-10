import './App.css'
import Form from './components/coba'
import Login from './components/ternary'
import ProductList from './components/ternary'




function App() {
  

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen gap-10'>
        <Form />
        <Login />
        <ProductList />
      </div>
    </>
  )
}

export default App
