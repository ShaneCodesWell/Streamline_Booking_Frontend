// src/app/tutor/blogs/page.tsx
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';
import BookedCard from '../../../components/session';

export default function BookedSessions() {
  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
      <p className='text-[1.2em] font-medium' style={{ color: 'var(--text-color)' }}>Booked Sessions</p>
      <p className='text-[0.85em] font-medium mb-4' style={{ color: 'var(--text-color)' }}>See your scheduled events from your Calendar event links.</p>
        <BookedCard />
        <BookedCard />
        <BookedCard />
        <BookedCard />
        <BookedCard />
        <BookedCard />
        <BookedCard />
        <BookedCard />
        <BookedCard />
      </div>
      
    </LayoutLoggedIn>
  );
}