import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'

import Signin from './pages/Auth/Singin'
// import Appointments from './pages/Appointments'
import DoctorInfo from './pages/DoctorInfo'
import DoctorAppointments from './pages/DoctorAppointments'
import PatientInfo from './pages/PatientInfo'
import DoctorDashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import { Toaster } from 'react-hot-toast'
import useGetMe from './hooks/hook'
import PatientDashboard from './pages/PatientDashboard'


function App() {

  const { authUser } = useGetMe();

  return (
    <div className="h-full bg-teal-50">
  <BrowserRouter>
    <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/doctorInfo' element={<DoctorInfo />} />
          <Route path='/patientInfo' element={<PatientInfo/>} />
          <Route path="/Appointment" element={authUser ? <Appointments /> : <Home />}/>
          <Route path='/DoctorAppointments' element={authUser ? <DoctorAppointments />: <Home/>} />
          <Route path='/DoctorDashboard' element={authUser? <DoctorDashboard/>:<Home/>} />
        
          <Route path='/PatientDashboard' element={authUser ? <PatientDashboard /> : <Home />} />
    </Routes>
         <Toaster position="bottom-center" toastOptions={{
        className: "bg-violet-500 text-white",
        duration: 2000,
        style: {
          backgroundColor: '#3b0968',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          border: '2px solid stone-900'
        }
      }} />
  </BrowserRouter>
</div>

  )
}

export default App
