"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "/lib/fontawesome.js";
import Image from "next/image";
import "/styles/custom.css";
import StatItem from '@/components/StatItem';

export default function Home() {

  return (
    <main className="px-10 pb-1">
      <div className="hero-container">
        <div className="flex justify-center items-center pt-8">
          <svg width="230" height="81" viewBox="0 0 292 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M108.261 66.3888C108.261 66.3888 112.603 62.7289 118.606 60.9311C124.608 59.1333 129.844 59.1333 129.844 59.1333C129.844 59.1333 134.314 58.5075 141.85 59.968C149.385 61.4285 156.09 66.0688 160.879 69.4065C165.668 72.7443 174.353 77.2399 178.887 77.2399C182.659 77.2399 183.779 76.7063 184.049 76.5272C184.098 76.4894 184.123 76.4694 184.123 76.4694C184.123 76.4694 184.103 76.4911 184.049 76.5272C183.434 77.0016 179.058 80.2811 173.203 82.1838C166.881 84.2385 158.835 84.5665 150.215 83.0828C141.594 81.5991 125.758 70.4339 123.778 69.4065C121.798 68.3792 115.221 65.8109 112.475 65.8751C109.729 65.9393 108.261 66.3888 108.261 66.3888Z" fill="white" />
            <path d="M114.008 70.9474C119.563 70.0484 126.46 73.002 126.46 73.002C126.46 73.002 117.009 67.6086 111.964 67.3517C106.92 67.0949 104.685 69.1496 101.683 72.1031C98.682 75.0567 96 82.1195 96 82.1195C96 82.1195 97.9486 78.8274 99.7037 77.1755C102.109 74.912 103.224 74.2361 106.281 73.002C108.757 72.0023 108.452 71.8463 114.008 70.9474Z" fill="white" />
            <path d="M175.629 75.185C171.862 74.4145 165.795 70.4336 165.795 70.4336C165.795 70.4336 173.462 74.0293 183.356 70.8831C193.25 67.7369 196 60.6099 196 60.6099C196 60.6099 194.467 65.1686 192.551 67.9938C190.636 70.8189 187.187 74.4787 184.889 75.185C182.59 75.8913 179.397 75.9555 175.629 75.185Z" fill="white" />
            <path d="M22.1291 1.024L21.3611 5.536C20.8331 5.344 20.0651 5.152 19.2971 5.152C18.1451 5.152 17.0411 5.632 16.4651 6.448C15.4571 7.792 15.1691 10.096 15.1691 13.888C15.1691 21.328 16.0331 27.136 16.0331 35.392C16.0331 39.568 15.2171 42.544 14.1131 44.32C12.5291 47.008 9.74506 48.112 6.96106 48.112C5.42506 48.112 3.45706 47.776 2.49706 47.296L3.40906 42.544C3.98506 42.784 4.89706 43.072 5.85706 43.072C6.86506 43.072 7.77706 42.736 8.40106 42.016C9.40906 40.864 9.93706 39.136 9.93706 35.248C9.93706 26.848 9.02506 20.896 9.02506 13.072C9.02506 7.792 10.0811 4.768 12.3851 2.56C13.9691 1.024 16.4651 0.399998 18.8171 0.399998C20.1131 0.399998 21.5051 0.735999 22.1291 1.024ZM23.5192 7.984H50.6392L50.4472 13.312C47.4712 13.12 44.5432 13.072 40.4632 13.072C39.9832 21.184 39.5032 29.536 39.4552 40H31.9672C32.6392 31.984 33.0712 22.24 33.3592 13.072C26.3512 13.072 25.5352 13.216 23.3272 13.264L23.5192 7.984ZM69.8722 25.36L77.7922 40H70.0642C67.7602 33.904 64.6882 28.144 61.8562 22.288C62.8162 22.432 63.7762 22.576 64.7362 22.576C68.3842 22.576 71.8402 20.944 71.8402 16.864C71.8402 13.12 68.4322 12.688 65.5522 12.688C63.8242 12.688 62.1442 12.784 60.4162 12.928C60.2722 17.104 59.6962 35.2 59.6482 40H52.4002C53.4562 29.392 53.7922 18.688 53.8402 7.984H68.2882C73.8562 7.984 78.7042 9.952 78.7042 15.952C78.7042 21.568 74.9602 24.352 69.8722 25.36ZM84.1226 7.984H107.499L107.259 13.264C104.523 13.12 101.787 13.072 99.0506 13.072H91.2266L90.8426 21.424H98.5226C100.347 21.424 102.267 21.28 104.907 21.232L104.619 26.128H90.5546L90.1706 34.912H99.5786C100.827 34.912 102.267 34.912 106.347 34.624L106.059 40H82.6346C83.5466 33.472 84.1226 14.464 84.1226 7.984ZM132.421 28.816H120.085C118.261 32.368 116.485 36.208 114.757 40H106.837C112.597 29.488 118.213 18.736 123.541 7.984H132.229C135.829 18.64 139.909 29.392 143.893 40H136.213C135.109 36.16 133.765 32.368 132.421 28.816ZM122.197 23.728H131.125L127.429 13.024L122.197 23.728ZM176.116 14.704L166.564 40H160.084L155.524 23.632C154.708 20.608 153.556 17.152 152.932 14.704H152.836C152.116 23.008 151.54 31.504 151.252 40H145.108C146.356 30.16 147.652 10.096 147.844 7.984H157.3C157.828 11.248 158.932 14.368 159.94 17.488C161.476 22.144 162.676 26.896 163.876 31.36H163.972C165.604 26.896 167.332 22.144 169.3 17.536C170.644 14.416 171.988 11.296 172.948 7.984H182.596C182.212 17.104 181.924 25.6 181.924 40H175.54C175.828 32.464 176.212 24.88 176.212 17.296V14.704H176.116ZM210.574 34.768L210.238 40H187.822C188.878 29.344 189.31 18.688 189.454 7.984H196.942C196.75 10.816 195.79 28.768 195.598 34.912H201.406C204.478 34.912 207.55 34.912 210.574 34.768ZM220.906 40H213.322C213.946 30.304 214.618 20.8 214.618 7.984H222.154C221.482 17.104 221.098 26.08 220.906 40ZM250.037 40L235.157 16.192H234.965C234.773 22.624 234.341 31.6 234.245 40H227.525C228.437 29.344 228.869 18.688 229.061 7.984H237.845C242.501 16.24 247.829 24.064 252.533 32.224H252.629C252.965 24.736 253.397 16 253.493 7.984H260.117C259.253 18.4 258.725 29.344 258.533 40H250.037ZM267.029 7.984H290.405L290.165 13.264C287.429 13.12 284.693 13.072 281.957 13.072H274.133L273.749 21.424H281.429C283.253 21.424 285.173 21.28 287.813 21.232L287.525 26.128H273.461L273.077 34.912H282.485C283.733 34.912 285.173 34.912 289.253 34.624L288.965 40H265.541C266.453 33.472 267.029 14.464 267.029 7.984Z" fill="white" />
          </svg>
        </div>
        <div className="text-center text-white">
          <h2 className="text-2xl font-medium mb-4">
            Welcome to Streamline Researchers
          </h2>
          <p className="text-lg px-20">
            Streamlined Researchers Service offers a comprehensive, cost-effective solution for  <br></br>researchers and scholars,allowing them to book tutors, schedule meetings, <br></br> and manage their research projects more efficiently.
          </p>
          <div className="flex justify-center items-center space-x-4 px-4 py-6">
            <Link href="/auth/login" className="bg-white text-slate-700 px-6 py-3 rounded-md shadow-md hover:bg-[#DAEAFF] hover:text-blue-500 transition duration-300">
              Book an Appointment
            </Link>
            <Link href="/auth/login" className="bg-white text-slate-700 px-6 py-3 rounded-md shadow-md hover:bg-[#DAEAFF] hover:text-blue-500 transition duration-300">
              Post a Service
            </Link>
          </div>

          {/* Service Cards */}
          <div className="flex justify-center space-x-4">
            <div className="hero-cards text-neutral-700 text-left p-4 border rounded-lg shadow">
              <p className="font-semibold">How to write a conference paper.</p>
              <p className="text-xs">Dr. Amos Oppong</p>
              <p className="text-sm">Learn the essential steps and techniques to write an effective conference paper that stands out.</p>
              <div className="flex justify-between items-center mt-2">
                <ul className="flex space-x-1">
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="unchecked custom-size" /></li>
                </ul>
                <p className="font-semibold">$15.00</p>
              </div>
            </div>

            <div className="hero-cards text-neutral-700 text-left p-4 border rounded-lg shadow">
              <p className="font-semibold">How to write a convincing research Introduction.</p>
              <p className="text-xs">Dr. Amos Oppong</p>
              <p className="text-sm">Writing an introduction for your research can be a very arduous process, Let me simplify the process for you.</p>
              <div className="flex justify-between items-center mt-2">
                <ul className="flex space-x-1">
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                </ul>
                <p className="font-semibold">$20.00</p>
              </div>
            </div>

            <div className="hero-cards text-neutral-700 text-left p-4 border rounded-lg shadow">
              <p className="font-semibold">How to write an entire research figures</p>
              <p className="text-xs">Dr. Amos Oppong</p>
              <p className="text-sm">This guide helps you create and present your research figures in a clear and impactful manner.</p>
              <div className="flex justify-between items-center mt-2">
                <ul className="flex space-x-1">
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                  <li><FontAwesomeIcon icon="star" className="unchecked custom-size" /></li>
                </ul>
                <p className="font-semibold">$25.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trusted Companies */}
      <div className="py-10">
        <div className="flex justify-center body-text pb-10">
          <p className="font-semibold text-lg">Trusted Companies</p>
        </div>
        <div className="banner">
          <div className="icon-container">
            <Image className="icon" src="/assets/images/cl-1.png" alt="Company 1" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-2.png" alt="Company 2" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-3.png" alt="Company 3" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-4.png" alt="Company 4" width={50} height={50} />
            <Image className="icon" src="/assets/images/cl-5.png" alt="Company 5" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-6.png" alt="Company 6" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-7.png" alt="Company 7" width={100} height={100} />

            {/* Duplicating the logos */}
            <Image className="icon" src="/assets/images/cl-1.png" alt="Company 1" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-2.png" alt="Company 2" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-3.png" alt="Company 3" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-4.png" alt="Company 4" width={50} height={50} />
            <Image className="icon" src="/assets/images/cl-5.png" alt="Company 5" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-6.png" alt="Company 6" width={100} height={100} />
            <Image className="icon" src="/assets/images/cl-7.png" alt="Company 7" width={100} height={100} />
          </div>
        </div>
      </div>

      {/* Application Stats */}
      <div className="gradient-div">
        <StatItem end={33} title="BOOKED SERVICES" />
        <StatItem end={200} title="NEW SERVICES" />
        <StatItem end={115} title="AMAZING DEALS" />
        <StatItem end={81} title="RESEARCH INSTITUTIONS" />
        <StatItem end={30} title="HAPPY CUSTOMERS" />
      </div>

      {/* Feature Showcase */}
      <div className="pt-24">
        <div className="px-16">
          <p className="text-2xl font-semibold text-neutral-700">Feature Showcase: Where Innovation Meets Functionality</p>
          <p className="text-neutral-700 pt-4">Unlock the power of our platform! Dive into a world of cutting-edge features designed to elevate your research experience. Whether you’re a seasoned researcher or an aspiring scholar, our tools empower you to explore, connect, and thrive.</p>
        </div>
        {/* Feature Cards */}
        <div className="py-10">
          <section className="feature-showcase">
            <div className="feature-card">
              <Image src="/assets/images/Feature-1.png" alt="Feature Image" className="feature-card-image" width={200} height={200} />
              <div className="feature-card-text">
                <h2 className="feature-card-header">Researcher Connect</h2>
                <p className="feature-card-subtitle">Book Your Expert Session</p>
              </div>
            </div>
            <div className="feature-card">
              <Image src="/assets/images/Feature-2.png" alt="Feature Image" className="feature-card-image" width={200} height={200} />
              <div className="feature-card-text">
                <h2 className="feature-card-header">Service Showcase</h2>
                <p className="feature-card-subtitle">Researchers, Post Your Offerings</p>
              </div>
            </div>
            <div className="feature-card">
              <Image src="/assets/images/Feature-3.png" alt="Feature Image" className="feature-card-image" width={200} height={200} />
              <div className="feature-card-text">
                <h2 className="feature-card-header">Knowledge Repository</h2>
                <p className="feature-card-subtitle">Explore Research Publications</p>
              </div>
            </div>
            <div className="feature-card">
              <Image src="/assets/images/Feature-4.png" alt="Feature Image" className="feature-card-image" width={200} height={200} />
              <div className="feature-card-text">
                <h2 className="feature-card-header">Discover Scholars</h2>
                <p className="feature-card-subtitle">Find Researchers on Our Platform</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Article Spotlight */}
      <div className="px-16">
        <div className="py-8">
          <p className="text-2xl font-semibold text-neutral-700 pb-8">Article Spotlight</p>
          {/* Banner Card */}
        <div className="blue-banner">
          <div className="blue-banner-overlay">
            <Image src="/assets/images/Banner-1.png" alt="Article Image" className="banner-image" width={1108} height={1024} />
            <div className="text-container">
              <p className="text-4xl  text-white">Illuminating Discoveries: Dive into Research Articles</p>
              <p className="text-base text-white pt-5">Welcome to our intellectual voyage! In this section, we delve into the heart of research, where curiosity meets revelation. Whether you’re a seasoned scholar or a curious explorer, prepare to be captivated by the following research journals.</p>
            </div>
          </div>
        </div>

        {/* Article Cards */}
        <div className="flex space-x-6 pt-10">
          <div className="article-card">
            <h2 className="article-title">Forecasting Renewable Energy Consumption under Zero Assumptions</h2>
            <p className="article-body">
              Renewable energy, as an environmentally friendly and sustainable source of energy, is key to realizing the nationally determined contributions of the United States (US) to the December 2015 Paris agreement. Policymakers in the US rely on energy forecasts to draft and...
            </p>
            <Link href="#" className="read-more">Read More</Link>
          </div>

          <div className="article-card">
            <h2 className="article-title">Forecasting Renewable Energy Consumption under Zero Assumptions</h2>
            <p className="article-body">
              Renewable energy, as an environmentally friendly and sustainable source of energy, is key to realizing the nationally determined contributions of the United States (US) to the December 2015 Paris agreement. Policymakers in the US rely on energy forecasts to draft and...
            </p>
            <Link href="#" className="read-more">Read More</Link>
          </div>

          <div className="article-card">
            <h2 className="article-title">Forecasting Renewable Energy Consumption under Zero Assumptions</h2>
            <p className="article-body">
              Renewable energy, as an environmentally friendly and sustainable source of energy, is key to realizing the nationally determined contributions of the United States (US) to the December 2015 Paris agreement. Policymakers in the US rely on energy forecasts to draft and...
            </p>
            <Link href="#" className="read-more">Read More</Link>
          </div>
        </div>
        </div>

        {/* Researchers Spotlight */}
          <div className="py-8">
            <p className="text-2xl font-semibold text-neutral-700 pb-8">Researchers Spotlight</p>

              {/* Article Card */}
            <div className="blue-banner">
              <div className="blue-banner-overlay">
                <Image src="/assets/images/Banner-2.png" alt="Article Image" className="banner-image" width={1108} height={1024} />
                <div className="text-container">
                  <p className="text-4xl  text-white">Minds Illuminated: Celebrating Pioneering Research Minds</p>
                  <p className="text-base text-white pt-5">Welcome to our intellectual voyage! In this section, we delve into the heart of research, where curiosity meets revelation. Whether you’re a seasoned scholar or a curious explorer, prepare to be captivated by our expert researchers.</p>
                </div>
              </div>
            </div>
          </div>

          


      </div>
    </main>
  );
}
