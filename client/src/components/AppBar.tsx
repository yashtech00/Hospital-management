"use client";
import { motion } from "framer-motion";
import useGetMe from "../hooks/hook";

export default function AppBar() {

    const { authUser } = useGetMe();
    console.log(authUser,"authuser");
    


  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, duration: 0.6 }}
      className="shadow-lg rounded-2xl mx-4 p-4 "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          Medi<span className="text-blue-300">Go</span>
        </motion.div>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-6 text-white font-medium">
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="hover:text-blue-300 transition cursor-pointer"
            >
              Home
            </motion.li>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/Appointment"
              className="hover:text-blue-300 transition cursor-pointer"
            >
              <li>Appointment</li>
            </motion.a>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="hover:text-blue-300 transition cursor-pointer"
            >
              About Us
            </motion.li>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/signup"
              className="hover:text-blue-300 px-3 rounded-full transition cursor-pointer"
            >
              <li>Sign Up</li>
            </motion.a>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
