
const stats = [
  { label: "Total revenue", value: "₹12,48,500", change: "+12.8%" },
  { label: "Pending orders", value: "248", change: "+8.2%" },
  { label: "Active customers", value: "1,840", change: "+14.5%" },
  { label: "Inventory items", value: "3,256", change: "In stock" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] p-6 text-slate-900 md:p-10">
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-violet-600">erp4u</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Your dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            An overview of your business operations.
          </p>
        </div>
        <span className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
          Workspace overview
        </span>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">
              {stat.value}
            </p>
            <p className="mt-3 text-xs font-medium text-violet-600">
              {stat.change}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-violet-50 text-xl text-violet-600">
            ◫
          </span>
          <div>
            <h2 className="font-semibold">Business overview</h2>
            <p className="mt-1 text-sm text-slate-500">
              Your ERP modules will appear here.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Finance", "Inventory", "Human resources", "Operations"].map(
            (module) => (
              <div
                key={module}
                className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-sm font-medium"
              >
                {module}
                <p className="mt-2 text-xs font-normal text-slate-500">
                  Module setup pending
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
