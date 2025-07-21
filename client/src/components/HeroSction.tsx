import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative text-white px-20 py-10 pt-14 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="ml-10 md:w-1/2 mb-32"
            >
                <div className="space-y-10 p-4">
                    <h1 className="text-4xl font-thin">GET HIGH QUALITY</h1>
                    <p className="text-7xl font-semibold">Medical Services</p>
                    <div className="text-lg text-gray-600">
                        <p>Access top-tier medical care from licensed professionals</p>
                        <p>anytime, anywhere through our online application</p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-teal-300 p-4 rounded-full text-white font-semibold text-xl">
                        Book An Appointment
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="md-w-1/2 relative flex justify-center right-8 bottom-10 w-[600px]"
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
