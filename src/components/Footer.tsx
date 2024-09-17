import { useEffect } from 'react';
import Image from "next/image";
import styles from './footer.module.css';

export default function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      // Wait until the script is fully loaded before accessing particlesJS
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 33,
              density: {
                enable: true,
                value_area: 1420.4657549380909,
              },
            },
            color: { value: '#ffffff' },
            shape: {
              type: 'triangle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.063,
              anim: { enable: false },
            },
            size: {
              value: 11.83,
              random: true,
              anim: { enable: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              random: false,
              out_mode: 'out',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className={styles.footerBody}>
      <div className={styles.particleWrapper}> {/* Wrapper for particles and content */}
        <div id="particles-js" className={styles.particlesBackground}></div> {/* Particle.js container */}
  
        <div className={styles.footerContent}> {/* Content container */}
          {/* <div className={styles.visit}>
            <a href="https://www.j-w-v.com/" target="_blank" rel="noopener noreferrer">
              Visit the live version here!
            </a>
          </div> */}
  
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image src="/assets/images/logo-icon.png" alt="logo" width={100} height={100} />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.row}>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div>
              
            </div>
            <div className={styles.footerBottom}>
              <p>Copyright © 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
   
  
}
