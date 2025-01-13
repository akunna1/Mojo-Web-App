'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js navigation
import { auth } from '../firebase/config'; // Import Firebase auth
import Hero4 from "../components/hero4";

export default function Resources() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If the user is not logged in, redirect to the homepage
        router.push('/');
      }
    });
    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [router]);

  return (
    <div>
      <Hero4 />
    </div>
  );
}
