import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, CalendarDays, LogOut } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens, user data, etc. (example)
    localStorage.clear();
    navigate("/"); // or wherever your login page is
  };

  return (
    <div className="h-screen w-[18%] text-white p-6 shadow-lg flex flex-col ">
      <div className="text-2xl font-bold mb-10 tracking-wide">
        Medi<span className="text-yellow-300">Go</span>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-4 font-medium flex-grow">
        <li>
          <NavLink
            to="/DoctorDashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all w-full text-left 
              ${isActive ? "bg-teal-600" : "hover:bg-teal-600"}`
            }
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/DoctorAppointments"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all w-full text-left 
              ${isActive ? "bg-teal-600" : "hover:bg-teal-600"}`
            }
          >
            <CalendarDays className="w-5 h-5" />
            <span>Appointments</span>
          </NavLink>
        </li>
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all w-full text-left hover:bg-teal-600"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}
