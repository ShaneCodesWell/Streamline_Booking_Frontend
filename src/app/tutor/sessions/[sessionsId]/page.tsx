// src/app/tutor/blogs/[sessionsId]/page.tsx
import LayoutLoggedIn from '../../../../layouts/LoggedInLayout';
import Image from 'next/image';

export default function Session() {
  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2 py-6'>
        {/* First Row: User Image, Name, and Rating */}
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center'>
            {/* User Image */}
            <div className='w-16 h-16'>
              <Image
                src="/assets/images/Shane.jpg"
                alt="User Avatar"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            {/* User Name */}
            <div className='ml-4'>
              <p className='text-lg font-medium text-[1.2rem] font-medium' style={{ color: 'var(--text-color)' }}>John Doe</p>
            </div>
          </div>
          {/* Star Rating */}
          <div className='flex items-center'>
            <span className='text-yellow-400 text-lg mr-2' style={{ color: 'var(--primary-color-2)' }}>★</span>
            <span className='text-lg font-medium' style={{ color: 'var(--text-color)' }}>4.5</span> {/* Example rating */}
          </div>
        </div>

        {/* Session Title */}
        <div className='mb-4'>
          <h2 className='text-xl font-semibold line-clamp-2 text-[1.2rem] font-medium' style={{ color: 'var(--text-color)' }}>
            Understanding Calculus: From Basics to Advanced
          </h2>
        </div>

        {/* Body Text */}
        <div className='mb-4'>
            <p className='text-[1rem]' style={{ color: 'var(--text-color)' }}>
                In this session, we will dive deep into the fundamentals of calculus, covering key concepts such as derivatives, integrals, and limits, and explore their applications in real-life problems.
            </p>
        </div>

        {/* Availability Tab */}
        <div className='inline-block mb-6'>
            <button className='py-1 px-4 rounded-lg' style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-color-2)' }}>
                Availability
            </button>
        </div>

        {/* Invisible Table for Days, Time, and Rate */}
        <div className='grid grid-cols-3 gap-4 text-gray-800 mb-6'>
          <div>
            <p className='font-medium py-2 text-[1.2rem] font-medium' style={{ color: 'var(--text-color)' }}>Days</p>
            <p className='text-[1rem] font-medium' style={{ color: 'var(--text-color)' }}>Monday</p>
            <p className='text-[1rem] font-medium' style={{ color: 'var(--text-color)' }}>Tuesday</p>
          </div>
          <div>
          <p className='font-medium py-2 text-[1.2rem] font-medium' style={{ color: 'var(--text-color)' }}>Time</p>
            <p className='text-[1rem] font-medium' style={{ color: 'var(--text-color)' }}>09:00 AM - 11:00 AM GMT</p>
            <p className='text-[1rem] font-medium' style={{ color: 'var(--text-color)' }}>02:00 PM - 04:00 PM GMT</p>
          </div>
          <div>
          <p className='font-medium py-2 text-[1.2rem] font-medium' style={{ color: 'var(--text-color)' }}>Rate</p>
            <p className='text-[1rem] font-medium' style={{ color: 'var(--text-color)' }}>$ 20.00 /hr</p>
            <p className='text-[1rem] font-medium' style={{ color: 'var(--text-color)' }}>$ 15.00 /hr</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex space-x-4 py-4'>
          <button className='bg-[#3782FB] text-white py-2 px-6 rounded-md'>
            Message Trainee
          </button>
          <button className='bg-[#FB3737] text-white py-2 px-6 rounded-md'>
            Cancel Session
          </button>
        </div>
      </div>
    </LayoutLoggedIn>
  );
}
