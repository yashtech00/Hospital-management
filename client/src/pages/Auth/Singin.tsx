import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import type {  SignInProp } from "../../types/AuthType";
import { motion } from "framer-motion";
import {  Lock, Mail, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // use correct env variable for Vite

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (authDetails: SignInProp) => {
      const res = await axios.post(
        `${BACKEND_URL}/api/user/login`,
        authDetails,
        { withCredentials: true }
      );
      return res.data;
    },
    onSuccess: (data) => {
      // console.log("Returned data:", data);
      if (data.data.role == "doctor") {
        navigate("/DoctorAppointments")
      } else {
        navigate("/Appointment")
      }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const authDetails: SignInProp = { email, password, role };
    mutate(authDetails);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
     if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "role") setRole(value);
  };

  const roles = ["patient", "doctor"];

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 w-full max-w-md"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800">Sign In</h2>

        {/* Role Selection */}
        <div className="space-y-3">
          {/* <label className="block text-gray-600">Select Role</label> */}
          <div className="flex justify-center gap-4">
            {roles.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRole(item)}
                className={`cursor-pointer flex items-center gap-3 p-8 rounded-lg border transition-all select-none
                ${role === item ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300"}`}
              >
                <Shield size={20} />
                <span className="capitalize">{item}</span>
                <input
                  type="radio"
                  name="role"
                  value={item}
                  checked={role === item}
                  onChange={handleInput}
                  className="hidden"
                />
              </motion.div>
            ))}
          </div>
        </div>

       

        {/* Email */}
        <div className="space-y-3">
          <label className="block text-gray-600">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInput}
              className="w-full pl-10 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-3">
          <label className="block text-gray-600">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInput}
              className="w-full pl-10 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all"
        >
          {isPending ? "Signing In..." : "Sign In"}
        </motion.button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">SignIn failed. Please try again.</p>
        )}

        {/* Redirect */}
        <p className="text-sm text-gray-600 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </motion.form>
    </div>
  );
}
