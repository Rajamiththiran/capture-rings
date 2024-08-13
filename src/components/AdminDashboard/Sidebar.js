import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link to="/admin/teams" className="text-lg">
            Teams
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/packages" className="text-lg">
            Packages
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/bookings" className="text-lg">
            Booking Details
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/blog-management" className="text-lg">
            Blog Management
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/event-gallery-management" className="text-lg">
            Event Gallery Management
          </Link>
        </li>
        {/* Add more sidebar items here */}
      </ul>
    </aside>
  );
};

export default Sidebar;
