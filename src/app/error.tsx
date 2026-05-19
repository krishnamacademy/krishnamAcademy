'use client';

import { useEffect } from 'react';
import { RefreshCcw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] text-center px-6">
      <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10" />
      </div>
      <h1 className="text-3xl font-black text-[#0F172A] mb-4">Something went wrong!</h1>
      <p className="text-slate-500 max-w-md mb-8">
        We encountered an unexpected error while trying to load this page. Our team has been notified.
      </p>
      <button
        onClick={() => reset()}
        className="btn-gold !py-3.5 flex items-center gap-2 inline-flex"
      >
        <RefreshCcw className="w-4 h-4" />
        <span>Try again</span>
      </button>
    </div>
  );
}
