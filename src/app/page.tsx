
export default function HomePage() {
  return (
    <main className="container-app section-spacing space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-brand-700">
          বাংলাদেশের বাজারদর
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          বাজার দর
        </h1>

        <p className="max-w-xl text-base text-gray-600">
          প্রয়োজনীয় পণ্যের দাম এক নজরে দেখুন।
        </p>
      </header>

      <section className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="card-title">মিনিকেট চাল</h2>
            <span className="badge badge-success">▲ ২.১%</span>
          </div>

          <p className="text-sm text-gray-500">প্রতি কেজি</p>

          <p className="text-3xl font-bold">
            ৭৫ <span className="text-base font-medium">টাকা</span>
          </p>

          <div className="card-actions">
            <button className="btn btn-primary">
              বিস্তারিত দেখুন
            </button>

            <button className="btn btn-outline">
              আরও পণ্য
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
