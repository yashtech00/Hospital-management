import { User, Stethoscope, Calendar, Search, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGetMe from "../hooks/hook";
import toast from "react-hot-toast";
import { useState } from "react";

interface DoctorProp {
  _id: string;
  user: {
    fullname: string;
  }
  specialization: string;
  experience: number;
  availableDays: string;
}

export default function Appointments() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { authUser } = useGetMe();

  const [search, setSearch] = useState("");

  const { data: doctors, isLoading } = useQuery<DoctorProp[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/user/doctors`, {
        withCredentials: true,
      });
      console.log(res.data, "doc");

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

  const FilterDoctor = doctors.filter((doctor) => (
    doctor.user.fullname.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(search.toLowerCase())
  ));


  const handleFilter = (e: any) => {
    setSearch(e.target.value)
  }

  const handleClear = () => {
    setSearch("");
  }

  



  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Available Doctors
        </h1>
        <div className="relative w-[70%] mx-auto mt-6 mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />

          <input
            type="text"
            placeholder="Search by name or keyword"
            className="pl-12 pr-4 py-4 w-full rounded-xl border border-gray-300 outline-none"
            onChange={handleFilter}
          />

          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
            onClick={handleClear}>
            Clear
          </button>
        </div>


        
        {FilterDoctor.length == 0 ? (
          <div className="mt-40 text-gray-600 text-center text-lg">
            No results found, sorry.
          </div>
        ) : (
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FilterDoctor.map((doctor) => (
              <motion.div
                key={doctor._id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <User className="w-10 h-10 text-primary bg-gray-100 p-2 rounded-full" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Dr. {doctor.user.fullname}
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
                  onClick={handleBooking}
                >
                  Book Appointment
                </motion.button>
              </motion.div>
            ))
            }
          </div>
        )}
      </div>
      </div>
  );
}
