"use client";
import LayoutLoggedIn from '../../../../layouts/LoggedInLayout';
import { useRouter } from 'next/navigation';

export default function AddService () {

    const router = useRouter();

    const handleNextStep = () => {
        router.push('/auth/user-selection/become-a-tutor-2');
    };

    return (
        <LayoutLoggedIn>
            <main className="px-20 pb-10 pt-4">
                <div className="pb-6">
                    <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-color-2)' }}>Post a <span className="text-blue-500">Service </span></h1>
                    <p className="text-base" style={{ color: 'var(--text-color-2)' }}>Follow these simple steps to share your services with our community and start connecting with potential clients:</p>
                </div>
                <div className="card p-14 rounded-2xl shadow-md border" style={{ background: 'var(--sidebar-color)', borderColor: 'var(--pub-outline-color)' }}>
                    {/* Field 1 */}
                    <div className="pb-4">
                        <h2 className="text-lg font-medium pb-2" style={{ color: 'var(--text-color-2)' }}>
                            Please fill this out completely.
                        </h2>
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            What is the title of the service you are offering?
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your text" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>
                    {/* Field 2 */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            Please provide a brief description of the service you offer.
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your text" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>
                    {/* Field 3 */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            What specific mode of tutoring
                        </p>
                        <div className="pt-4">
                            <select
                            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            >
                            <option value="" disabled selected>
                                Select a mode of tutoring
                            </option>
                            <option value="online">Online</option>
                            <option value="in-person">Messaging</option>
                            <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            Select Date and Time Range
                        </p>
                        <div className="pt-4 flex space-x-4">
                            {/* Date Picker */}
                            <div className="w-1/3">
                            <label htmlFor="date" className="block text-sm" style={{ color: 'var(--text-color-2)' }}>Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            </div>

                            {/* From Time Selector */}
                            <div className="w-1/3">
                            <label htmlFor="fromTime" className="block text-sm" style={{ color: 'var(--text-color-2)' }}>From:</label>
                            <input
                                type="time"
                                id="fromTime"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            </div>

                            {/* To Time Selector */}
                            <div className="w-1/3">
                            <label htmlFor="toTime" className="block text-sm" style={{ color: 'var(--text-color-2)' }}>To:</label>
                            <input
                                type="time"
                                id="toTime"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            </div>
                        </div>
                    </div>
                    {/* Field 5 */}
                    <div className="pb-4">
                        <p className="pt-6" style={{ color: 'var(--text-color-2)' }}>
                            What is your hourly rate or pricing structure for the service?
                        </p>
                        <div className="pt-4">
                            <input type="number" placeholder="Enter the amount" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleNextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                            Submit
                        </button>
                    </div>
                </div>

            </main>
        </LayoutLoggedIn>
        
    );

}