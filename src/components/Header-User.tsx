"use client";
import Link from "next/link";
import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function HeaderUser() {
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
        
      </nav>
    </header>
  );
}
