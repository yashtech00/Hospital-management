export default function AppBar() {
    return (
        <div className="shadow-lg rounded-2xl mx-4 p-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold tracking-wide">
                    Medi<span className="">Go</span>
                </div>
                {/* Nav Links */}
                <nav>
                    <ul className="flex space-x-6 text-white font-medium">
                        <li className="hover:text-yellow-300 transition cursor-pointer">Home</li>
                        <a href="/Appointment">
                            <li className="hover:text-yellow-300 transition cursor-pointer">Appointment</li>
                            </a>
                        <li className="hover:text-yellow-300 transition cursor-pointer">About Us</li>
                        <a href="/signup">
                        <li className="hover:bg-yellow-300 hover:text-black px-3  rounded-full transition cursor-pointer">
                            Sign Up
                            </li>
                            </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
