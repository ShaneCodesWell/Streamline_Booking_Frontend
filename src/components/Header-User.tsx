"use client";
import Link from "next/link";
import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

// Define the props type for HeaderUser
interface HeaderUserProps {
  isSidebarClosed: boolean;
}

export default function HeaderUser({ isSidebarClosed }: HeaderUserProps) {
  return (
    <header
      className="header"
      style={{
        transition: "margin-left 0.3s ease",
        marginLeft: isSidebarClosed ? "88px" : "80px",  // Adjust margin based on sidebar state
      }}
    >
      <nav className="nav-container">
        <ul className="nav-links">
          <li><Link href="#" className="nav-item">Find Tutors</Link></li>
          <li><Link href="/auth/user-selection/become-a-tutor" className="nav-item">Become a Tutor</Link></li>
          <li><Link href="/contacts" className="nav-item">Contact Us</Link></li>
          <li><Link href="/about" className="nav-item">About Us</Link></li>
        </ul>
        <div className="profile">
          <Image src="/assets/images/Shane.jpg" alt="Profile" width={40} height={40} className="profile-pic" />
          <span className="user-name">Shane Mensah</span>
        </div>
      </nav>
    </header>
  );
}
