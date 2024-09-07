"use client";
import "../app/globals.css";  // Import the global CSS
import "/styles/custom.css";
import { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LoginPopup from '../components/LoginPopup';
import SignupPopup from '../components/SignupPopup';
import Header from '../components/Header';  // Import the Header component
import Footer from '../components/Footer';  // Import the Footer component

config.autoAddCss = false;

export default function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
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
        {/* Header */}
        <Header openLoginPopup={openLoginPopup} openSignupPopup={openSignupPopup} /> 
        <main style={{ flex: 1, padding: '1rem' }}>
          {children}
        </main>
        {/* Footer */}
        <Footer />
        {/* Popups */}
        <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
        <SignupPopup isOpen={isSignupPopupOpen} onClose={closeSignupPopup} />
      </body>
    </html>
  );
}
