"use client";

import styles from "./userSelection.module.css";
import Image from "next/image";
import LoggedOutLayout from '../../../layouts/LoggedOutLayout';
import { useRouter } from 'next/navigation';

export default function UserSelection() {
  const router = useRouter();

  const handleNextStep = () => {
    router.push('/auth/user-selection/become-a-tutor-2');
  };

  return (
    <LoggedOutLayout>
      <main className="px-20 py-10">
        <div className="pb-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-700">
            Welcome to our <span className="text-blue-500">Research Hub</span>!
          </h1>
          <p className="text-gray-700">
            As you step into the world of knowledge exploration, we invite you to choose your path:
          </p>
        </div>
        <div className={styles.cardContainer}>
          {/* First Card */}
          <div className={`${styles.card} ${styles.topCard}`}>
            <Image
              className={styles.cardImage}
              src="/assets/images/Select-Tutor.png"
              alt="select-tutor"
              width={750}
              height={250}
            />
            <div className={`${styles.cardText} ${styles.right}`}>
              <h3>Research Expert</h3>
              <p>
                Select this if you are someone with proven skills and expertise in research who can train others to acquire such skills.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className={`${styles.card} ${styles.bottomCard}`}>
            <Image
              className={styles.cardImage}
              src="/assets/images/Select-Trainee.png"
              alt="select-trainee"
              width={750}
              height={250}
            />
            <div className={`${styles.cardText} ${styles.left}`}>
              <h3>Research Trainee</h3>
              <p>
                Select this if you are someone interested in learning a particular skill from an expert researcher for research purposes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </LoggedOutLayout>
  );
}
