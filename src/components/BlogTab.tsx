// src/components/BlogTab.tsx
import React from 'react';
import Image from 'next/image';
import styles from './BlogTab.module.css';

interface BlogProps {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
}

const SingleBlog: React.FC<BlogProps> = ({ imageUrl, title, description, link }) => {
    return (
        <div className={styles.blogCard}>
            <Image 
                src={imageUrl} 
                width={720} 
                height={1024} 
                alt={title} 
                className={styles.blogImage} 
            />
            <div className={styles.blogContent}>
                <h2 className={styles.blogTitle}>{title}</h2>
                <p className={styles.blogDescription}>{description}</p>
                <a href={link} className={styles.readMore}>Read More</a>
            </div>
        </div>
    );
};

export default SingleBlog;
