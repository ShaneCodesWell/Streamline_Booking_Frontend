"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function Header({
  openLoginPopup,
  openSignupPopup,
}: {
  openLoginPopup: () => void;
  openSignupPopup: () => void;
}) {
  return (
    <header className="header">
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.2rem 2rem' }}>
        <div style={{ flex: 1 }}>
          <Link href="/"><Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} /></Link>
        </div>
        <ul className="nav-links">
          <li><Link href="#" className="nav-item">Find Tutors</Link></li>
          <li><Link href="/auth/user-selection/become-a-tutor" className="nav-item">Become a Tutor</Link></li>
          <li><Link href="/contacts" className="nav-item">Contact Us</Link></li>
          <li><Link href="/about" className="nav-item">About Us</Link></li>
        </ul>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={openLoginPopup} className="bg-blue-500 text-white py-1 px-4 rounded">Log In</button>
          <button onClick={openSignupPopup} className="bg-blue-500 text-white py-1 px-4 rounded">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}
