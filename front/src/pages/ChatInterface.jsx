

import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import Axios from "axios";
import toast from "react-hot-toast";

const ChatInterface = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await Axios.post("https://islamic-ai-ncdk.onrender.com/api/v1/chat", {
        message: query,
        botType: "default",
      });

      if (res.data?.data?.reply) {
        setResponse(res.data.data.reply);
      } else {
        toast.error("No reply received from server.");
      }
    } catch (err) {
      console.error("Error sending chat:", err);
      toast.error(
        err.response?.data?.error || "Failed to get response from server."
      );
    } finally {
      setLoading(false);
    }
  };

  // Convert AI text into readable paragraphs & bullet points
  const formatResponse = (text) => {
    if (!text) return null;

    const lines = text.split("\n").filter((line) => line.trim() !== "");
    let bulletCount = 0;

    return lines.map((line, index) => {
      if (line.trim().startsWith("*")) {
        bulletCount++;
        return (
          <li key={index} className="mb-1">
            <span className="font-semibold text-orange-400">
              {bulletCount}.
            </span>{" "}
            {line.replace("*", "").trim()}
          </li>
        );
      }
      return (
        <p key={index} className="mb-3">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-gray-900 border border-gray-700 text-white text-lg px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
              placeholder="Type your question here..."
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <Send size={18} />
              )}
              {loading ? "Thinking..." : "Ask"}
            </button>
          </form>

          {/* Response or Loader */}
          <div className="mt-8 min-h-[80px]">
            {loading && (
              <div className="flex items-center gap-2 text-gray-400 animate-pulse mt-6">
                <Loader2 className="animate-spin text-orange-400" size={20} />
                <span>AI is thinking...</span>
              </div>
            )}

            {response && !loading && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">
                  Response
                </h3>
                <div className="text-gray-300 leading-relaxed">
                  {formatResponse(response)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatInterface;
