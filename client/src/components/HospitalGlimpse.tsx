// components/HospitalGlimpse.tsx
import { motion } from "framer-motion";
import {
  UserPlus,
  Activity,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "02k+",
    subtitle: "Registered Patients",
    desc: "Patients across India have registered to consult with our specialists.",
    icon: <UserPlus size={32} className="text-blue-600" />,
    color: "bg-blue-600 text-white",
  },
  {
    title: "80%",
    subtitle: "Success Rate",
    desc: "High treatment success rate with modern equipment and experienced staff.",
    icon: <Activity size={32} className="text-blue-600" />,
    color: "bg-white text-black border",
  },
  {
    title: "50+",
    subtitle: "Expert Doctors",
    desc: "Our team includes renowned physicians across 12+ specialties.",
    icon: <Users size={32} className="text-blue-600" />,
    color: "bg-white text-black border",
  },
  {
    title: "95%",
    subtitle: "Happy Patients",
    desc: "Patient satisfaction through personalized care and fast recovery.",
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    color: "bg-blue-600 text-white",
  },
];

export default function HospitalGlimpse() {
  return (
    <section className="py-20 px-4 lg:px-24 ">
      <div className="grid lg:grid-cols-2 gap-12 ">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mt-10"
        >
          <h2 className="text-6xl text-white font-semibold">Our Hospital</h2>
            <h2 className="text-6xl text-white font-semibold">Glimpse</h2>
          <p className="text-gray-400">
            A super specialty hospital offering world-class healthcare solutions.
            Trusted by thousands of patients for diagnostics, surgeries, and long-term care.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Book An Appointment
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 "
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className={`p-6 h-[20rem] ${card.color} ${card.color.includes("border") ? "border-gray-200" : ""} shadow-sm space-y-4`}
            >
              <div className="flex items-center justify-between">
                <div className="bg-white p-2 rounded-full shadow-md">
                  {card.icon}
                </div>
                <ArrowRight className={`${card.color.includes("bg-white") ? "text-black" : "text-white"}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="font-medium">{card.subtitle}</p>
              </div>
              <p className="text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
