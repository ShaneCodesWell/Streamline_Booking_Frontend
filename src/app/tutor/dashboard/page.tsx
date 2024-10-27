// src/app/tutor/dashboard/page.tsx
"use client";
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';
import ProfileStatCard from '../../../components/profileStatCard';
import Calendar from '../../../components/calendar';
import SectionHeader from '../../../components/section-header';
import ServiceCard from '@/components/service-card';
import Publication from '../../../components/publication-tab';
import BlogArticle from '../../../components/single-Blog';
import Link from 'next/link';

export default function TutorDashboard() {
  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <div className="flex flex-row gap-4">
        <ProfileStatCard
          servicesCount={200}
          publicationsCount={50}
          followersCount={'1K'}
          blogsCount={30}
        />
          <Calendar />
        </div>
        <div className='mt-6'>
        <div className="flex justify-between items-center mb-4">
          <div>
              <p className="text-[1.2em] font-medium" style={{ color: 'var(--text-color)' }}>
                  Services
              </p>
          </div>
          <Link href="/tutor/services/add-service">
                  <button className="bg-[var(--sidebar-color)] border border-[var(--primary-color)] text-[#5CA5FE] px-5 py-2.5 text-[0.85em] rounded-[10px] shadow-md cursor-pointer transition-colors hover:bg-[var(--primary-color)] hover:text-white">
                  Add Service
                  </button>
          </Link>
        </div>
          <div className="flex justify-center items-center flex-col gap-4 mt-2">
            <div className="flex flex-grid gap-4">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
            <div className="flex flex-grid gap-4">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <div className='mt-6'>
          <SectionHeader title="Popular Publications" buttonText="Learn More" />
        </div>
        <div className='flex justify-center items-center gap-16 mt-10'>
          <Publication title="Outliers: The Story of Success" author="Malcolm Gladwell" description="In this thought-provoking book, Malcolm Gladwell explores the factors that contribute to extraordinary success. From cultural background to timing, Gladwell uncovers hidden patterns that shape outliers—individuals who defy norms and achieve greatness." imageUrl="/assets/images/bookcover.jpg" />
          <Publication title="The Gifts of Imperfection" author="Brené Brown" description="Brené Brown’s game-changing New York Times bestseller invites us to embrace imperfection. With courage as our guide, we overcome paralyzing fear and self-consciousness, strengthening our connection to the world." imageUrl="/assets/images/bookcover2.jpg" />
        </div>
      </div>
      
      {/* Articles/Blogs */}
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <div className='mt-6'>
          <SectionHeader title="Explore Articles" buttonText="Learn More" />
        </div>
        <div className='flex justify-center items-center gap-12 mt-8'>
          <BlogArticle title="Key Determinants of Inflation in Ghana" author="Amos Oppong" description="Inflation, and its deleterious effects on economies, has for long been the worry of governments especially among developing countries including Ghana. Several studies on the Ghanaian economy, have concluded that inflation in Ghana is purely a monetary phenomenon though in reality, the causes of inflation are numerous and vary" imageUrl="/assets/images/blog-3.png" />
          <BlogArticle title="Forecasting Renewable Energy Consumption under Zero Assumptions" author="Amos Oppong" description="Renewable energy, as an environmentally friendly and sustainable source of energy, is key to realizing the nationally determined contributions of the United States (US) to the December 2015 Paris agreement. Policymakers in the US rely on energy forecasts to draft and implement cost-minimizing, efficient and realistic renewable and sustainable energy policies but the inaccuracies in past projections are considerably high." imageUrl="/assets/images/blog-2.png" />
        </div>
      </div>
    </LayoutLoggedIn>
  );
}