"use client";
import LayoutLoggedIn from '../../../../layouts/LoggedInLayout';
import { useRouter } from 'next/navigation';

export default function BecomeATutor () {

    const router = useRouter();

    const handleNextStep = () => {
        router.push('/auth/user-selection/become-a-tutor-2');
    };

    return (
        <LayoutLoggedIn>
            <main className="px-20 py-10">
                <div className="pb-6 text-center">
                    <h1 className="text-3xl font-semibold text-gray-700">Become a <span className="text-blue-500">Research Tutor</span></h1>
                    <p className="text-gray-700">Fill out the form completely in order to become a researcher on our platform.</p>
                </div>
                <div className="card p-14 bg-white rounded-2xl shadow-md border border-gray-200">
                    {/* Field 1 */}
                    <div className="pb-4">
                        <h2 className="text-lg font-medium text-gray-700 pb-2">
                            Educational Background
                        </h2>
                        <p className="pt-2 text-gray-700">
                            Highest Degree Attained
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your text" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>
                    {/* Field 2 */}
                    <div className="pb-4">
                        <p className="pt-2 text-gray-700">
                            Field of Study
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your text" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>
                    {/* Field 3 */}
                    <div className="pb-4">
                        <p className="pt-2 text-gray-700">
                            University/Institution Name
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your text" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                    </div>
                    {/* Field 4 */}
                    <div className="pb-4">
                        <p className="pt-2 text-gray-700">
                            Graduation Year
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your text" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
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