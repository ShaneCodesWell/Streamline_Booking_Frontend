"use client";
import Link from "next/link";
import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function HeaderUser() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link href="/">
            <Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} />
          </Link>
        </div>
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
