import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface BookingFormProp {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProp) {
  const [formData, setFormData] = useState({
    fullname: "",
    number: "",
    date: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    
      const { data } = useQuery({
          queryKey: ["bookingForm"],
          queryFn: async () => {
              const res = await axios.post(`${BACKEND_URL}/api/appointment/`)
          }
      })
      
      
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[400px]">
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInput}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInput}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your number"
            />
          </div>
          <div>
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInput}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-gray-500 px-4 py-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
