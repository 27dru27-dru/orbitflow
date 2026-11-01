import { PillarAgent } from '@/components/PillarAgent';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.22),transparent_30%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Personal workspace</div>
            <div className="text-lg font-bold">Dru</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
            Unlimited mode
          </div>
          <button className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-slate-500">
            dru@orbitflow.app
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-10">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { label: 'App Health', value: '99.9%', trend: '+2.4%' },
            { label: 'AI Score', value: '94', trend: '+8.1%' },
            { label: 'Deploys', value: '28', trend: '+7' },
            { label: 'Unlimited Mode', value: 'ON', trend: 'personal' },
          ].map((card) => (
            <div key={card.label} className="rounded-[22px] border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{card.label}</div>
              <div className="mt-3 flex items-end justify-between">
                <div className="text-2xl font-bold text-white">{card.value}</div>
                <div className="text-xs text-emerald-300">{card.trend}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-cyan-300" />
              <h3 className="text-xl font-semibold text-white">Workspace overview</h3>
            </div>
            <div className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
              live
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: 'Product Engine', value: 'Stable', icon: Code2 },
              { title: 'AI Ops Engine', value: 'Adaptive', icon: BrainCircuit },
              { title: 'Deploy Health', value: '99.9%', icon: Cloud },
            ].map(({ title, value, icon: Icon }) => (
              <div key={title} className="rounded-[22px] border border-slate-800 bg-slate-950/60 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-400">{title}</div>
                <div className="mt-2 text-xl font-bold text-white">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[22px] border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-300">System flow</div>
              <div className="text-xs text-slate-400">Updated now</div>
            </div>

            <div className="space-y-3">
              {[
                ['GitHub + repo', 'Synced'],
                ['Graphify + AI', 'Running'],
                ['Supabase + data', 'Healthy'],
                ['Deploy + preview', 'Ready'],
              ].map(([label, status]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <span className="text-sm text-slate-200">{label}</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/20">
          <div className="rounded-[26px] border border-slate-800 bg-[#091827] p-3 shadow-2xl shadow-cyan-950/30">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <div className="text-xs uppercase tracking-[0.22em] text-slate-300">Graphify</div>
              </div>
              <div className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-300">
                live map
              </div>
            </div>

            <svg viewBox="0 0 360 280" className="h-[270px] w-full rounded-[18px] border border-slate-800 bg-[#0b1628]">
              {[
                ['repo', 'ai'],
                ['ai', 'graph'],
                ['graph', 'db'],
                ['db', 'deploy'],
                ['graph', 'users'],
                ['repo', 'db'],
                ['ai', 'db'],
              ].map(([a, b]) => {
                const nodeA = [
                  { id: 'repo', x: 58, y: 74, label: 'Repo', color: '#67e8f9' },
                  { id: 'ai', x: 185, y: 40, label: 'AI', color: '#a78bfa' },
                  { id: 'graph', x: 292, y: 110, label: 'Graphify', color: '#f9a8d4' },
                  { id: 'db', x: 176, y: 182, label: 'Supabase', color: '#34d399' },
                  { id: 'deploy', x: 54, y: 198, label: 'Deploy', color: '#60a5fa' },
                  { id: 'users', x: 296, y: 222, label: 'Users', color: '#fbbf24' },
                ].find((n) => n.id === a)!;
                const nodeB = [
                  { id: 'repo', x: 58, y: 74, label: 'Repo', color: '#67e8f9' },
                  { id: 'ai', x: 185, y: 40, label: 'AI', color: '#a78bfa' },
                  { id: 'graph', x: 292, y: 110, label: 'Graphify', color: '#f9a8d4' },
                  { id: 'db', x: 176, y: 182, label: 'Supabase', color: '#34d399' },
                  { id: 'deploy', x: 54, y: 198, label: 'Deploy', color: '#60a5fa' },
                  { id: 'users', x: 296, y: 222, label: 'Users', color: '#fbbf24' },
                ].find((n) => n.id === b)!;

                return (
                  <line
                    key={`${a}-${b}`}
                    x1={nodeA.x}
                    y1={nodeA.y}
                    x2={nodeB.x}
                    y2={nodeB.y}
                    stroke="rgba(148,163,184,0.5)"
                    strokeWidth="1.3"
                  />
                );
              })}

              {[
                { id: 'repo', x: 58, y: 74, label: 'Repo', color: '#67e8f9' },
                { id: 'ai', x: 185, y: 40, label: 'AI', color: '#a78bfa' },
                { id: 'graph', x: 292, y: 110, label: 'Graphify', color: '#f9a8d4' },
                { id: 'db', x: 176, y: 182, label: 'Supabase', color: '#34d399' },
                { id: 'deploy', x: 54, y: 198, label: 'Deploy', color: '#60a5fa' },
                { id: 'users', x: 296, y: 222, label: 'Users', color: '#fbbf24' },
              ].map((node) => (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="28"
                    fill={node.color}
                    fillOpacity="0.16"
                    stroke={node.color}
                    strokeOpacity="0.8"
                  />
                  <circle cx={node.x} cy={node.y} r="7" fill={node.color} />
                  <text
                    x={node.x}
                    y={node.y + 42}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#e2e8f0"
                    fontWeight="600"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-8">
          <div className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-300">Two pillar architecture</div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Built to keep the app smooth, adaptive, and explainable.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Product Engine',
              summary: 'Source, database, and deployment are connected into one stable engine that keeps the app reliable.',
              accent: 'from-cyan-500/20 to-blue-500/10',
              icon: Code2,
              items: [
                { label: 'GitHub layer', value: 'Version + PR flow' },
                { label: 'Supabase layer', value: 'Auth + data + sync' },
                { label: 'Deploy layer', value: 'Preview + production' },
              ],
            },
            {
              title: 'AI Ops Engine',
              summary: 'This engine turns system context into decisions, guidance, and live action using Graphify and AI.',
              accent: 'from-violet-500/20 to-fuchsia-500/10',
              icon: BrainCircuit,
              items: [
                { label: 'Graphify', value: 'System mapping' },
                { label: 'Pillar Agent', value: 'Explains everything' },
                { label: 'Automation', value: 'Smart next steps' },
              ],
            },
          ].map((pillar) => (
            <div key={pillar.title} className={`rounded-[28px] border border-slate-800 bg-gradient-to-br ${pillar.accent} p-[1px]`}>
              <div className="h-full rounded-[27px] border border-slate-800 bg-slate-950/90 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-cyan-300">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-white">{pillar.title}</div>
                  </div>
                  <div className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                    Core
                  </div>
                </div>

                <p className="mb-6 text-sm leading-6 text-slate-300">{pillar.summary}</p>

                <div className="space-y-3">
                  {pillar.items.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium text-white">{item.label}</div>
                        <div className="text-xs text-slate-400">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-violet-300" />
                <h3 className="text-xl font-semibold text-white">Pillar Agent</h3>
              </div>
              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                online
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Explains architecture', value: 'Yes' },
                { label: 'Knows pillars', value: 'Yes' },
                { label: 'Explains deploy flow', value: 'Yes' },
                { label: 'Explains Graphify', value: 'Yes' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                  <span className="text-sm text-slate-200">{item.label}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-cyan-300">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-200">
                <MessageSquareText className="h-4 w-4 text-cyan-300" />
                Ask me
              </div>
              <p className="text-sm text-slate-300">
                “Explain the app”, “What is Product Engine?”, “How does Graphify work?”, “What keeps the app smooth?”
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquareText className="h-5 w-5 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">Agent chat</h3>
              </div>
            </div>

            <div className="max-h-[440px] space-y-3 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-cyan-500/15 text-cyan-100'
                      : 'border border-slate-800 bg-slate-900/80 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                placeholder="Ask the Pillar Agent anything..."
                className="flex-1 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleSend}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-sm font-semibold text-slate-950"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-300" />
                <h3 className="text-xl font-semibold text-white">Operations pulse</h3>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ['Source flow', '99.9%'],
                ['Data integrity', '98.6%'],
                ['AI suggestions', '96.2%'],
                ['Deploy response', '99.4%'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{label}</span>
                    <span className="text-slate-100">{value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">Personal task board</h3>
              </div>
              <button className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300">
                New
              </button>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Define personal launch plan', owner: 'You', priority: 'High', done: false },
                { title: 'Review AI-generated architecture notes', owner: 'Pillar Agent', priority: 'Medium', done: true },
                { title: 'Check deploy readiness', owner: 'Ops', priority: 'High', done: false },
                { title: 'Package project summary', owner: 'You', priority: 'Low', done: true },
              ].map((task) => (
                <div key={task.title} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${task.done ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
                      {task.done ? <CheckCircle2 className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-100">{task.title}</div>
                      <div className="text-xs text-slate-400">{task.owner}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${task.priority === 'High' ? 'bg-rose-500/10 text-rose-300' : task.priority === 'Medium' ? 'bg-violet-500/10 text-violet-300' : 'bg-slate-700 text-slate-300'}`}>
                      {task.priority}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-slate-800 px-6 py-8 text-sm text-slate-400">
        <div>© 2026 OrbitFlow</div>
        <div className="flex items-center gap-6">
          <span>Overview</span>
          <span>Graphify</span>
          <span>Pillars</span>
          <span>Agent</span>
        </div>
      </footer>
    </main>
  );
}
