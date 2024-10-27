"use client";
import LayoutLoggedIn from '../../../../layouts/LoggedInLayout';
import { useRouter } from 'next/navigation';

export default function AddBlog () {

    const router = useRouter();

    const handleNextStep = () => {
        router.push('/tutor/blogs');
    };

    return (
        <LayoutLoggedIn>
            <main className="px-20 pb-10 pt-4">
                <div className="pb-6">
                    <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-color-2)' }}>
                        Post a <span className="text-blue-500">Blog</span>
                    </h1>
                    <p className="text-base" style={{ color: 'var(--text-color-2)' }}>
                        Follow these simple steps to share your thoughts and insights with our community:
                    </p>
                </div>
                <div className="card p-14 rounded-2xl shadow-md border" style={{ background: 'var(--sidebar-color)', borderColor: 'var(--pub-outline-color)' }}>
                    {/* Blog Title */}
                    <div className="pb-4">
                        <h2 className="text-lg font-medium pb-2" style={{ color: 'var(--text-color-2)' }}>
                            Please fill this out completely.
                        </h2>
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            What is the title of your blog post?
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter your title" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                    </div>

                    {/* Blog Description */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            Provide a brief description or summary of your blog post.
                        </p>
                        <div className="pt-4">
                            <textarea placeholder="Write a brief summary..." className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} required></textarea>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            What is the main content of your blog?
                        </p>
                        <div className="pt-4">
                            <textarea placeholder="Write your blog content here..." className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows={8} required></textarea>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            Select categories that fit your blog post.
                        </p>
                        <div className="pt-4">
                            <select className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option value="" disabled selected>Select categories</option>
                                <option value="technology">Technology</option>
                                <option value="health">Health</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="education">Education</option>
                                <option value="travel">Travel</option>
                            </select>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            Add tags for better discoverability (comma separated).
                        </p>
                        <div className="pt-4">
                            <input type="text" placeholder="Enter tags..." className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="pb-4">
                        <p className="pt-2" style={{ color: 'var(--text-color-2)' }}>
                            Upload a featured image for your blog post.
                        </p>
                        <div className="pt-4">
                            <input type="file" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
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