// src/app/about/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardSwitcher from '../../components/cardSwitcher';
import styles from './about.module.css';

export default function AboutUs() {

  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const visionSection = document.querySelector(`.${styles.visionSection}`);
      const missionSection = document.querySelector(`.${styles.missionSection}`);

      if (visionSection) {
        const visionPosition = visionSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (visionPosition < screenPosition) {
          setIsVisionVisible(true);
        }
      }

      if (missionSection) {
        const missionPosition = missionSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (missionPosition < screenPosition) {
          setIsMissionVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    <div className={styles.profileCard} key="1">
      <Image className={styles.profileImage} src="/assets/images/Researcher-3.png" alt="Dr. Amos Oppong" width={150} height={150} />
      <div className={styles.textSection}>
        <h2 className={styles.name}>Dr. Amos Oppong (PhD)</h2>
        <h3 className={styles.title}>Founder</h3>
        <hr className={styles.divider} />
        <p className={styles.description}>
          Dr. Amos Oppong (PhD), the visionary behind STREAMLINE, has dedicated his career to advancing research and fostering educational growth. With his extensive background and passion for mentoring, Dr. Oppong recognized the need for a platform that could simplify the process of finding and connecting with research experts. STREAMLINE is the realization of his dream to support and nurture emerging researchers worldwide.
        </p>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-1.png" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-2.png" alt="X" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-3.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-4.png" alt="WhatsApp" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-5.png" alt="LinkedIn" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>,
    <div className={styles.profileCard} key="2">
      <Image className={styles.profileImage} src="/assets/images/Shane.jpg" alt="Shane Mensah" width={150} height={150} />
      <div className={styles.textSection}>
        <h2 className={styles.name}>Shane P.K Mensah</h2>
        <h3 className={styles.title}>Creator & Developer</h3>
        <hr className={styles.divider} />
        <p className={styles.description}>
          As the Full Stack Developer behind STREAMLINE, I am responsible for bringing this project from concept to reality. From designing the user interface to developing the backend infrastructure, my role encompasses the full spectrum of creating a functional and user-friendly platform. Working closely with Dr. Oppong and our dedicated team, we are committed to delivering a robust and intuitive experience for our users.
        </p>
        <div className={styles.socialMedia}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-2.png" alt="X" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-3.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-6.png" alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-5.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-7.png" alt="Dribbble" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>,
    <div className={styles.profileCard} key="3">
      <Image className={styles.profileImage} src="/assets/images/Shane.jpg" alt="Shane Mensah" width={150} height={150} />
      <div className={styles.textSection}>
        <h2 className={styles.name}>Shane P.K Mensah</h2>
        <h3 className={styles.title}>Project Manager</h3>
        <hr className={styles.divider} />
        <p className={styles.description}>
        Shane P.K Mensah, the Project Manager for STREAMLINE, oversees the execution of our project roadmap and ensures alignment with our strategic goals. His role involves coordinating team activities, managing deadlines, and ensuring that the platform meets the highest standards of quality and performance. Samuel’s expertise and leadership are crucial in guiding STREAMLINE toward its vision of enhancing the research experience.
        </p>
        <div className={styles.socialMedia}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-2.png" alt="X" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-3.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-6.png" alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-5.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
            <Image className="socials" src="/assets/images/Social Icon-7.png" alt="Dribbble" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  ];

  return (
    <main className="px-10">
      <div className={styles.aboutContainer}>
        <div className={styles.textOverlay}>
          <h1 className='text-white font-semibold text-4xl'>About Us</h1>
          <p className={styles.about_subtext}>
            Welcome to STREAMLINE, a pioneering platform dedicated to bridging the gap between aspiring researchers and seasoned experts. Conceived by Dr. Amos Oppong (PhD), an esteemed researcher with a wealth of experience, STREAMLINE aims to revolutionize the way students and junior researchers connect with established professionals in their field.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className='px-16'>
        {/* Our Vision */}
        <div className='pt-20'>
          <div className={`${styles.visionSection} ${isVisionVisible ? styles.animate : ''}`}>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>
                Our <span className='text-sky-600'>Vision</span>
              </h2>
              <p className={styles.subtext}>
                At STREAMLINE, our vision is to create an inclusive and accessible
                research ecosystem where knowledge and guidance are readily
                available to all who seek it.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/assets/images/about-1.png'
                alt='Vision Image'
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className='pt-20'>
          <div className={`${styles.missionSection} ${isMissionVisible ? styles.animate : ''}`}>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>
                Our <span className='text-sky-600'>Mission</span>
              </h2>
              <p className={styles.subtext}>
                Our mission is to provide a seamless platform that facilitates
                meaningful connections between students and expert researchers.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/assets/images/about-2.png'
                alt='Mission Image'
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className='pt-20'>
        <div className='flex justify-center items-center'>
          <h1 className={styles.header}>Meet the <span className='text-sky-600'>Brains</span></h1>
        </div>
        <CardSwitcher cards={cards} />
      </section>

      {/* Why Streamline */}
      <section className='pt-20'>
        <div className='flex justify-center items-center'>
          <h1 className={styles.header}>Why <span className='text-sky-600'>STREAMLINE?</span></h1>
        </div>
      </section>
    </main>
  );
}
