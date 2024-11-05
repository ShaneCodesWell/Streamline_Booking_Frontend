"use client"; 
import Link from "next/link";
import Image from "next/image";
import Login from '../components/LoginPopup';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Button } from '@mui/material';

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
          <Link href="/auth/user-selection">
          <Button variant="contained"
            sx={{ textTransform: 'none' }} className="bg-blue-500 text-white py-1 px-4 rounded">
                Sign Up
          </Button>

          </Link>
        </div>
      </nav>
    </header>
  );
}
