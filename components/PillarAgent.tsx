"use client";

import { useState } from 'react';

export function PillarAgent() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('Ask the agent about the app architecture, pillars, or system flow.');
  const [loading, setLoading] = useState(false);

  const askAgent = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: question || 'Explain how this app works.' }),
      });

      const data = await res.json();
      setAnswer(data.text ?? 'No response');
    } catch (error) {
      setAnswer('The agent is unavailable right now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2v2" />
              <path d="M4.93 4.93l1.42 1.42" />
              <path d="M17.65 17.65l1.42 1.42" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M4.93 19.07l1.42-1.42" />
              <path d="M17.65 6.35l1.42-1.42" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Pillar Agent</h3>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
          online
        </div>
      </div>

      <div className="max-h-[320px] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-200">
        {answer}
      </div>

      <div className="mt-4 flex gap-3">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about architecture, pillars, or Graphify..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-500"
        />
        <button
          onClick={askAgent}
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>
    </div>
  );
}
