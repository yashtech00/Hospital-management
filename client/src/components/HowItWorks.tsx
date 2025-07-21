import { Phone, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className=" pb-40 text-center px-4 md:px-20 pt-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works?</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Book appointments with verified doctors in just a few simple steps — no long waits, no hassle. Here’s how you can get started:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Step 1 */}
        <motion.div
          className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Phone className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="font-semibold text-lg mb-2">Register & Verify</h4>
          <p className="text-gray-600 text-sm">
            Sign up using your mobile number or email and complete verification to access trusted healthcare professionals.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Calendar className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="font-semibold text-lg mb-2">Browse & Select Slot</h4>
          <p className="text-gray-600 text-sm mb-4">
            View doctor profiles, check their availability, and choose a time slot that fits your schedule.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <CheckCircle className="text-blue-600 w-8 h-8" />
          </div>
          <h4 className="font-semibold text-lg mb-2">Confirm & Meet</h4>
          <p className="text-gray-600 text-sm">
            Receive instant confirmation and meet your doctor either in-person or via video consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
