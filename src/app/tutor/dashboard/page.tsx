// src/app/tutor/dashboard/page.tsx
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';
import ProfileStatCard from '../../../components/profileStatCard';
import Calendar from '../../../components/calendar';

export default function TutorDashboard() {
  return (
    <LayoutLoggedIn>
      <div className="flex flex-row gap-4">
        <ProfileStatCard />
        <Calendar />
      </div>
    </LayoutLoggedIn>
  );
}