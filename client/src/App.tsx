import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {



  return (
    <div className='bg-gray-900 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
