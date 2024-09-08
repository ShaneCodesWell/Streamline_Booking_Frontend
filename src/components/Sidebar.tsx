"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
import "boxicons/css/boxicons.min.css";

export default function Sidebar() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Toggle the dark class on the body element when dark mode is switched
    const body = document.querySelector('body');
    if (isDarkMode) {
      body?.classList.add('dark');
    } else {
      body?.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} />
          </span>
          <div className="text logo-text">
            <span className="name">UserName</span>
            <span className="profession">Title</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-calendar icon'></i>
                <span className="text nav-text">Booked Sessions</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-chat icon'></i>
                <span className="text nav-text">Messages</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-heart icon'></i>
                <span className="text nav-text">Saved Blogs</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <Link href="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </Link>
          </li>
          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"} icon`}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? "Light mode" : "Dark mode"}</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
