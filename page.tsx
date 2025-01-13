// src/app/resources/page.tsx
'use client'; // Indicate this is a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js navigation
import { auth } from '../firebase/config'; // Import Firebase auth

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
      <h1 className="text-5xl">Resources Page</h1>
      <p>Here are some resources for Mojo...</p>
    </div>
  );
}
