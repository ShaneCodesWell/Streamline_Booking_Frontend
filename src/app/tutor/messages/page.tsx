// src/app/turor/messages/page.tsx
import LayoutLoggedIn from '../../../layouts/LoggedInLayout';

export default function Messages() {
  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
      <p className='text-[1.2em] font-medium' style={{ color: 'var(--text-color)' }}>Messages</p>
      </div>
    </LayoutLoggedIn>
  );
}