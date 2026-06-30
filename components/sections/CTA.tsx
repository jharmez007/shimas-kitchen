import Link from "next/link";

export function CTA() {
  return (
    <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-orange-50 p-10 text-center shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-orange-600">Order today</p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-900">Enjoy restaurant-quality meals at home.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">Browse our menu, choose your favorites, and let us prepare a meal that feels special every night.</p>
      <Link href="/menu" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
        See the menu
      </Link>
    </div>
  );
}
