"use client";
import { useEffect, useState } from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
import LoggedOutLayout from '@/layouts/LoggedOutLayout';

export default function Contacts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoggedOutLayout>
      <main className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/contact_hero.png')" }}>
        <div className="max-w-7xl mx-auto pl-16 py-16 grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12">
          
          {/* Left Section */}
          <div className={`${styles.textFadeIn} ${loaded ? styles.loaded : ''} text-white space-y-8`}>
            <div>
              <h1 className="text-3xl font-semibold">Contact Us</h1>
              <p className="mt-4 text-sm">We’d love to hear from you! Whether you have a question, feedback, or need support, our team is here to help. Feel free to reach out to us using any of the following methods:</p>
            </div>

            {/* Cards Section */}
            <div className="space-y-6">
              <div className={`${styles.cardHover} ${styles.fadeIn} ${loaded ? styles.loaded : ''}`}>
                <div className="flex items-center space-x-4">
                  <Image className="icon" src="/assets/images/location.png" alt="Location" width={24} height={24} />
                  <p className="text-base">Accra, Ghana</p>
                </div>
              </div>
              <div className={`${styles.cardHover} ${styles.fadeIn} ${loaded ? styles.loaded : ''}`}>
                <div className="flex items-center space-x-4">
                  <Image className="icon" src="/assets/images/message.png" alt="Message" width={24} height={24} />
                  <p className="text-base">info.streamline.org</p>
                </div>
              </div>
              <div className={`${styles.cardHover} ${styles.fadeIn} ${loaded ? styles.loaded : ''}`}>
                <div className="flex items-center space-x-4">
                  <Image className="icon" src="/assets/images/call.png" alt="Call" width={24} height={24} />
                  <div>
                    <p className="text-base">+233 50 384 5965</p>
                    <p className="text-base">+233 24 127 7284</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-8">
              <p className="text-base">Check out our social media channels:</p>
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
              <h2 className="text-xl font-semibold text-gray-700">Send us a message</h2>
              <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-600">Phone</label>
                      <input type="text" id="phone" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                  </div>
                  </div>
                  <div className="pt-4">
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-600">Subject</label>
                  <input type="text" id="subject" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" />
                  </div>
                  <div className="pt-4">
                  <label htmlFor="message" className="block text-xs font-medium text-gray-600">Message</label>
                  <textarea id="message" rows={4} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"></textarea>
                  </div>
                  <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">Send Message</button>
                  <div className="mt-6 flex items-start">
                  <input type="checkbox" id="consent" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-700">I consent to the processing of personal data and agree to the terms of the privacy policy. The personal information provided by you is used exclusively for consulting purposes and is not transferred to third parties.</label>
                  </div>
              </form>
              </div>

        </div>
      </main>
    </LoggedOutLayout>
  );
}
