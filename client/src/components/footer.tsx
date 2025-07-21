import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Hospital</h3>
          <p className="text-sm leading-6 text-gray-300">
            Empowering better health through modern technology and compassionate care. We provide expert medical services for every need.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Outpatient & Inpatient Care</li>
            <li>Diagnostic & Lab Services</li>
            <li>24/7 Emergency Room</li>
            <li>Specialist Appointments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: help@ourhospital.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>123 Health Street, New Delhi</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white text-[#0a2540] rounded-full hover:bg-blue-100 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 bg-white text-[#0a2540] rounded-full hover:bg-blue-100 transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 bg-white text-[#0a2540] rounded-full hover:bg-blue-100 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 bg-white text-[#0a2540] rounded-full hover:bg-blue-100 transition">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} Our Hospital. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
