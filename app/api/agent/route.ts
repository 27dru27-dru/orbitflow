import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const prompt = body.prompt || '';

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt required' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { text: 'This demo is running without an OpenAI key. The agent is operating in local fallback mode, and can still explain the app structure conceptually.' },
      { status: 200 }
    );
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are the Pillar Agent for OrbitFlow. Explain the app architecture, Product Engine, AI Ops Engine, Graphify, deployment flow, and how the whole system stays smooth and understandable.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: 500 });
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content ?? 'No response';

  return NextResponse.json({ text });
}
