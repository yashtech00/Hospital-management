import { useQuery } from "@tanstack/react-query";
import LayoutWrapperSidebar from "../components/LayoutWrapperSidebar";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useState } from "react";


interface AppointProp{
    
}



export default function DoctorAppointments() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const {data:appoint,isLoading,isError } = useQuery<AppointProp[]>({
        queryKey: ["appointment"],
        queryFn: async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/appointment/doctor/appointments`, { withCredentials: true });
                
                console.log(res.data,"appointment");
                
                return res.data;

            } catch (e) {
                console.error(e);
                
            }
        }
    })

     if (isLoading) {
    return <LayoutWrapperSidebar><p className="text-white">Loading appointments...</p></LayoutWrapperSidebar>;
  }

  if (isError) {
    return <LayoutWrapperSidebar><p className="text-red-500">Error loading appointments</p></LayoutWrapperSidebar>;
  }
    

    return (
        <LayoutWrapperSidebar>
        <div className="flex">
        <div className="bg-white w-full h-screen ">
            
                    hello doctor appointments
                    <div>
                        {/* {appoint?.map((appt) => (
                            <div key={Ap._id}>

                            </div>
                        ))} */}
                    </div>
            </div>
            
            </div>
            </LayoutWrapperSidebar>
    )
}