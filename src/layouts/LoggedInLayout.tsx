"use client";
import "../app/globals.css";  // Import the global CSS
import "/styles/custom.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeaderUser from '../components/Header-User';  // Import the Header component
import Footer from '../components/Footer';  // Import the Footer component
import Sidebar from '../components/Sidebar';  // Import the Sidebar component

config.autoAddCss = false;

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Use the Header component */}
        <HeaderUser />

        <main style={{ display: 'flex', flex: 1 }}>
          {/* Use the Sidebar component */}
          <Sidebar />
          
          <div style={{ flex: 1, padding: '1rem' }}>
            {children}
          </div>
        </main>

        {/* Use the Footer component */}
        <Footer />
      </body>
    </html>
  );
}
