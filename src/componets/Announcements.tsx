import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Loader2,
  Megaphone,
  RefreshCw,
  Send,
  Trash2,
  X,
} from 'lucide-react';
import axios from 'axios';

interface Announcement {
  id: string;
  title: string;
  message: string;
  createdBy: string;
  createdAt: string;
  persianDate?: string;
  smsResults?: Array<{
    representativeId: string;
    representativeName: string;
    phone: string;
    success: boolean;
    error: string | null;
  }>;
}

interface Props {
  apiUrl: string;
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
    'Content-Type': 'application/json',
  };
};

const Announcements: React.FC<Props> = ({ apiUrl }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const apiBase = String(apiUrl || API_URL).replace(/\/+$/, '');

  const loadAnnouncements = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${apiBase}/announcements`, {
        headers: getAuthHeaders(),
      });
      if (response.data?.success) {
        setAnnouncements(response.data.data || []);
      } else {
        throw new Error(response.data?.error || 'خطا در دریافت اطلاعیه‌ها');
      }
    } catch (e: any) {
      setError(e?.response?.data?.error || e?.message || 'خطا در دریافت');
    } finally {
      setLoading(false);
    }
  }, [apiBase]);

  useEffect(() => {
    void loadAnnouncements();
  }, [loadAnnouncements]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;
    setSubmitting(true);
    setSubmitResult(null);
    try {
      const response = await axios.post(
        `${apiBase}/announcements`,
        { title: title.trim(), message: message.trim() },
        { headers: getAuthHeaders() },
      );
      if (response.data?.success) {
        setSubmitResult(
          `اطلاعیه ثبت شد! ${response.data?.sms?.sent || 0} پیامک موفق${response.data?.sms?.failed ? `، ${response.data.sms.failed} ناموفق` : ''}.`,
        );
        setTitle('');
        setMessage('');
        setShowModal(false);
        await loadAnnouncements();
      } else {
        throw new Error(response.data?.error || 'خطا');
      }
    } catch (e: any) {
      setSubmitResult(null);
      setError(e?.response?.data?.error || e?.message || 'خطا در ثبت');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('آیا از حذف این اطلاعیه مطمئن هستید؟')) return;
    setDeleteId(id);
    try {
      await axios.delete(`${apiBase}/announcements/${id}`, {
        headers: getAuthHeaders(),
      });
      await loadAnnouncements();
    } catch (e: any) {
      setError(e?.response?.data?.error || 'خطا در حذف');
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div dir="rtl" className="space-y-6 pb-6">
      {/* هدر */}
      <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white">
              <Megaphone className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl">
                اعلام اطلاعیه‌ها
              </h2>
              <p className="mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400">
                اطلاعیه‌ها را مدیریت کنید و به‌طور خودکار به همه نمایندگان پیامک ارسال کنید.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadAnnouncements}
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
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
                setSubmitResult(null);
                setError('');
              }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-600 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-lg transition hover:from-amber-700 hover:to-orange-700"
            >
              <Send className="h-4 w-4" />
              ثبت اطلاعیه جدید
            </button>
          </div>
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

      {submitResult ? (
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs leading-6 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" />
            <p>{submitResult}</p>
          </div>
        </section>
      ) : null}

      {/* لیست اطلاعیه‌ها */}
      <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
        <h3 className="text-lg font-black text-gray-800 dark:text-gray-100">
          لیست اطلاعیه‌ها ({announcements.length})
        </h3>

        {loading ? (
          <div className="flex min-h-[200px] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
          </div>
        ) : announcements.length === 0 ? (
          <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
            <Bell className="mb-3 h-12 w-12 text-gray-300 dark:text-gray-600" />
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
              هنوز اطلاعیه‌ای ثبت نشده است.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {announcements.map((ann) => {
              const smsSent = ann.smsResults?.filter((r) => r.success).length || 0;
              const smsFailed = ann.smsResults?.filter((r) => !r.success).length || 0;
              return (
                <article
                  key={ann.id}
                  className="rounded-xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Megaphone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        <h4 className="break-words text-base font-black text-gray-800 dark:text-gray-100">
                          {ann.title}
                        </h4>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                        {ann.message}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span>
                          📅 {ann.persianDate || ann.createdAt?.slice(0, 10) || '—'}
                        </span>
                        <span>👤 {ann.createdBy || 'ادمین'}</span>
                        {smsSent > 0 ? (
                          <span className="rounded-full bg-emerald-100 px-2 py-1 font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                            ✅ {smsSent} پیامک موفق
                          </span>
                        ) : null}
                        {smsFailed > 0 ? (
                          <span className="rounded-full bg-red-100 px-2 py-1 font-bold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                            ❌ {smsFailed} ناموفق
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(ann.id)}
                      disabled={deleteId === ann.id}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-400"
                    >
                      {deleteId === ann.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* مودال ثبت اطلاعیه */}
      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
          onClick={() => !submitting && setShowModal(false)}
        >
          <div
            className="max-h-[92vh] w-full max-w-lg overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-amber-100 bg-gradient-to-l from-amber-50 to-orange-50 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-800">ثبت اطلاعیه جدید</h3>
                  <p className="text-xs text-slate-500">به همه نمایندگان پیامک ارسال می‌شود</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => !submitting && setShowModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="max-h-[calc(92vh-180px)] overflow-y-auto p-5">
              <div className="mb-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">
                    عنوان اطلاعیه <span className="text-rose-500">*</span>
                  </span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="مثال: تغییر ساعات کاری"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  />
                </label>
              </div>

              <div className="mb-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">
                    متن اطلاعیه <span className="text-rose-500">*</span>
                  </span>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="متن کامل اطلاعیه را بنویسید..."
                    required
                    maxLength={1000}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  />
                </label>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                <p className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  بعد از ثبت، به‌طور خودکار به همه نماینده‌های فعال پیامک ارسال می‌شود.
                </p>
              </div>

              <div className="mt-5 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => !submitting && setShowModal(false)}
                  disabled={submitting}
                  className="rounded-xl bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-300 disabled:opacity-50"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  disabled={submitting || !title.trim() || !message.trim()}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-600 to-orange-600 px-5 py-2.5 text-sm font-black text-white shadow-lg disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      در حال ثبت و ارسال...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      ثبت و ارسال
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Announcements;
