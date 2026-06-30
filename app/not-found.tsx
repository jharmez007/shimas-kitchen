import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center text-slate-900">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-xl text-base text-slate-600">
        The page you are looking for may have moved or the URL may be incorrect.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600">
        Back to Home
      </Link>
    </div>
  );
}
