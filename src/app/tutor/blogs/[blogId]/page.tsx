// src/app/tutor/blogs/page.tsx
import LayoutLoggedIn from '../../../../layouts/LoggedInLayout';
import SectionHeader from '../../../../components/section-header';
import Image from 'next/image';
import SingleBlog from '@/components/BlogTab';

const blogsData = [
    {
        imageUrl: '/assets/images/blog-1.png',
        title: 'Exploring the Impact of Artificial Intelligence on Healthcare',
        description: 'A brief summary of the blog post. This is where you provide a preview of the content to entice readers to click through and read more.',
        link: '/tutor/blogs/blog-page',
    },
    {
        imageUrl: '/assets/images/blog-4.png',
        title: 'The Role of Big Data in Modern Research',
        description: 'A summary discussing how big data is shaping modern scientific research.',
        link: '/tutor/blogs/blog-page',
    },
    {
        imageUrl: '/assets/images/blog-3.png',
        title: 'Innovations in Renewable Energy',
        description: 'An overview of the latest innovations in renewable energy and their potential impact.',
        link: '/tutor/blogs/blog-page',
    },
    {
      imageUrl: '/assets/images/blog-2.png',
      title: 'Innovations in Renewable Energy',
      description: 'An overview of the latest innovations in renewable energy and their potential impact.',
      link: '/tutor/blogs/blog-page',
  },
];

export default function BlogPage() {
    return (
        <LayoutLoggedIn>
            <div className="mx-auto max-w-7xl sm:px-8 lg:px-8">
                <h2 className="text-[1.2rem] font-medium mb-4" style={{ color: 'var(--text-color)' }}>
                    The Key Determinants of Inflation in Ghana
                </h2>
                
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Image src="/assets/images/blog-page-1.png" width={1140} height={480} alt="Main-Blog-image" className="rounded-2xl max-w-full" />
                </div>

                <p className="text-[0.95em] mb-4 pt-6 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
                </p>
                <p className="text-[0.95em] mb-4 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                </p>
                <p className="text-[0.95em] mb-4 pt-6 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
                </p>
                <p className="text-[0.95em] mb-4 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
                </p>

                <div className="flex flex-row gap-8 justify-center items-center">
                    <Image src="/assets/images/blog-page-2.png" width={540} height={480} alt="sub-Blog-image-1" className="rounded-2xl max-w-full" />
                    <Image src="/assets/images/blog-page-3.png" width={540} height={480} alt="sub-Blog-image-2" className="rounded-2xl max-w-full" />
                </div>

                <p className="text-[0.95em] mb-4 pt-6 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
                </p>
                <p className="text-[0.95em] mb-4 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
                </p>
                <p className="text-[0.95em] mb-4 pt-6 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
                </p>
                <p className="text-[0.95em] mb-4 text-justify max-w-full" style={{ color: 'var(--text-color)' }}>
                    Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
                </p>

                <SectionHeader title="Related Articles or Posts" buttonText="Post an Article" />
                <div className="flex justify-between pt-8">
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
