export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header>
          <p className="text-sm font-semibold uppercase text-blue-700">
            Beacon
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            Job Monitoring Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Monitor job runs, failures, retries, and pipeline health.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            Total Jobs
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            Running
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            Failed
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            Warnings
          </div>
        </section>
      </div>
    </div>
  );
}