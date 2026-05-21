import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] text-center px-6">
      <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10" />
      </div>
      <h1 className="text-5xl font-black text-[#0F172A] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-700 mb-6">Page Not Found</h2>
      <p className="text-slate-500 max-w-md mb-8">
        We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-gold !py-3.5 flex items-center gap-2 inline-flex">
        <Home className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
