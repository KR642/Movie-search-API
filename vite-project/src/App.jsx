import { useState } from 'react'
import Nav from '../components/Nav'
import './App.css'
import MovieSearch from '../components/MovieSearch' 
// import logo from '/logo/logo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='LogoNav'>
    <img src="/logo/logo.png" className="logo" alt="logo" />
    <Nav direction='Horizontal' cl = 'Bg-blue'/>
    </div>
    <div>
      <MovieSearch/>
    </div>
    </>
  )
}

export default App
