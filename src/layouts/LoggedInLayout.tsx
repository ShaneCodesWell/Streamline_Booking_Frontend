"use client";
import "../app/globals.css";  // Import the global CSS
import "/styles/custom.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeaderUser from '../components/Header-User';
import AppFooter from '../components/App_Footer';
import Sidebar from '../components/Sidebar'; 
import { useState } from "react";

config.autoAddCss = false;

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);

  const handleToggleSidebar = (isClosed: boolean) => {
    setIsSidebarClosed(isClosed);
  };

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Use the Header component with the required prop */}
        <HeaderUser isSidebarClosed={isSidebarClosed} />

        <main style={{ display: 'flex', flex: 1 }}>
          {/* Use the Sidebar component */}
          <Sidebar onToggle={handleToggleSidebar} />

          {/* Adjust content padding based on sidebar state */}
          <div style={{ 
            flex: 1, 
            padding: '1rem 2rem', 
            transition: 'margin-left 0.3s ease', 
            marginLeft: isSidebarClosed ? '88px' : '250px' 
          }}>
            {children}
          </div>
        </main>

        {/* Pass the sidebar state to the Footer component */}
        <AppFooter isSidebarClosed={isSidebarClosed} />
      </body>
    </html>
  );
}
