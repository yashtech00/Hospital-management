export default function AppBar() {
  return (
      <header className="">
          <div className="bg-gradient-to-r from-primary to-secondary shadow-lg rounded-2xl mx-4 p-4 border-4 ">
      <div className="flex items-center justify-between border-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          Medi<span className="text-yellow-300">Vault</span>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-6 text-white font-medium">
            <li className="hover:text-yellow-300 transition cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 transition cursor-pointer">Appointment</li>
            <li className="hover:text-yellow-300 transition cursor-pointer">About Us</li>
            <li className="hover:bg-yellow-300 hover:text-black px-3 py-1 rounded-full transition cursor-pointer">
              Sign Up
            </li>
          </ul>
        </nav>
              </div>
              </div>
    </header>
  );
}
