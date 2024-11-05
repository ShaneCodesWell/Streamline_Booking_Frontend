"use client";
import { useEffect, useState } from 'react';
import LayoutLoggedIn from '../../../../layouts/LoggedOutLayout';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../signup.module.css';

export default function Signup () {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100); // Adjust the delay as needed
        return () => clearTimeout(timer);
      }, []);

    const handleNextStep = () => {
        router.push('/auth/become-a-tutor');
    };

    return (
        <LayoutLoggedIn>
            <main className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/contact_hero.png')" }}>
        <div className="max-w-7xl mx-auto pl-16 py-16 grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12">
          
          {/* Left Section */}
          <div className={`${styles.textFadeIn} ${loaded ? styles.loaded : ''} text-white space-y-8`}>
            <div>
              <h1 className="text-3xl font-semibold">Start Your Learning Adventure!</h1>
              <p className="mt-4 text-sm">Discover the joy of learning from the best. Sign up today and connect with mentors who can ignite your passion for research and discovery.</p>
            </div>

            {/* Social Media Section */}
            <div className="mt-8">
              <p className="text-base">Or Sign up with:</p>
              <div className="flex space-x-8 mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <Image className="icon" src="/assets/images/fb_white.png" alt="Facebook" width={40} height={40} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Image className="icon" src="/assets/images/x_white.png" alt="X/Twitter" width={40} height={40} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image className="icon" src="/assets/images/ig_white.png" alt="Instagram" width={40} height={40} />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <Image className="icon" src="/assets/images/wa_white.png" alt="WhatsApp" width={40} height={40} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Section (Contact Form) */}
          <div
              className={`bg-white rounded-2xl shadow-lg py-6 px-8 space-y-4 md:flex-2 transform transition-transform duration-1000 ease-in-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
              <h2 className="text-xl font-semibold text-gray-700">Sign Up</h2>
              <form>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="fullName" className="block text-xs font-medium text-gray-600">Full Name</label>
                        <input type="text" id="fullName" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-xs font-medium text-gray-600">Company</label>
                        <input type="text" id="company" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-600">Email</label>
                        <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-xs font-medium text-gray-600">Password</label>
                        <input type="text" id="company" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-600">Confirm Password</label>
                        <input type="text" id="phone" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                    </div>
                  </div>
                  <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">Create Account</button>
                  <div className="mt-6 flex items-start">
                  <input type="checkbox" id="consent" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-700">I consent to the processing of personal data and agree to the terms of the privacy policy. The personal information provided by you is used exclusively for consulting purposes and is not transferred to third parties.</label>
                  </div>
              </form>
              </div>

        </div>
      </main>
        </LayoutLoggedIn>
        
    );

}