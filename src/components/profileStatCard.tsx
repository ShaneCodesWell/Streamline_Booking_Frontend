import Image from "next/image";
import styles from './profileStatCard.module.css';

interface ProfileStatCardProps {
  servicesCount: number;
  publicationsCount: number;
  followersCount: string;
  blogsCount: number;
}

const ProfileStatCard = ({ servicesCount, publicationsCount, followersCount, blogsCount }: ProfileStatCardProps) => {
  return (
    <div className={styles.profileCard}>
      {/* First Column: Profile Image */}
      <div className={styles.profileImage}>
        <Image src="/assets/images/Shane.jpg" alt="Profile" width={150} height={150} className="profile-pic" />
      </div>

      {/* Second Column: Profile Info */}
      <div className={styles.profileInfo}>
        <p><strong>Name:</strong> Shane Mensah</p>
        <p><strong>Title:</strong> Researcher</p>
        <p><strong>ORCID:</strong> 0000-0001-2345-6789</p>
        <p><strong>DOI:</strong> 10.1000/xyz123</p>
        <p><strong>Ratings:</strong> ⭐⭐⭐⭐⭐</p>
      </div>

      {/* Third Column: Stats */}
      <div className={styles.profileStats}>
        {['Services', 'Publications', 'Followers', 'Blogs'].map((stat, index) => (
          <div className={styles.statItem} key={index}>
            <div className={styles.statBox}>
              {stat === 'Services' ? servicesCount :
               stat === 'Publications' ? publicationsCount :
               stat === 'Followers' ? followersCount :
               blogsCount}
            </div>
            <span className={styles.statText}>{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileStatCard;