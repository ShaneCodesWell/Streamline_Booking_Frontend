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
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 2rem' }}>
        <div style={{ flex: 1 }}>
          <Link href="/"><Image src="/assets/images/Logo.svg" alt="brand-logo" width={60} height={60} /></Link>
        </div>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem', flex: 2, justifyContent: 'center' }}>
          <li><Link href="#" className="body-text">Find Tutors</Link></li>
          <li><Link href="/auth/user-selection/become-a-tutor" className="body-text">Become a Tutor</Link></li>
          <li><Link href="/contacts" className="body-text">Contact Us</Link></li>
          <li><Link href="/about" className="body-text">About Us</Link></li>
        </ul>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={openLoginPopup} className="bg-blue-500 text-white py-1 px-4 rounded">Log In</button>
          <button onClick={openSignupPopup} className="bg-blue-500 text-white py-1 px-4 rounded">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}
