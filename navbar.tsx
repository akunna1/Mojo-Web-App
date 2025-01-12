// src/components/navbar.tsx
'use client'; // Add this to specify it's a client component

import { useState } from 'react';
import { auth, GoogleAuthProvider, signInWithPopup } from '../firebase/config'; // Import Firebase methods
import { useRouter } from 'next/navigation'; // Updated import for Next.js 13 and later

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Using updated useRouter from next/navigation

  const handleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in as:', user.displayName);
      // Redirect to resources page after successful login
      router.push('/resources');
    } catch (error) {
      // Error logging removed
    }
    setLoading(false);
  };

  return (
    <nav className="bg-[#293040] shadow-md flex justify-between items-center p-6 sticky top-0 z-50">
      {/* Left side - 'Need Help?' */}
      <h2 className="text-white font-bold text-3xl">Need Help?</h2>
      
      {/* Right side - Login Button */}
      <button
        onClick={handleLogin}
        disabled={loading}
        className="font-semibold border-2 border-[#FFC107] bg-transparent text-white py-2 px-4 rounded-full hover:bg-[#FFC107] hover:text-[#293040] transition-all"
      >
        {'Login'}
      </button>
    </nav>
  );
};

export default Navbar;
