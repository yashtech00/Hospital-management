import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface DoctorProp {
  user: string;
  specialization: string;
  experience: number;
  availableDays: string;
}

export default function DoctorInfo() {
  const [formData, setFormData] = useState<DoctorProp>({
    user: "",
    specialization: "",
    experience: 0,
    availableDays: "",
  });

  const BACKEND_URL = import.meta.env.BACKEND_URL;

  const { mutate, data, isLoading } = useMutation({
    mutationKey: ["doctor"],
    mutationFn: async (formData: DoctorProp) => {
      try {
        const res = await axios.post(`${BACKEND_URL}/api/user/doctor`, formData, {
          withCredentials: true,
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Doctor Info</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
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
            <label className="block text-sm font-medium text-gray-700">Specialization</label>
            <input
              type="text"
              placeholder="Enter your specialization"
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
            <label className="block text-sm font-medium text-gray-700">Experience (in years)</label>
            <input
              type="number"
              placeholder="Enter your experience"
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
            <label className="block text-sm font-medium text-gray-700">Available Days</label>
            <select
              title="Available Days"
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
              disabled={isLoading}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => setFormData({ user: "", specialization: "", experience: 0, availableDays: "" })}
              className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
