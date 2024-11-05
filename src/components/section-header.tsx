import Link from 'next/link';
import styles from './section-header.module.css';

interface SectionHeaderProps {
  title: string;
  buttonText: string;
  link: string;
}

const SectionHeader = ({ title, buttonText, link }: SectionHeaderProps) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className={styles.headerTitle}>
        <p>{title}</p>
      </div>
      <Link href={link} passHref>
        <button className={styles.sectionButton}>
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default SectionHeader;
