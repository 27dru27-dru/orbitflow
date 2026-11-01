import { PillarAgent } from '@/components/PillarAgent';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07111f] p-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Personal workspace</p>
          <h1 className="mt-2 text-4xl font-bold">OrbitFlow Dashboard</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-3">AI Score: 94</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-3">Deploy health: 99.9%</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-3">Unlimited mode: ON</div>
            </div>
          </div>

          <PillarAgent />
        </div>
      </div>
    </main>
  );
}
