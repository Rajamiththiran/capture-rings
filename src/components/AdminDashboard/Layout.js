import { Outlet } from 'react-router-dom';
import { AdminFooter } from './AdminFooter';
import { AdminHeader } from './AdminHeader';
import Sidebar from './Sidebar';

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};
