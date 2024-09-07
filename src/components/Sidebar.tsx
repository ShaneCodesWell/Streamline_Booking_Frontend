"use client";
import { useState } from "react";
import Link from "next/link";
import "../app/globals.css";
// import "boxicons/css/boxicons.min.css";  // Import the Boxicons CSS

export default function Sidebar() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""} ${isDarkMode ? "dark" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            {/* Add your logo here */}
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
          {/* <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
          </li> */}
          <ul className="menu-links">
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>
            {/* <li className="nav-link">
              <Link href="#">
                <i className='bx bx-bar-chart-alt-2 icon'></i>
                <span className="text nav-text">Revenue</span>
              </Link>
            </li> */}
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-bell icon'></i>
                <span className="text nav-text">Booked Sessions</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-pie-chart-alt icon'></i>
                <span className="text nav-text">Messages</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#">
                <i className='bx bx-heart icon'></i>
                <span className="text nav-text">Saved Blogs</span>
              </Link>
            </li>
            {/* <li className="nav-link">
              <Link href="#">
                <i className='bx bx-wallet icon'></i>
                <span className="text nav-text">Wallets</span>
              </Link>
            </li> */}
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
