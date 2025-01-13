'use client';

import { useState, useEffect } from 'react';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from '../firebase/config'; // Import Firebase methods
import { useRouter } from 'next/navigation'; // For routing
import { User } from 'firebase/auth'; // Import User type from Firebase

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Explicitly define the user state type as User | null
  const router = useRouter();

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Set the user state correctly
    });
    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      console.log('Logged in as:', loggedInUser.displayName);
      // Redirect to resources page after successful login
      router.push('/resources');
    } catch (error) {
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      console.log('Logged out');
      // Redirect to homepage after logout
      router.push('/');
    } catch (error) {
    }
    setLoading(false);
  };

  return (
    <nav className="bg-[#293040] shadow-md flex justify-between items-center p-6 sticky top-0 z-50">
      {/* Left side - 'Need Help?' */}
      <h2 className="text-white font-bold text-3xl">Need Help?</h2>

      {/* Right side - Login / Logout Button */}
      {user ? (
        <button
          onClick={handleLogout}
          disabled={loading}
          className="font-semibold border-2 border-[#FFC107] bg-transparent text-white py-2 px-4 rounded-full hover:bg-[#FFC107] hover:text-[#293040] transition-all"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          disabled={loading}
          className="font-semibold border-2 border-[#FFC107] bg-transparent text-white py-2 px-4 rounded-full hover:bg-[#FFC107] hover:text-[#293040] transition-all"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
