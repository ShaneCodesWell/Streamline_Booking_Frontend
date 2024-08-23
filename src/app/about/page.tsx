"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function AboutUs() {
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);
  const [isMissionInView, setIsMissionInView] = useState(false);
  const [isVisionInView, setIsVisionInView] = useState(false);

  const handleScroll = () => {
    if (missionRef.current && visionRef.current) {
      const missionTop = missionRef.current.getBoundingClientRect().top;
      const visionTop = visionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (missionTop < windowHeight) {
        setIsMissionInView(true);
      }
      
      if (visionTop < windowHeight) {
        setIsVisionInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="p-10">
      <div className={styles.aboutContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.header}>About Us</h1>
          <p className={styles.about_subtext}>
            Welcome to STREAMLINE, a pioneering platform dedicated to bridging the gap between aspiring researchers and seasoned experts. Conceived by Dr. Amos Oppong (PhD), an esteemed researcher with a wealth of experience, STREAMLINE aims to revolutionize the way students and junior researchers connect with established professionals in their field.
          </p>
        </div>
      </div>
      {/* Our Vision */}
      <div className='pt-20'>
        <section
          className={`${styles.visionSection} ${isVisionInView ? styles.animate : ''}`} 
          ref={visionRef}
        >
          <div className={styles.textContainer}>
              <h2 className={styles.header}>Our <span className='text-sky-600'>Vision</span></h2>
              <p className={styles.subtext}>
                  At STREAMLINE, our vision is to create an inclusive and accessible research ecosystem where knowledge and guidance are readily available to all who seek it. We believe that every aspiring researcher deserves the opportunity to learn from the best, and we are committed to making this a reality.
              </p>
          </div>
          <div className={styles.imageContainer}>
              <Image
                  src="/assets/images/about-1.png"
                  alt="Vision Image"
                  width={500}
                  height={300}
                  className={styles.image}
              />
          </div>
        </section>
      </div>
      {/* Our Mission */}
      <div className='pt-20'>
        <section
          className={`${styles.missionSection} ${isMissionInView ? styles.animate : ''}`} 
          ref={missionRef}
        >
          <div className={styles.textContainer}>
              <h2 className={styles.header}>Our <span className='text-sky-600'>Mission</span></h2>
              <p className={styles.subtext}>
              Our mission is to provide a seamless platform that facilitates meaningful connections between students and expert researchers. We strive to support the next generation of innovators by offering a space where they can find mentorship, collaborate on projects, and gain invaluable insights from experienced researchers.
              </p>
          </div>
          <div className={styles.imageContainer}>
              <Image
                  src="/assets/images/about-2.png"
                  alt="Mission Image"
                  width={500}
                  height={300}
                  className={styles.image}
              />
          </div>
        </section>
      </div>

      {/* Meet the Team */}
      <div className='pt-20'>
        <section>
          <h1 className={styles.header}>Meet the Brains</h1>
          <div className={styles.profileCard}>
            <Image className={styles.profileImage} src="/assets/images/Researcher-3.png" alt="Dr. Amos Oppong" width={100} height={100} />
            <div className={styles.textSection}>
              <h2 className={styles.name}>Dr. Amos Oppong (PhD)</h2>
              <h3 className={styles.title}>Founder</h3>
              <hr className={styles.divider} />
              <p className={styles.description}>Dr. Amos Oppong (PhD), the visionary behind STREAMLINE, has dedicated his career to advancing research and fostering educational growth. With his extensive background and passion for mentoring, Dr. Oppong recognized the need for a platform that could simplify the process of finding and connecting with research experts. STREAMLINE is the realization of his dream to support and nurture emerging researchers worldwide.</p>
              <div className={styles.socialMedia}>
                {/* Add your social media icons here */}
                <a href="https://twitter.com/username" className={styles.socialIcon}>Twitter</a>
                <a href="https://linkedin.com/in/username" className={styles.socialIcon}>LinkedIn</a>
                <a href="https://github.com/username" className={styles.socialIcon}>GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
