import styles from './publication.module.css';
import Image from "next/image";

interface PublicationProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

const Publications = ({ title, author, description, imageUrl }: PublicationProps) => {
  return (
    <div className={styles.pubCard}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt="Publication Image" width={450} height={720} className={styles.pubImage} />
      </div>
      <div className={styles.pubTextContainer}>
        <h2 className={styles.pubTitle}>{title}</h2>
        <h3 className={styles.pubAuthor}>{author}</h3>
        <p className={styles.pubDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Publications;