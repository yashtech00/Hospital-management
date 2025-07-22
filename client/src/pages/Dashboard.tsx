import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LayoutWrapperSidebar from "../components/LayoutWrapperSidebar";
import useGetMe from "../hooks/hook";
import axios from "axios";
import { motion } from "framer-motion";
import { CalendarDays, Users, ClipboardList, Star } from "lucide-react";

export default function DoctorDashboard() {
    const { authUser, isLoading: authLoading } = useGetMe();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const [docId, setDocId] = useState<string | null>(null);

    useEffect(() => {
        if (authUser?.data?._id) {
            const timeout = setTimeout(() => {
                setDocId(authUser.data._id);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [authUser]);

    const { data: doctor, isLoading, error } = useQuery({
        queryKey: ["doctor", docId],
        queryFn: async () => {
            if (!docId) return null;
            const res = await axios.get(`${BACKEND_URL}/api/user/doctor/${docId}`, {
                withCredentials: true,
            });
            return res.data.data;
        },
        enabled: !!docId,
    });

    if (authLoading || isLoading || !docId) {
        return (
            <LayoutWrapperSidebar>
                <div className="text-center text-xl text-black h-screen bg-white">
                    <p className="py-20">
                        Loading...
                    </p>
                </div>
            </LayoutWrapperSidebar>
        )
    }

    if (error || !doctor) {
        return <div className="text-center text-red-600">Error loading doctor data or doctor not found.</div>;
    }

    return (
        <LayoutWrapperSidebar>
            <div className="p-6 bg-gray-100 min-h-screen">
                <motion.div
                    className="p-6 bg-gray-100 min-h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome, Dr. {doctor.user?.fullname || "Doctor"}
                        </h1>
                        <p className="text-gray-600">Here’s your dashboard overview</p>
                    </div>

                    {/* Info Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-6 mb-8"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <div className="bg-white p-5 rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Doctor Information</h2>
                            <p><strong>Email:</strong> {doctor.user?.email}</p>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Experience:</strong> {doctor.experience} years</p>
                            <p><strong>Available Days:</strong> {doctor.availableDays}</p>
                            <p><strong>Phone:</strong> +91-9876543210</p>
                            <p><strong>Clinic:</strong> City Health Clinic</p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard Icon={CalendarDays} label="Appointments Today" value="12" />
                            <StatCard Icon={Users} label="Patients This Month" value="87" />
                            <StatCard Icon={ClipboardList} label="Pending Tasks" value="5" />
                            <StatCard Icon={Star} label="Average Rating" value="4.8" />
                        </div>
                    </motion.div>

                    {/* Upcoming Appointments */}
                    <Section title="Upcoming Appointments">
                        <table className="w-full text-sm mt-3">
                            <thead className="bg-gray-200 text-gray-600">
                                <tr>
                                    <th className="p-2">Patient</th>
                                    <th className="p-2">Time</th>
                                    <th className="p-2">Type</th>
                                    <th className="p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="border-t">
                                    <td className="p-2">Anita Sharma</td>
                                    <td className="p-2">10:30 AM</td>
                                    <td className="p-2">Consultation</td>
                                    <td className="p-2 text-green-600">Confirmed</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Rahul Verma</td>
                                    <td className="p-2">11:15 AM</td>
                                    <td className="p-2">Follow-up</td>
                                    <td className="p-2 text-yellow-600">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </Section>

                    {/* Recent Activity */}
                    <Section title="Recent Patient Activity">
                        <ul className="space-y-2 mt-3 text-sm">
                            <li>📝 Ritu Singh - Diagnosed with Migraine</li>
                            <li>📝 Aditya Mehta - Prescribed blood test</li>
                            <li>📝 Sunita Rao - Advised physiotherapy</li>
                        </ul>
                    </Section>
                </motion.div>
            </div>
        </LayoutWrapperSidebar>
    );
}

// Reusable Stat Card Component
function StatCard({ Icon, label, value }: { Icon: any, label: string, value: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3"
        >
            <Icon className="text-blue-600" />
            <div>
                <p className="text-xl font-bold">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
            </div>
        </motion.div>
    );
}

// Reusable Section Wrapper
function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <motion.div
            className="bg-white p-5 rounded-xl shadow-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
            {children}
        </motion.div>
    );
}
