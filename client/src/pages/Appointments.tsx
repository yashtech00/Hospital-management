// import { useState } from "react";
// import { User, Stethoscope, Calendar, MapPin } from "lucide-react";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// interface Doctor {
//   id: string;
//   name: string;
//   specialization: string;
//   experience: number;
//   availableDays: string;
// }



// export default function Appointments() {
//   // const [doctors] = useState<Doctor[]>(dummyDoctors);

//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

//   const { data: doctors, isLoading } = useQuery({
//     queryKey: ["doctors"],
//     queryFn: async () => {
//       try {
//         const res = await axios.get(`${BACKEND_URL}/api/user/`) 
//       } catch (e) {
//         console.error(e);
        
//       }
//     }
//   })

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       {/* Page Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Book Your Appointment</h1>
//         <p className="text-gray-500 mt-2">Find experienced doctors and book your visit effortlessly.</p>
//       </div>

//       {/* Doctors Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {doctors.map((doctor) => (
//           <motion.div
//             key={doctor.id}
//             whileHover={{ scale: 1.03 }}
//             className="bg-white rounded-xl shadow-md p-6 space-y-4"
//           >
//             <div className="flex items-center gap-4">
//               <User className="w-12 h-12 text-primary bg-gray-100 p-2 rounded-full" />
//               <div>
//                 <h2 className="text-lg font-semibold">{doctor.name}</h2>
//                 <p className="text-sm text-gray-500">{doctor.specialization}</p>
//               </div>
//             </div>

//             <div className="text-sm text-gray-600 space-y-1">
//               <p className="flex items-center gap-2">
//                 <Stethoscope size={16} /> {doctor.experience}+ years experience
//               </p>
//               <p className="flex items-center gap-2">
//                 <Calendar size={16} /> {doctor.availableDays}
//               </p>
//               <p className="flex items-center gap-2">
//                 <MapPin size={16} /> {doctor.location}
//               </p>
//             </div>

//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all"
//               onClick={() => alert(`Booking appointment with ${doctor.name}`)}
//             >
//               Book Appointment
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
