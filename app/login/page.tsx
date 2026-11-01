import { PillarAgent } from '@/components/PillarAgent';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 py-12">
      <div className="w-full max-w-md rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200 ring-1 ring-white/10">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Access</div>
            <div className="text-xl font-semibold text-white">Personal login</div>
          </div>
        </div>

        <div className="space-y-4">
          <input
            defaultValue="dru@orbitflow.app"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-500"
            placeholder="Email"
          />
          <input
            type="password"
            defaultValue="password123"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-500"
            placeholder="Password"
          />

          <a
            href="/dashboard"
            className="mt-4 block w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Enter personal workspace
          </a>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-200">
            Unlimited personal mode enabled for this workspace.
          </div>
        </div>
      </div>
    </main>
  );
}
