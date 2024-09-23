import Link from 'next/link';
import styles from './blog.module.css';
import Image from "next/image";

interface BlogProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

const BlogArticle = ({ title, author, description, imageUrl }: BlogProps) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt="Article Image" width={250} height={150} className={styles.blogImage} />
      </div>
      <div className={styles.blogTextContainer}>
        <p className={styles.blogTitle}>{title}</p>
        <p className={styles.blogAuthor}>{author}</p>
        <p className={styles.blogDescription}>{description}</p>
        <Link href={'#'} className={styles.readMore}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogArticle;