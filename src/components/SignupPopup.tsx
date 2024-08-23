// components/SignupPopup.tsx
import { useState, useEffect } from 'react';
import styles from './Popup.module.css';
import Image from "next/image";

interface SignupPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupPopup({ isOpen, onClose }: SignupPopupProps) {
    useEffect(() => {
        console.log('SignupPopup mounted or updated');
        
        // You can add any DOM manipulation or event listeners here

        return () => {
            console.log('SignupPopup unmounted');
            // Cleanup if necessary
        };
    }, [isOpen]);

    if (!isOpen) {
        console.log('SignupPopup is not open, returning null');
        return null; // Don't render the popup if it's not open
    }

    console.log('SignupPopup is open, rendering component');

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-3xl shadow-lg max-w-2xl w-full relative flex">
                {/* Left Image Section */}
                <div className="w-[40%] bg-cover bg-center rounded-l-3xl p-6 relative" style={{ backgroundImage: 'url(/assets/images/popup-banner.png)' }}>
                    <div className="absolute top-2 left-6">
                        <Image src="/assets/images/logo-icon.png" alt="Logo" width={100} height={100} className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <p className="text-2xl font-semibold mb-2">Welcome, Expert Researcher!</p>
                        <p className="text-xs">
                            Join our community of seasoned researchers and educators. As a tutor, you’ll have the opportunity to share your knowledge, mentor aspiring researchers, and contribute to the growth of the next generation of scholars.
                        </p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="w-2/3 p-8">
                    <button
                        onClick={() => {
                            console.log('Close button clicked');
                            onClose();
                        }}
                        className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                    <h2 className="text-xl text-gray-700 font-semibold mb-6">Create an account</h2>
                    <form>
                        <div className={`${styles['input-container']} mb-4`}>
                            <input
                                type="email"
                                id="email"
                                className={styles['input-field']}
                                required
                            />
                            <label htmlFor="email" className={styles['placeholder']}>Email</label>
                        </div>
                        <div className={`${styles['input-container']} mb-4`}>
                            <input
                                type="password"
                                id="password"
                                className={styles['input-field']}
                                required
                            />
                            <label htmlFor="password" className={styles['placeholder']}>Password</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an Account? <a href="#" className="text-blue-500 hover:underline">Log In</a>
                    </p>
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-3 text-gray-600">Or Sign up with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="p-2 border rounded-full">
                            <Image src="/assets/images/cl-4.png" alt="Icon 1" width={50} height={50} className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
