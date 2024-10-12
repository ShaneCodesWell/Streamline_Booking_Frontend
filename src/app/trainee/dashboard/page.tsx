// src/app/trainee/dashboard/page.tsx
'use client';
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';
import UpcomingSessions from '../../../components/upcomingSessions';
import Calendar from '../../../components/calendar';
import SectionHeader from '../../../components/section-header';
import Publication from '../../../components/publication-tab';
import BlogArticle from '../../../components/single-Blog';
import ChecklistTab from '@/components/checklistTab';

export default function TraineeDashboard() {

  const sessions = [
    { headerText: 'How to write a convincing research Introduction', subText: 'Dr. Amos Oppong', date: '8th Nov, 2024', time: '9:00 AM - 10:00 AM' },
    { headerText: 'How to write a convincing research Introduction', subText: 'Dr. Amos Oppong', date: '9th Nov 2024', time: '11:00 AM - 12:00 PM' },
  ];

  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
      <p className='text-[1.2em] font-medium mb-2' style={{ color: 'var(--text-color)' }}>Upcoming Sessions</p>
        <div className="flex justify-between gap-4">
          {/* Stacked Cards */}
            <UpcomingSessions sessions={sessions} />
            <Calendar />
        </div>
        {/* Research Checklist */}
        <div className='mt-6'>
          <SectionHeader title="Research Checklist" buttonText="View Checklist" />
          <div className="flex justify-center items-center flex-col gap-4 mt-2">
            <div className="flex flex-wrap justify-between gap-8 max-w-6xl">
              <ChecklistTab headerText='Writing accurate research figures' subText='Learn how to create clear, concise, and visually appealing research figures that effectively communicate your findings.' color='#3498db' />
              <ChecklistTab headerText='How to write a conference paper' subText='Master the art of writing a compelling conference paper that highlights your research, adheres to conference guidelines, and makes a lasting impression on the audience.' color='#8C6AB9' />
              <ChecklistTab headerText='Writing accurate research references' subText='Understand the importance of proper citation and referencing in academic research. Learn how to accurately cite sources using different citation styles (e.g., APA, MLA, Chicago).' color='#4CB94A' />
              <ChecklistTab headerText='How to write accurate research figures' subText='Learn how to create clear, concise, and visually appealing research figures that effectively communicate your findings.' color='#FB4337' />
            </div>
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <div className='mt-6'>
          <SectionHeader title="Books you might be interested In" buttonText="Learn More" />
        </div>
        <div className='flex justify-center items-center gap-16 mt-10'>
          <Publication title="Outliers: The Story of Success" author="Malcolm Gladwell" description="In this thought-provoking book, Malcolm Gladwell explores the factors that contribute to extraordinary success. From cultural background to timing, Gladwell uncovers hidden patterns that shape outliers—individuals who defy norms and achieve greatness." imageUrl="/assets/images/bookcover.jpg" />
          <Publication title="The Gifts of Imperfection" author="Brené Brown" description="Brené Brown’s game-changing New York Times bestseller invites us to embrace imperfection. With courage as our guide, we overcome paralyzing fear and self-consciousness, strengthening our connection to the world." imageUrl="/assets/images/bookcover2.jpg" />
        </div>
      </div>
      
      {/* Articles/Blogs */}
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <div className='mt-6'>
          <SectionHeader title="Blogs you might be interested In" buttonText="Learn More" />
        </div>
        <div className='flex justify-center items-center gap-6 mt-8'>
          <BlogArticle title="Key Determinants of Inflation in Ghana" author="Amos Oppong" description="Inflation, and its deleterious effects on economies, has for long been the worry of governments especially among developing countries including Ghana. Several studies on the Ghanaian economy, have concluded that inflation in Ghana is purely a monetary phenomenon though in reality, the causes of inflation are numerous and vary" imageUrl="/assets/images/blog-3.png" />
          <BlogArticle title="Forecasting Renewable Energy Consumption under Zero Assumptions" author="Amos Oppong" description="Renewable energy, as an environmentally friendly and sustainable source of energy, is key to realizing the nationally determined contributions of the United States (US) to the December 2015 Paris agreement. Policymakers in the US rely on energy forecasts to draft and implement cost-minimizing, efficient and realistic renewable and sustainable energy policies but the inaccuracies in past projections are considerably high." imageUrl="/assets/images/blog-2.png" />
        </div>
      </div>
    </LayoutLoggedIn>
  );
}