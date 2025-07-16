import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useGetMe from "../hooks/hook";
import { useNavigate } from "react-router-dom";

interface DoctorProp {
  user: string;
  specialization: string;
  experience: number;
  availableDays: string;
}

export default function DoctorInfo() {
  const { authUser, isLoading } = useGetMe();
  const [formData, setFormData] = useState<DoctorProp>({
    user: "",
    specialization: "",
    experience: 0,
    availableDays: "",
  });

    const navigate = useNavigate();
  useEffect(() => {
    if (authUser?.data?.fullname) {
      setFormData((prev) => ({
        ...prev,
        user: authUser.data.fullname,
      }));
    }
  }, [authUser]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { mutate } = useMutation<any, Error, DoctorProp>({
    mutationKey: ["doctor"],
    mutationFn: async (formData: DoctorProp) => {
      const res = await axios.post(`${BACKEND_URL}/api/user/doctor`, formData, {
        withCredentials: true,
      });
      return res.data;
      },
      onSuccess: () => {
        navigate("/DoctorAppointments")
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  if (isLoading) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md bg-background shadow-lg rounded-xl p-6 border-2 border-stone-700">
        <h2 className="text-2xl font-bold text-center  mb-6 text-white">Doctor Info</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white ">Full Name</label>
            <input
              type="text"
              value={formData.user}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  user: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Specialization</label>
            <input
              type="text"
              placeholder="Enter your specialization"
              value={formData.specialization}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  specialization: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Experience (in years)</label>
            <input
              type="number"
              placeholder="Enter your experience"
              value={formData.experience}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  experience: Number(e.target.value),
                }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Available Days</label>
            <select
              value={formData.availableDays}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  availableDays: e.target.value,
                }))
              }
            >
              <option value="">-- Select Days --</option>
              <option value="Mon-Fri">Mon-Fri</option>
              <option value="Mon-Wed-Fri">Mon-Wed-Fri</option>
              <option value="Tue-Thu">Tue-Thu</option>
              <option value="Sat-Sun">Sat-Sun</option>
              <option value="All Days">All Days</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() =>
                setFormData({
                  user: "",
                  specialization: "",
                  experience: 0,
                  availableDays: "",
                })
              }
              className="w-full py-2 px-4 bg-stone-800 text-white font-semibold rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
