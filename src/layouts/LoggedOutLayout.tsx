"use client";
import "../app/globals.css";
import "/styles/custom.css";
import { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppFooter from '../components/App_Footer';

config.autoAddCss = false;

export default function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);

  // State for sidebar and footer visibility
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isSpecialFooterPage, setIsSpecialFooterPage] = useState(false);

  const pathname = usePathname();  // Correct way to get pathname in app directory

  // Memoize the list of paths where AppFooter should be rendered
  const appFooterPaths = useMemo(() => ["/contacts", "/auth/signup/trainee", "/auth/signup/tutor"], []);

  // useEffect to set the correct footer based on the current path
  useEffect(() => {
    setIsSpecialFooterPage(appFooterPaths.includes(pathname));
  }, [pathname, appFooterPaths]);  // Depend on pathname and appFooterPaths

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
      {isSpecialFooterPage ? (
        <AppFooter isSidebarClosed={isSidebarClosed} />
      ) : (
        <Footer />
      )}
    </>
  );
}
