import Navbar from './components/Navbar'
import Contacto from './views/Contacto'
import Home from './views/Home'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Contacto' element={<Contacto></Contacto>}></Route>
      </Routes>
      
    </>
  )
}

export default App
