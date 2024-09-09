import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Men from './pages/Men'
import Women from './pages/Women'
import New from './pages/New'
import Cart from './pages/Cart'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/new' element={<New />} />
          <Route path='/cart' element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
