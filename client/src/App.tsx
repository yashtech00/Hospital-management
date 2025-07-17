import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Signin from './pages/Auth/Singin'
// import Appointments from './pages/Appointments'
import DoctorInfo from './pages/DoctorInfo'
import DoctorAppointments from './pages/DoctorAppointments'
import PatientInfo from './pages/PatientInfo'


function App() {


  // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // const { data } = useQuery({
  //   queryKey: ["me"],
  //   queryFn: async () => {
  //     try {
  //       const fetch = await axios.get(`${BACKEND_URL}/api/user/me`, { withCredentials: true });
  //       return fetch.data;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // })

  return (
    <div className="h-screen bg-gradient-to-tl from-secondary via-primary to-secondary">
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/doctorInfo' element={<DoctorInfo />} />
          <Route path='/patientInfo' element={<PatientInfo/>} />
          {/* <Route path="/Appointment" element={<Appointments />} /> */}
          <Route path='/DoctorAppointments' element={<DoctorAppointments/>} />
    </Routes>
  </BrowserRouter>
</div>

  )
}

export default App
