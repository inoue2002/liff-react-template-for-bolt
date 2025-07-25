import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';

export function Footer() {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-10">
      <nav className="grid grid-cols-2 h-full">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-2 transition-colors ${
            location.pathname === '/'
              ? 'text-green-600 bg-green-50'
              : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
          }`}
        >
          <HomeIcon className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">メイン</span>
        </Link>
        
        <Link
          to="/user"
          className={`flex flex-col items-center justify-center py-2 transition-colors ${
            location.pathname === '/user'
              ? 'text-green-600 bg-green-50'
              : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
          }`}
        >
          <UserIcon className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">ユーザー</span>
        </Link>
      </nav>
    </footer>
  );
}