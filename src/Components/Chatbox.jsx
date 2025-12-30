import React, { useEffect, useRef, useState } from "react";
import fetchGeminiData from "../fetchGeminiData.js";

/**
 * Normalize Gemini response so UI never breaks
 */
const normalizeGeminiResponse = (res) => {
  if (!res) return "No response from Gemini.";

  if (typeof res === "string") {
    return res.trim();
  }

  // Fallback if response format changes in future
  try {
    return JSON.stringify(res, null, 2);
  } catch {
    return "Invalid response format.";
  }
};

const Chatbox = () => {
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [fault, setFault] = useState(false);
  const [allTimeData, setAllTimeData] = useState([]);

  const bottomRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim()) return;

    setLoader(true);
    setFault(false);

    try {
      const rawResponse = await fetchGeminiData(query);
      const formattedResponse = normalizeGeminiResponse(rawResponse);

      setAllTimeData((prev) => [
        ...prev,
        {
          userText: query,
          GeminiResponse: formattedResponse,
        },
      ]);
    } catch (error) {
      console.error("Gemini error:", error);
      setFault(true);
    } finally {
      setLoader(false);
      setQuery("");
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allTimeData]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Chat body */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {loader && (
          <div className="text-center text-gray-600 dark:text-gray-300">
            Loading...
          </div>
        )}

        {fault && (
          <div className="text-center text-red-500">
            Something went wrong. Please try again.
          </div>
        )}

        {allTimeData.map((data, index) => (
          <div key={index} className="space-y-2">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs break-words">
                {data.userText}
              </div>
            </div>

            {/* Gemini response */}
            <div className="flex justify-start">
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-xl max-w-xl">
                <pre className="whitespace-pre-wrap break-words text-sm">
                  {data.GeminiResponse}
                </pre>
              </div>
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 p-4 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Write your query..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-400 dark:bg-gray-700 dark:text-white outline-none"
          value={query}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
