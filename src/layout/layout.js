import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
export function Layout() {
  return (
    <div>
      <header className=' w-full'>
        <Header />
      </header>
      <main className=''>
        <div className=''>
          <Outlet />
        </div>
      </main>
      {/* <footer>
        <SiteFooter />
      </footer> */}
    </div>
  );
}
