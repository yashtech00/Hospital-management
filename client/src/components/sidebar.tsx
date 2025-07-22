"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, CalendarDays } from "lucide-react";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, duration: 0.5 }}
      className="h-screen w-[18%] text-white p-6 shadow-lg flex flex-col"
    >
      {/* Logo Section */}
      <div className="text-2xl font-bold mb-10 tracking-wide">
        Medi<span className="text-yellow-300">Go</span>
      </div>

      {/* Navigation Items */}
      <ul className="space-y-6 font-medium">
        <li>
          <button className="flex items-center space-x-3 hover:bg-teal-600 px-4 py-2 rounded-lg transition-all w-full text-left">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button className="flex items-center space-x-3 hover:bg-teal-600 px-4 py-2 rounded-lg transition-all w-full text-left">
            <CalendarDays className="w-5 h-5" />
            <span>Appointments</span>
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
