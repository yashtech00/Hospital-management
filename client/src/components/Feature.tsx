import { Mail, MapPin, Phone } from "lucide-react";

export default function Features() {
    return (
        <div className="mt-40">
            <div className="text-center mb-12 px-4 ">
                <h1 className="text-3xl font-bold mb-4 text-white">Book an Appointment</h1>
                <p className="max-w-3xl mx-auto text-gray-400">
                    Easily book an in-clinic or tele consultation appointment with experienced doctors. Your health is our top priority.
                </p>
                <div className="mt-6 space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full">In-clinic Consultation</button>
                    <button className="bg-gray-100 text-blue-500 px-4 py-2 rounded-full border border-blue-300">Tele Consultation</button>
                </div>
            </div>
            <div className="border-t-2 border-l-2 border-r-2 border-teal-900 mx-14 my-14 rounded-3xl">
                <section className="py-8 px-4 md:px-16">
                    <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start">
                        {/* Left Side */}
                        <div className="flex-1 relative">
                            {/* Doctor Images */}
                            <div className="rounded-xl overflow-hidden mb-4 w-[300px] h-[350px] border-4">
                                <img
                                    src="https://www.usnews.com/object/image/00000184-5d22-d253-a784-dda799cf0000/gettyimages-1390026192.jpg"
                                    alt="doctor-1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden w-72 h-48 absolute top-0 left-80 shadow-lg z-0 border-4">
                                <img
                                    src="https://www.chenmed.com/sites/default/files/2024-06/Patient-Centered%20Care%20Strategies%20for%20Building%20Strong%20Doctor-Patient%20Relationships%20.jpg"
                                    alt="doctor-2"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Doctor Info Card */}
                            <div className="relative z-10 bottom-48 left-64 bg-white rounded-2xl shadow-lg p-8 w-80 border-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="https://i.pravatar.cc/100?img=12"
                                        alt="doctor"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold">Ashutosh Singh</p>
                                        <p className="text-sm text-gray-500">20 years of experience</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 mt-1" />
                                        <p>A. J. Aise Road, Behind Alankar Theatre Udupi - 576101</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <p>0820–2343234</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <p>Fax: 0820–2343234</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <p>manishmahant@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Calendar and Slots */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-[400px]">
                            <p className="text-gray-700 font-medium mb-2">Wednesday, 14 February</p>

                            {/* Calendar Header */}
                            <div className="mb-2">
                                <p className="text-sm text-gray-500 mb-2">February, 2024</p>
                                <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 gap-y-1 mb-2">
                                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                                        <div key={d}>{d}</div>
                                    ))}
                                </div>

                                {/* Calendar Days */}
                                <div className="grid grid-cols-7 text-center text-sm text-gray-700 gap-y-2">
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 rounded-full w-8 h-8 mx-auto ${i + 1 === 14 ? "bg-teal-500 text-white" : ""
                                                }`}
                                        >
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <p className="text-sm text-gray-500 mt-4 mb-2">Slots Available</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["11:00", "11:30", "12:00", "12:30", "01:00", "05:00", "05:30"].map((time) => (
                                    <button
                                        key={time}
                                        className={`px-3 py-1 rounded-full border ${time === "05:00"
                                                ? "bg-teal-500 text-white"
                                                : "text-gray-700 border-gray-300"
                                            } text-sm`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>

                            {/* Book Button */}
                            <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full text-sm font-medium">
                                Book Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
