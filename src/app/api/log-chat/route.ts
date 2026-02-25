function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  const { messages, sessionId } = await req.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return Response.json({ ok: false });

  const lines = (messages as { role: string; content: string }[]).map((m) =>
    m.role === "user"
      ? `👤 <b>Visitor:</b> ${escapeHtml(m.content)}`
      : `🤖 <b>Dayana:</b> ${escapeHtml(m.content)}`
  );

  const text = [
    `📋 <b>Dayana Chat Log</b>`,
    `🔑 Session: <code>${escapeHtml(sessionId)}</code>`,
    `🕐 ${new Date().toUTCString()}`,
    ``,
    ...lines,
  ].join("\n");

  // Telegram max message length is 4096 — split if needed
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += 4000) chunks.push(text.slice(i, i + 4000));

  for (const chunk of chunks) {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: chunk, parse_mode: "HTML" }),
    });
  }

  return Response.json({ ok: true });
}
