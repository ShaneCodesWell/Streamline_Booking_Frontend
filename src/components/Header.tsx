"use client";
import Link from "next/link";
import Image from "next/image";
import Login from '../components/LoginPopup';
import Signup from '../components/SignupPopup';
import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function Header() {
  return (
    <header className="header">
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.2rem 2rem' }}>
        <div style={{ flex: 1 }}>
          <Link href="/"><Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} /></Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/find-tutors" className="nav-item">Find Tutors</Link></li>
          <li><Link href="/auth/user-selection/become-a-tutor" className="nav-item">Become a Tutor</Link></li>
          <li><Link href="/contacts" className="nav-item">Contact Us</Link></li>
          <li><Link href="/about" className="nav-item">About Us</Link></li>
        </ul>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Login />
          <Signup />
        </div>
      </nav>
    </header>
  );
}
