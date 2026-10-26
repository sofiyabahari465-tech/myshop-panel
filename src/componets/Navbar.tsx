import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Crown,
  LogOut,
  Menu,
  User,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface Props {
  onToggleSidebar: () => void;
  userRole: 'admin' | 'representative';
  onRoleChange: (
    role: 'admin' | 'representative',
  ) => void;
  userName: string;
}

const Navbar: React.FC<Props> = ({
  onToggleSidebar,
  userRole,
  onRoleChange: _onRoleChange,
  userName,
}) => {
  const navigate = useNavigate();

  const isAdmin = userRole === 'admin';

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('representativeId');
    sessionStorage.removeItem('activeSection');

    localStorage.removeItem('token');
    localStorage.removeItem('authUser');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('representativeId');
    localStorage.removeItem('activeSection');

    navigate('/login', {
      replace: true,
    });
  };

  const safeUserName = userName?.trim() || 'کاربر';

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl transition-colors dark:border-gray-700 dark:bg-gray-900/80">
      <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6 md:py-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 py-1.5 text-[11px] font-bold text-white shadow-sm sm:px-3 sm:text-xs"
            title={
              isAdmin
                ? 'دسترسی کامل ادمین'
                : 'دسترسی پنل نمایندگی'
            }
          >
            {isAdmin ? (
              <Crown className="h-3.5 w-3.5" />
            ) : (
              <User className="h-3.5 w-3.5" />
            )}

            <span className="tracking-tight">{isAdmin ? 'ادمین' : 'نماینده'}</span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1.5 dark:border-gray-700 dark:bg-gray-800 sm:px-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-green-500 to-emerald-600 text-[11px] font-black text-white shadow-sm">
              {safeUserName.charAt(0)}
            </div>

            <div className="hidden lg:block">
              <p className="text-xs font-bold tracking-tight text-gray-800 dark:text-white">
                {safeUserName}
              </p>

              <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                {isAdmin ? 'مدیر سیستم' : 'نماینده'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
          <ThemeToggle />

          <button
            type="button"
            onClick={onToggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400 md:h-11 md:w-11"
            title="باز و بسته‌کردن منو"
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 sm:px-4 sm:text-sm"
            title="خروج از حساب"
          >
            <LogOut className="h-4 w-4" />

            <span className="hidden sm:inline">خروج</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;