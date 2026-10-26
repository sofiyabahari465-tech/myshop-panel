import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  AlertCircle,
  Bell,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import axios from 'axios';

interface Announcement {
  id: string;
  title: string;
  message: string;
  createdBy: string;
  createdAt: string;
  persianDate?: string;
}

const API_URL =
  (import.meta.env.VITE_API_URL || 'http://localhost:5000/api')
    .replace(/\/+$/, '');

const getAuthHeaders = () => {
  const token =
    localStorage.getItem('token') ||
    sessionStorage.getItem('token') ||
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken') ||
    '';
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  };
};

const Notifications: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadNotifications = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_URL}/announcements/my`, {
        headers: getAuthHeaders(),
      });
      if (response.data?.success) {
        setAnnouncements(response.data.data || []);
      } else {
        throw new Error(response.data?.error || 'خطا');
      }
    } catch (e: any) {
      setError(e?.response?.data?.error || e?.message || 'خطا در دریافت');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadNotifications();
  }, [loadNotifications]);

  return (
    <div dir="rtl" className="space-y-6 pb-6">
      <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white">
              <Bell className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl">
                اطلاع‌رسانی
              </h2>
              <p className="mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400">
                اطلاعیه‌ها و خبرهای جدید از مدیریت سیستم
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={loadNotifications}
            disabled={loading}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            بروزرسانی
          </button>
        </div>
      </section>

      {error ? (
        <section className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-1 h-4 w-4 shrink-0" />
            <p>{error}</p>
          </div>
        </section>
      ) : null}

      <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
        {loading ? (
          <div className="flex min-h-[200px] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
          </div>
        ) : announcements.length === 0 ? (
          <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
            <Bell className="mb-3 h-12 w-12 text-gray-300 dark:text-gray-600" />
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
              هنوز اطلاعیه‌ای دریافت نشده است.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {announcements.map((ann) => (
              <article
                key={ann.id}
                className="rounded-xl border border-cyan-200 bg-gradient-to-l from-cyan-50 to-white p-4 dark:border-cyan-900/30 dark:from-cyan-950/20 dark:to-gray-800"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="break-words text-base font-black text-gray-800 dark:text-gray-100">
                      {ann.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                      {ann.message}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span>
                        📅 {ann.persianDate || ann.createdAt?.slice(0, 10) || '—'}
                      </span>
                      <span>👤 {ann.createdBy || 'ادمین'}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Notifications;
