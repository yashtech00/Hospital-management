import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useGetMe from "../hooks/hook";

export default function Hero() {
    const { authUser } = useGetMe();
    const navigate = useNavigate();

    const handleButton = () => {
        if (!authUser) {
            navigate("/signup");
        } else {
            navigate("/Appointments");
        }
    };

    return (
        <div className="relative px-20 py-10 pt-14 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="ml-2 md:w-[60%] mb-32"
            >
                <div className="pl-4 space-y-1">
                    <h5 className="flex pl-4 gap-2 items-center">
                        <p className="bg-blue-600 text-white px-2 rounded-full text-xs">NEW</p>
                        <p className="text-xs">BRINGING HOPE AND JOY DAILY</p>
                    </h5>
                    <h1 className="text-5xl font-thin">GET HIGH QUALITY</h1>
                </div>
                <div className="space-y-8 p-4">
                    <p className="text-8xl font-semibold">Medical Services</p>
                    <div className="text-lg text-gray-600">
                        <p>Access top-tier medical care from licensed professionals</p>
                        <p>anytime, anywhere through our online application</p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex gap-4 flex-wrap items-center">
                        <button
                            onClick={handleButton}
                            className="bg-gradient-to-r from-blue-600 to-teal-300 p-4 rounded-full text-white font-semibold text-xl"
                        >
                            Book An Appointment
                        </button>
                        <Link
                            to="/doctors"
                            className="border border-blue-500 text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-50"
                        >
                            View Doctors
                        </Link>
                    </div>
                    <div className="mt-4 text-red-600 font-semibold text-lg">
                        🚨 Emergency? Call us now: <span className="underline">+91-9876543210</span>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">✅ <span>100% Verified Doctors</span></div>
                        <div className="flex items-center gap-2">📞 <span>24x7 Online Support</span></div>
                        <div className="flex items-center gap-2">🏥 <span>500+ Clinics Connected</span></div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-10 mt-4">
                        <div>
                            <p className="text-2xl font-bold text-blue-600">15K+</p>
                            <p className="text-sm text-gray-500">Appointments Booked</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-blue-600">1K+</p>
                            <p className="text-sm text-gray-500">Doctors Available</p>
                        </div>
                    </div>

                    {/* Optional Testimonial */}
                    <div className="mt-2 italic text-sm text-gray-500">
                        “Booked my appointment in seconds. So smooth and reliable!” –{" "}
                        <span className="font-semibold text-gray-700">Anjali P.</span>
                    </div>
                </div>
            </motion.div>

            {/* Right-side Image and Cards */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="md-w-1/2 relative flex justify-center right-8 bottom-16 w-[600px]"
            >
                <div className="relative w-[29rem] h-[39rem] rounded-t-[400px] overflow-hidden border-8 border-white shadow-xl z-10">
                    <img
                        src="https://media.istockphoto.com/id/1302166116/photo/capable-general-practitioner-demonstrating-patient-test-results-in-electronic-format.jpg?s=612x612&w=0&k=20&c=Qxdzfa7SuXOpIDj7ik--8nt1EMdu-8ypGMABV6NTU4s="
                        alt="Doctor with patient"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Happy Patients */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-2 -left-24 bg-teal-50 text-black rounded-xl shadow-lg px-6 py-4 flex items-center gap-10 z-20"
                >
                    <div className="space-y-0">
                        <p className="text-xl font-bold text-gray-800">10K</p>
                        <p className="font-normal">Happy patient</p>
                    </div>
                </motion.div>

                {/* Review Card */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-2 left-4 bg-white rounded-xl shadow-lg px-6 py-1 flex items-center gap-2 z-20"
                >
                    <div className="flex -space-x-2 border-2 border-teal-500 rounded-full">
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920" alt="" />
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="" />
                    </div>
                    <div>
                        <span className="text-lg font-semibold text-gray-800">Review</span>
                        <div className="flex items-center text-blue-500 font-bold text-lg">
                            4.5 <Star className="ml-1 w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </div>
                    </div>
                </motion.div>

                {/* Doctor Card */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="absolute top-6 -right-10 bg-white rounded-xl shadow-lg p-2 w-[15rem] z-20"
                >
                    <div className="flex items-center gap-6">
                        <img
                            src="https://imgcdn.stablediffusionweb.com/2025/1/19/7446a89d-4060-4eed-b51e-5b70d931ee2f.jpg"
                            className="w-12 h-12 rounded-full"
                            alt="Doctor Avatar"
                        />
                        <div className="text-black">
                            <p className="font-bold text-lg text-gray-800">Dr. Tulika Vat</p>
                            <a href="#" className="text-blue-500 text-sm font-semibold">Check Availability</a>
                        </div>
                    </div>
                </motion.div>

                {/* Specialty Card */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-2 -right-14 bg-yellow-100 rounded-xl shadow-md p-4 w-64 z-20 text-black"
                >
                    <p className="font-semibold text-sm mb-1">Specialty of eka.care</p>
                    <p className="text-xs text-gray-700">
                        Personalized care in general medicine, women's health, and preventive diagnostics. Focused on holistic well-being and long-term health.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
