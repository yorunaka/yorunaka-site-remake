import { useState } from "react";
import React from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Vincent's portfolio assistant. Ask me about his projects, skills, experience, or anything else about his portfolio.",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim() || isLoading) return;

    const userMessage = message;

    setMessages((prev) => [
        ...prev,
        {
        role: "user",
        content: userMessage,
        },
    ]);

    setMessage("");
    setIsLoading(true);

    try {

        const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            message: userMessage,
        }),
        });

        const data = await response.json();

        if (!response.ok) {
        throw new Error(data.error);
        }

        setMessages((prev) => [
        ...prev,
        {
            role: "assistant",
            content: data.answer,
        },
        ]);

    } catch (error) {

        console.error(error);

        setMessages((prev) => [
        ...prev,
        {
            role: "assistant",
            content:
            "Sorry, something went wrong. Please try again.",
        },
        ]);

    } finally {

        setIsLoading(false);

    }
    };

  return (
    <div className="w-full max-w-3xl h-[350px] flex flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white/70 shadow-2xl backdrop-blur-xl lg:h-[400px]">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/50 px-5 py-4">

        <div>
          <h2 className="text-lg font-bold text-slate-800">
            ✦ Sakuya AI
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Portfolio Assistant
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">

          <span className="h-2 w-2 rounded-full bg-green-500" />

          Online

        </div>

      </div>


      {/* Messages */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-5">

        {messages.map((msg, index) => ( 

          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "rounded-br-md bg-sky-400 text-white"
                  : "rounded-bl-md bg-slate-100 text-slate-700"
              }`}
            >
              {msg.content}
            </div>

          </div>

        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3">

                <div className="flex gap-1">

                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

                    <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style={{ animationDelay: "150ms" }}
                    />

                    <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style={{ animationDelay: "300ms" }}
                    />

                </div>

                </div>
            </div>
            )}
      </div>


      {/* Suggestions */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-3">

        <button
          onClick={() =>
            setMessage("What projects have you built?")
          }
          className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:bg-slate-100"
        >
          Projects
        </button>

        <button
          onClick={() =>
            setMessage("What technologies do you use?")
          }
          className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:bg-slate-100"
        >
          Skills
        </button>

        <button
          onClick={() =>
            setMessage("Tell me about yourself.")
          }
          className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:bg-slate-100"
        >
          About
        </button>

      </div>


      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 border-t border-slate-200/50 p-4"
      >

        <input
          type="text"
          placeholder="Ask me something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />

        <button
          type="submit"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400 text-lg text-white transition hover:bg-sky-600 active:scale-95"
        >
          ➤
        </button>

      </form>

    </div>
  );
};

export default Chatbot;