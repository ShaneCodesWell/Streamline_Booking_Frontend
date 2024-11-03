"use client";
import "../app/globals.css";  // Import the global CSS
import "/styles/custom.css";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';  // Correct import for next/navigation
import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import LoginPopup from '../components/LoginPopup';
// import SignupPopup from '../components/SignupPopup';
import Header from '../components/Header';  // Import the Header component
import Footer from '../components/Footer';  // Import the Footer component
import AppFooter from '../components/App_Footer';

config.autoAddCss = false;

export default function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  
  // Add a state for isSidebarClosed
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isContactsPage, setIsContactsPage] = useState(false);

  const pathname = usePathname();  // Correct way to get pathname in app directory

  // useEffect to set the correct page status
  useEffect(() => {
    setIsContactsPage(pathname === "/contacts");
  }, [pathname]);  // Depend on pathname changes

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
    <>
      {/* Header */}
      <Header /> 
      
      <main>
        {children}
      </main>

      {/* Conditionally render Footer or AppFooter based on the route */}
      {isContactsPage ? (
        <AppFooter isSidebarClosed={isSidebarClosed} />
      ) : (
        <Footer />
      )}
    </>
  );
}
