import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


function App() {


  const BACKEND_URL = import.meta.env.BACKEND_URL;

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      try {
        const fetch = await axios.get(`${BACKEND_URL}/api/user/me`, { withCredentials: true });
        return fetch.data;
      } catch (err) {
        console.error(err);
      }
    }
  })

  return (
    <div className="h-screen bg-gradient-to-tl from-secondary via-primary to-secondary">
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
