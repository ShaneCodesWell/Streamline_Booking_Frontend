"use client";
import "./globals.css";
import "/styles/custom.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Roboto } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LoginPopup from '../components/LoginPopup';
import SignupPopup from '../components/SignupPopup';

config.autoAddCss = false;

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
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
      <body style={{ margin: 0, padding: 0 }}>
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
        {children}
        <footer className="body-text" style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <h3>&copy; 2024 Streamline Researchers. All rights reserved.</h3>
        </footer>
        <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
        <SignupPopup isOpen={isSignupPopupOpen} onClose={closeSignupPopup} />
      </body>
    </html>
  );
}
