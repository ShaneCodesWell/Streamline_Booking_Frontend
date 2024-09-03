"use client";
import "../app/globals.css";  // Import the global CSS
import "/styles/custom.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LoginPopup from '../components/LoginPopup';
import SignupPopup from '../components/SignupPopup';

config.autoAddCss = false;

export default function LayoutLoggedIn({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);

  const openLoginPopup = () => {
    setIsSignupPopupOpen(false);
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => setIsLoginPopupOpen(false);

  const openSignupPopup = () => {
    setIsLoginPopupOpen(false);
    setIsSignupPopupOpen(true);
  };

  const closeSignupPopup = () => setIsSignupPopupOpen(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header className="header">
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 2rem' }}>
            <div style={{ flex: 1 }}>
              <a href="/"><Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} /></a>
            </div>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem', flex: 2, justifyContent: 'center' }}>
              <li><Link href="#" className="body-text">Find Tutors</Link></li>
              <li><Link href="/auth/user-selection/become-a-tutor" className="body-text">Become a Tutor</Link></li>
              <li><Link href="/contacts" className="body-text">Contact Us</Link></li>
              <li><Link href="/about" className="body-text">About Us</Link></li>
            </ul>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={openLoginPopup} className="bg-blue-500 text-white py-1 px-4 rounded">Log In</button>
              <button onClick={openSignupPopup} className="bg-blue-500 text-white py-1 px-4 rounded">Sign Up</button>
            </div>
          </nav>
        </header>
        <main style={{ display: 'flex', flex: 1 }}>
          <aside style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '1rem' }}>
            {/* Sidebar content */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link href="/dashboard" className="body-text">Dashboard</Link></li>
              <li><Link href="/profile" className="body-text">Profile</Link></li>
              <li><Link href="/settings" className="body-text">Settings</Link></li>
              <li><Link href="/logout" className="body-text">Log Out</Link></li>
            </ul>
          </aside>
          <div style={{ flex: 1, padding: '1rem' }}>
            {children}
          </div>
        </main>
        <footer className="body-text" style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <h3>&copy; 2024 Streamline Researchers. All rights reserved.</h3>
        </footer>
        <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
        <SignupPopup isOpen={isSignupPopupOpen} onClose={closeSignupPopup} />
      </body>
    </html>
  );
}
