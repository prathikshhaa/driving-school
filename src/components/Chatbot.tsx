"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to Sri Ram Motor Driving School. How can I help you today?",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          border: "none",
          background: "#dc2626",
          color: "white",
          fontSize: "28px",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 10px 30px rgba(220,38,38,0.35)",
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "25px",
            width: "350px",
            height: "500px",
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            zIndex: 9999,
            boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#dc2626",
              color: "white",
              padding: "16px",
              fontWeight: 700,
            }}
          >
            🚗 Sri Ram Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "12px",
                  textAlign:
                    msg.role === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    maxWidth: "85%",
                    background:
                      msg.role === "user"
                        ? "#dc2626"
                        : "#f3f4f6",
                    color:
                      msg.role === "user"
                        ? "white"
                        : "#111827",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #eee",
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask something..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "14px",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "0 18px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}