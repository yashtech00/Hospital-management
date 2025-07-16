import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useGetMe from "../hooks/hook";
import { useNavigate } from "react-router-dom";

interface PatientProp {
  user: string;
  age: number;
  gender: string;
  address: string;
  bloodGroup: string;
  medicalHistory: string[];
}

export default function PatientInfo() {
  const { authUser, isLoading } = useGetMe();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PatientProp>({
    user: "",
    age: 0,
    gender: "",
    address: "",
    bloodGroup: "",
    medicalHistory: [""],
  });

  useEffect(() => {
    if (authUser?.data?.fullname) {
      setFormData((prev) => ({
        ...prev,
        user: authUser.data.fullname,
      }));
    }
  }, [authUser]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { mutate } = useMutation<any, Error, PatientProp>({
    mutationKey: ["patient"],
    mutationFn: async (formData: PatientProp) => {
      const res = await axios.post(`${BACKEND_URL}/api/user/patient`, formData, {
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      navigate("/Appointment");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  if (isLoading) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md bg-background shadow-lg rounded-xl p-6 border-2 border-stone-700 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Patient Info</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={formData.user}
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-black"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  user: e.target.value,
                }))
              }
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              value={formData.age}
              placeholder="Enter your age"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-black"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  age: Number(e.target.value),
                }))
              }
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              value={formData.gender}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-black"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }))
              }
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              value={formData.address}
              placeholder="Enter your address"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-black"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium">Blood Group</label>
            <input
              type="text"
              value={formData.bloodGroup}
              placeholder="e.g., A+, O-, AB+"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-black"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  bloodGroup: e.target.value,
                }))
              }
            />
          </div>

          {/* Medical History */}
          <div>
            <label className="block text-sm font-medium">Medical History</label>
            <textarea
              value={formData.medicalHistory.join(", ")}
              placeholder="Enter medical conditions separated by commas"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-black"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  medicalHistory: e.target.value.split(",").map((item) => item.trim()),
                }))
              }
            />
          </div>

          {/* Buttons */}
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
                  age: 0,
                  gender: "",
                  address: "",
                  bloodGroup: "",
                  medicalHistory: [""],
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
