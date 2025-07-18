import { Star } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative text-white px-20 py-6 flex flex-col md:flex-row items-center justify-between overflow-hidden ">

            <div className="md:w-1/2 mb-10 md:mb-0 space-y-10 ">
                <h1 className="text-4xl font-thin ">GET HIGH QUALITY</h1>
                <p className="text-7xl font-semibold " >Medical Services</p>
                <div className="text-lg">
                    <p className="text-gray-600">Access top-tier medical care from licensed professionals</p>
                    <p className="text-gray-600">anytime,anywhere through our online application</p>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-green-300 p-4 rounded-full text-white font-semibold text-xl"> Book An Appointment</button>
            </div>

            <div className="md-w-1/2 relative flex justify-center -left-32">
                <div className="relative w-[25rem] h-[32rem] rounded-t-[400px] overflow-hidden border-8 border-white shadow-xl z-10">
                    <img
                        src="https://media.istockphoto.com/id/1302166116/photo/capable-general-practitioner-demonstrating-patient-test-results-in-electronic-format.jpg?s=612x612&w=0&k=20&c=Qxdzfa7SuXOpIDj7ik--8nt1EMdu-8ypGMABV6NTU4s="
                        alt="Doctor with patient"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-2 -left-14 bg-white rounded-xl shadow-lg px-6 py-2 flex items-center gap-2 z-20">
                    <div className="flex -space-x-2">
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920" alt="" />
                        <img className="w-6 h-6 rounded-full border-2 border-white" src="https://png.pngtree.com/thumb_back/fw800/background/20230316/pngtree-biometric-passport-photo-of-attractive-femalenatural-look-healthy-skin-photo-image_50880378.jpg" alt="" />
                    </div>
                    <div>
                        <span className="text-sm font-semibold text-black">Review</span>
                        <div className="flex items-center text-blue-500 font-bold text-sm">
                            4.5 <Star className="ml-1 w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                    </div>
                </div>

                <div className="absolute top-4 -right-28 bg-white rounded-xl shadow-lg p-4 w-52 z-20">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://imgcdn.stablediffusionweb.com/2025/1/19/7446a89d-4060-4eed-b51e-5b70d931ee2f.jpg"
                            className="w-10 h-10 rounded-full"
                            alt="Doctor Avatar"
                        />
                        <div className="text-black">
                            <p className="font-bold text-sm">Dr. Tulika Vat</p>
                            <a href="#" className="text-blue-500 text-sm font-semibold">Check Availability</a>
                        </div>
                    </div>
                </div>

                {/* Specialty Card */}
                <div className="absolute bottom-2 -right-40 bg-yellow-100 rounded-xl shadow-md p-4 w-64 z-20 text-black">
                    <p className="font-semibold text-sm mb-1">Specialty of eka.care</p>
                    <p className="text-xs text-gray-700">
                        Personalized care in general medicine, women's health, and preventive diagnostics. Focused on holistic well-being and long-term health.
                    </p>
                </div>
            </div>
        </div>
    )
}

