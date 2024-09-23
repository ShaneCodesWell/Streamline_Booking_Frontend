import styles from './section-header.module.css';

const SectionHeader = ({ title, buttonText }: { title: string; buttonText: string }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className={styles.headerTitle}>
        <p>{title}</p>
      </div>
      <button className={styles.sectionButton}>
        {buttonText}
      </button>
    </div>
  );
};

export default SectionHeader;