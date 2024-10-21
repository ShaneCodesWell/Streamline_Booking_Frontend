// src/app/tutor/services/page.tsx
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';
import ServiceCard from '@/components/service-card';
import Link from 'next/link';

export default function ServiceList() {
  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
      <div className="flex justify-between items-center mb-4">
        <div>
            <p className="text-[1.2em] font-medium" style={{ color: 'var(--text-color)' }}>
                Created Sessions
            </p>
            <p className="text-[0.85em] font-medium" style={{ color: 'var(--text-color)' }}>
                See all your created scheduled events.
            </p>
        </div>
        <Link href="/tutor/services/add-service">
                <button className="bg-[var(--sidebar-color)] border border-[var(--primary-color)] text-[#5CA5FE] px-5 py-2.5 text-[0.85em] rounded-[10px] shadow-md cursor-pointer transition-colors hover:bg-[var(--primary-color)] hover:text-white">
                Add Service
                </button>
        </Link>
        </div>
        <div className="flex flex-grid gap-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
        <div className="flex flex-grid gap-4 mt-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
      </div>
      
    </LayoutLoggedIn>
  );
}