import React, { useState, useRef, useEffect } from "react";
import { SendHorizonal, MessageCircle } from "lucide-react";
import agriLogo from "../assets/AgricompareLogo.png";
import faqData from "../data/faqData"; // Import FAQ data

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm AgriMed Assistant. How can I help you?",
      type: "bot",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const wordLimit = 30;

  const limitWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input.trim(), type: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon"];
    if (greetings.some((greet) => input.trim().toLowerCase().includes(greet))) {
      setMessages((prev) => [
        ...prev,
        { text: "Hello! How can I assist you today?", type: "bot" },
      ]);
      setLoading(false);
      return;
    }

    const faqAnswer = faqData.find(
      (faq) => faq.question.toLowerCase() === input.trim().toLowerCase()
    );

    if (faqAnswer) {
      setMessages((prev) => [
        ...prev,
        { text: limitWords(faqAnswer.answer), type: "bot" },
      ]);
      setLoading(false);
    } else {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input.trim() }),
        });

        const data = await response.json();
        const botResponse = data?.reply;

        if (botResponse) {
          setMessages((prev) => [
            ...prev,
            { text: limitWords(botResponse), type: "bot" },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { text: "No response received.", type: "bot" },
          ]);
        }
      } catch (error) {
        console.error("API Error:", error);
        setMessages((prev) => [
          ...prev,
          { text: "Error contacting AI. Try again later.", type: "bot" },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg text-white flex items-center justify-center transition duration-300"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="w-[95vw] sm:w-[350px] h-[70vh] flex flex-col border border-green-200 rounded-2xl shadow-2xl bg-white overflow-hidden transition-all duration-500 ease-in-out">
          <div className="bg-green-600 text-white px-5 py-3 font-semibold text-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={agriLogo}
                alt="AgriMed Logo"
                className="h-6 w-6 object-contain"
              />
              AgriMed ChatBot
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg hover:text-green-200"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-green-50" ref={chatRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[80%] text-sm md:text-base ${
                  msg.type === "user"
                    ? "bg-green-200 self-end ml-auto text-right"
                    : "bg-white shadow-sm text-left"
                }`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
            {loading && (
              <div className="flex items-center text-green-500 text-sm">
                <div className="animate-pulse mr-2">Typing</div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex p-3 bg-white border-t border-green-200">
            <input
              className="flex-1 px-3 py-2 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={`ml-2 p-2 rounded-xl transition ${
                loading || !input.trim()
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              <SendHorizonal size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
