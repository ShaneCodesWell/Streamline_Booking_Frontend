// src/app/tutor/blogs/page.tsx
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';
import SectionHeader from '../../../components/section-header';
import SingleBlog from '@/components/BlogTab';

const blogsData = [
    {
        imageUrl: '/assets/images/blog-1.png',
        title: 'Exploring the Impact of Artificial Intelligence on Healthcare',
        description: 'A brief summary of the blog post. This is where you provide a preview of the content to entice readers to click through and read more.',
        link: '#',
    },
    {
        imageUrl: '/assets/images/blog-4.png',
        title: 'The Role of Big Data in Modern Research',
        description: 'A summary discussing how big data is shaping modern scientific research.',
        link: '#',
    },
    {
        imageUrl: '/assets/images/blog-3.png',
        title: 'Innovations in Renewable Energy',
        description: 'An overview of the latest innovations in renewable energy and their potential impact.',
        link: '#',
    },
    {
      imageUrl: '/assets/images/blog-2.png',
      title: 'Innovations in Renewable Energy',
      description: 'An overview of the latest innovations in renewable energy and their potential impact.',
      link: '#',
  },
];

export default function Blogs() {
    return (
        <LayoutLoggedIn>
            <div className="mx-auto max-w-7xl sm:px-4 lg:px-2">
                <SectionHeader title="My Blogs" buttonText="Post an Article" />
                <p className="text-[0.85em] mb-4" style={{ color: 'var(--text-color)' }}>
                    All the blogs and articles you have saved in one place.
                </p>

                {/* Blog Grid */}
                <div className="flex justify-between">
                    {blogsData.map((blog, index) => (
                        <SingleBlog
                            key={index}
                            imageUrl={blog.imageUrl}
                            title={blog.title}
                            description={blog.description}
                            link={blog.link}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-4">
                    {blogsData.map((blog, index) => (
                        <SingleBlog
                            key={index}
                            imageUrl={blog.imageUrl}
                            title={blog.title}
                            description={blog.description}
                            link={blog.link}
                        />
                    ))}
                </div>
            </div>
        </LayoutLoggedIn>
    );
}
