// src/components/navbar.tsx
import Link from "next/link"; // For Next.js Link component

const Navbar = () => {
  return (
    <nav className="bg-[#293040] shadow-md flex justify-between items-center p-6 sticky top-0 z-50">
      {/* Left side - 'Need Help?' */}
      <h2 className="text-white font-bold text-3xl">Need Help?</h2>
      
      {/* Right side - Login Button */}
      <Link href="/resources">
        <button className="font-semibold border-2 border-[#FFC107] bg-transparent text-white py-2 px-4 rounded-full hover:bg-[#FFC107] hover:text-[#293040] transition-all">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
