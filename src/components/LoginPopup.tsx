// components/LoginPopup.tsx
import { useState } from 'react';
import Image from "next/image";

interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
    if (!isOpen) return null; // Don't render the popup if it's not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-3xl shadow-lg max-w-2xl w-full relative flex">
                {/* Left Image Section */}
                <div className="w-1/3 bg-cover bg-center rounded-l-3xl p-6 relative" style={{ backgroundImage: 'url(/assets/images/popup-banner.png)' }}>
                    <div className="absolute top-2 left-6">
                        <Image src="/assets/images/logo-icon.png" alt="Logo" width={100} height={100} className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-center justify-center h-full text-center text-white">
                        <p className="text-2xl font-semibold mb-2">Welcome Back!</p>
                        <p className="text-sm">Let’s get you back in.</p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="w-2/3 p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                    <h2 className="text-xl text-gray-700 font-semibold mb-6">Log In to your account</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Log In
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Don&apos;t have an Account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
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
                        {/* <button className="p-2 border rounded-full">
                            <img src="/path-to-icon2.png" alt="Icon 2" className="w-6 h-6" />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
