import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'


function App() {



  return (
    <div className="h-screen bg-gradient-to-t from-primary to-secondary">
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={<Home />} /> */}
    </Routes>
  </BrowserRouter>
</div>

  )
}

export default App
