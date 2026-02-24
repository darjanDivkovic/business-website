"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GradientDots } from "@/components/ui/gradient-dots";

const WEBHOOK_URL =
  "https://darjan.app.n8n.cloud/webhook/a09badee-79cb-4aaa-9ebc-ed3413a8fe18/chat";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

function generateSessionId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      // Measure scrollbar width before hiding it so we can compensate
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (sw > 0) document.body.style.paddingRight = `${sw}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      const t = setTimeout(() => setVisible(false), 320);
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => textareaRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "48px";
    el.style.height = `${Math.min(el.scrollHeight, 150)}px`;
  }, []);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "48px";
    setIsLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: trimmed, sessionId }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const reply =
        data.output ??
        data.text ??
        data.response ??
        "Sorry, I couldn't process that.";
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, sessionId]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage],
  );

  const hasMessages = messages.length > 0;
  const canSend = input.trim().length > 0 && !isLoading;

  /* ─── Bot avatar (reused) ─────────────────────────────── */
  const botAvatar = (size: number, iconSize: number) => (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Bot style={{ width: iconSize, height: iconSize, color: "white" }} />
    </div>
  );

  /* ─── Shared input bar ────────────────────────────────── */
  const inputBar = (
    <div
      style={{
        width: "100%",
        maxWidth: "720px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          backgroundColor: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px",
          padding: "6px 6px 6px 18px",
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
        }}
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            adjustHeight();
          }}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything…"
          rows={1}
          style={{
            flex: 1,
            resize: "none",
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            /* 16px minimum prevents Safari from auto-zooming on focus */
            fontSize: "16px",
            lineHeight: "1.55",
            fontFamily: "inherit",
            minHeight: "48px",
            maxHeight: "150px",
            overflow: "hidden",
            padding: "12px 0",
            /* Remove iOS inner shadow on inputs */
            WebkitAppearance: "none",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={!canSend}
          style={{
            flexShrink: 0,
            width: "42px",
            height: "42px",
            borderRadius: "13px",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3px",
            cursor: canSend ? "pointer" : "not-allowed",
            backgroundColor: canSend ? "white" : "rgba(255,255,255,0.05)",
            color: canSend ? "black" : "rgba(255,255,255,0.18)",
            boxShadow: "none",
            transition: "background-color 0.2s, box-shadow 0.2s",
          }}
          aria-label="Send"
        >
          <Send style={{ width: "16px", height: "16px" }} />
        </button>
      </div>
      <p
        className="chat-hint-text"
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.15)",
          fontSize: "11px",
          marginTop: "10px",
          letterSpacing: "0.05em",
        }}
      >
        Dayana AI · Enter to send · Shift+Enter for new line
      </p>
    </div>
  );

  return (
    <>
      {/* ── Toggle button ─────────────────────────────── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={
          isOpen ? "chat-toggle-btn chat-toggle-open" : "chat-toggle-btn"
        }
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 9001,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "#000",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "box-shadow 0.3s",
        }}
      >
        <span
          style={{
            position: "absolute",
            display: "flex",
            transition: "opacity 0.18s, transform 0.18s",
            opacity: isOpen ? 0 : 1,
            transform: isOpen
              ? "rotate(90deg) scale(0.4)"
              : "rotate(0deg) scale(1)",
          }}
        >
          <MessageCircle
            style={{ width: "24px", height: "24px", color: "white" }}
          />
        </span>
        <span
          style={{
            position: "absolute",
            display: "flex",
            transition: "opacity 0.18s, transform 0.18s",
            opacity: isOpen ? 1 : 0,
            transform: isOpen
              ? "rotate(0deg) scale(1)"
              : "rotate(-90deg) scale(0.4)",
          }}
        >
          <X style={{ width: "24px", height: "24px", color: "white" }} />
        </span>
      </button>

      {/* ── Full-screen overlay ────────────────────────── */}
      {visible && (
        <div
          className="chat-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9000,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000000",
            overflow: "hidden",
            transition: "opacity 0.32s ease, transform 0.32s ease",
            opacity: isOpen ? 1 : 0,
            transform: isOpen
              ? "translateY(0) scale(1)"
              : "translateY(28px) scale(0.98)",
            transformOrigin: "bottom right",
          }}
        >
          <GradientDots
            dotSize={5}
            spacing={5}
            duration={32}
            backgroundColor="#000000"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          />

          {/* Top bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 28px",
              borderBottom: hasMessages
                ? "1px solid rgba(255,255,255,0.08)"
                : "none",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {botAvatar(34, 17)}
              <span
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  fontFamily: "inherit",
                }}
              >
                Dayana AI
              </span>
              {/* Online dot */}
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(20, 255, 126)",
                }}
              />
            </div>
            {/* Hidden on mobile via CSS */}
            <span
              className="chat-esc-hint"
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "12px",
                letterSpacing: "0.05em",
              }}
            >
              ESC to close
            </span>
          </div>

          {/* ── Landing view ─────────────────────────── */}
          {!hasMessages && (
            <div
              className="chat-landing"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 24px",
                paddingBottom: "100px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "52px" }}>
                {/* Large avatar */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 28px",
                    boxShadow: "0 0 0 14px rgba(255,255,255,0.03)",
                  }}
                >
                  <Bot
                    style={{ width: "38px", height: "38px", color: "white" }}
                  />
                </div>

                <h1
                  style={{
                    color: "white",
                    fontSize: "clamp(30px, 5vw, 52px)",
                    fontWeight: 600,
                    margin: "0 0 14px",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    fontFamily: "inherit",
                  }}
                >
                  Hi, I&apos;m Dayana
                </h1>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "clamp(14px, 2vw, 18px)",
                    margin: 0,
                    lineHeight: 1.55,
                    maxWidth: "400px",
                  }}
                >
                  Ask me about services, availability, past projects, or
                  anything else.
                </p>
              </div>

              {inputBar}
            </div>
          )}

          {/* ── Chat view ────────────────────────────── */}
          {hasMessages && (
            <>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  /* Smooth momentum scroll on iOS */
                  WebkitOverflowScrolling: "touch",
                  padding: "32px 0 16px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    maxWidth: "720px",
                    margin: "0 auto",
                    padding: "0 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      style={{
                        display: "flex",
                        justifyContent:
                          msg.role === "user" ? "flex-end" : "flex-start",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      {msg.role === "assistant" && (
                        <div style={{ marginTop: "4px" }}>
                          {botAvatar(30, 14)}
                        </div>
                      )}
                      <div
                        style={{
                          maxWidth: "80%",
                          borderRadius: "20px",
                          borderBottomRightRadius:
                            msg.role === "user" ? "5px" : "20px",
                          borderBottomLeftRadius:
                            msg.role === "assistant" ? "5px" : "20px",
                          padding: "13px 18px",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          wordBreak: "break-word",
                          backgroundColor:
                            msg.role === "user"
                              ? "white"
                              : "rgba(255,255,255,0.06)",
                          border:
                            msg.role === "assistant"
                              ? "1px solid rgba(255,255,255,0.1)"
                              : "none",
                          color:
                            msg.role === "user"
                              ? "black"
                              : "rgba(255,255,255,0.88)",
                          boxShadow: "none",
                        }}
                      >
                        {msg.role === "assistant" ? (
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ children }) => (
                                <p style={{ margin: "0 0 8px" }}>{children}</p>
                              ),
                              ul: ({ children }) => (
                                <ul
                                  style={{
                                    margin: "6px 0",
                                    paddingLeft: "20px",
                                  }}
                                >
                                  {children}
                                </ul>
                              ),
                              ol: ({ children }) => (
                                <ol
                                  style={{
                                    margin: "6px 0",
                                    paddingLeft: "20px",
                                  }}
                                >
                                  {children}
                                </ol>
                              ),
                              li: ({ children }) => (
                                <li style={{ marginBottom: "4px" }}>
                                  {children}
                                </li>
                              ),
                              strong: ({ children }) => (
                                <strong
                                  style={{ fontWeight: 600, color: "inherit" }}
                                >
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em style={{ fontStyle: "italic" }}>
                                  {children}
                                </em>
                              ),
                              code: ({ children, className }) => {
                                const isBlock =
                                  className?.includes("language-");
                                return isBlock ? (
                                  <code
                                    style={{
                                      display: "block",
                                      background: "rgba(255,255,255,0.07)",
                                      border:
                                        "1px solid rgba(255,255,255,0.12)",
                                      borderRadius: "8px",
                                      padding: "10px 14px",
                                      fontSize: "13px",
                                      fontFamily: "monospace",
                                      overflowX: "auto",
                                      margin: "8px 0",
                                      whiteSpace: "pre",
                                    }}
                                  >
                                    {children}
                                  </code>
                                ) : (
                                  <code
                                    style={{
                                      background: "rgba(255,255,255,0.1)",
                                      borderRadius: "4px",
                                      padding: "1px 5px",
                                      fontSize: "13px",
                                      fontFamily: "monospace",
                                    }}
                                  >
                                    {children}
                                  </code>
                                );
                              },
                              pre: ({ children }) => (
                                <pre
                                  style={{
                                    margin: "8px 0",
                                    background: "none",
                                    padding: 0,
                                  }}
                                >
                                  {children}
                                </pre>
                              ),
                              h1: ({ children }) => (
                                <h1
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: 600,
                                    margin: "0 0 8px",
                                    color: "white",
                                  }}
                                >
                                  {children}
                                </h1>
                              ),
                              h2: ({ children }) => (
                                <h2
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    margin: "0 0 6px",
                                    color: "white",
                                  }}
                                >
                                  {children}
                                </h2>
                              ),
                              h3: ({ children }) => (
                                <h3
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    margin: "0 0 4px",
                                    color: "white",
                                  }}
                                >
                                  {children}
                                </h3>
                              ),
                              a: ({ children, href }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    color: "#AAAAFF",
                                    textDecoration: "underline",
                                  }}
                                >
                                  {children}
                                </a>
                              ),
                              hr: () => (
                                <hr
                                  style={{
                                    border: "none",
                                    borderTop:
                                      "1px solid rgba(255,255,255,0.12)",
                                    margin: "10px 0",
                                  }}
                                />
                              ),
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        ) : (
                          msg.content
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isLoading && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div style={{ marginTop: "4px" }}>
                        {botAvatar(30, 14)}
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "20px",
                          borderBottomLeftRadius: "5px",
                          padding: "16px 20px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            style={{
                              display: "block",
                              width: "7px",
                              height: "7px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(255,255,255,0.55)",
                              animation: `chatDot 0.8s ${i * 0.16}s infinite ease-in-out`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div
                className="chat-input-wrapper"
                style={{
                  padding: "12px 0 32px",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {inputBar}
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes chatDot {
          0%, 100% { opacity: 0.3; transform: translateY(0px); }
          50%       { opacity: 1;   transform: translateY(-5px); }
        }

        /*
         * Use dynamic viewport height so the overlay shrinks correctly
         * when the iOS soft keyboard appears — keeps the input visible.
         */
        .chat-overlay {
          height: 100dvh !important;
        }

        /* Pad input bar above the iPhone home indicator */
        .chat-input-wrapper {
          padding-bottom: max(32px, env(safe-area-inset-bottom, 0px)) !important;
        }

        /* Same for the landing view CTA */
        .chat-landing {
          padding-bottom: max(100px, calc(80px + env(safe-area-inset-bottom, 0px))) !important;
        }

        /* "ESC to close" is meaningless on touch — hide it */
        @media (max-width: 768px) {
          .chat-esc-hint { display: none !important; }
          .chat-hint-text { display: none !important; }
        }

        /*
         * When the chat is open on mobile, centre the X button at the bottom
         * so it floats naturally over the full-screen overlay.
         */
        @media (max-width: 768px) {
          .chat-toggle-open {
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
