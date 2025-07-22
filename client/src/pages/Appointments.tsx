import { User, Stethoscope, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface DoctorProp {
  _id: string;
  user: string;
  specialization: string;
  experience: number;
  availableDays: string;
}

export default function Appointments() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { data: doctors, isLoading } = useQuery<DoctorProp[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/user/doctors`, {
        withCredentials: true,
      });
      return res.data.data; // Access actual array of doctors
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Loading...
      </div>
    );
  }

  if (!doctors || doctors.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        No doctors found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Available Doctors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor._id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <User className="w-10 h-10 text-primary bg-gray-100 p-2 rounded-full" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Dr. {doctor.user}
                  </h2>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-2 mb-4">
                <p className="flex items-center gap-2">
                  <Stethoscope size={16} /> {doctor.experience}+ years experience
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={16} /> {doctor.availableDays}
                </p>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
                onClick={() => alert(`Booking appointment with Dr. ${doctor.user}`)}
              >
                Book Appointment
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
