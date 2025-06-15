import React, { useEffect, useRef, useState } from "react";
import fetchGeminiData from "../fetchGeminiData.js";

const Chatbox = () => {
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [fault, setFault] = useState(false);
  const [response, setResponse] = useState("");
  const [allTimeData, setAllTimeData] = useState([]);
  const bottomRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim()) return;

    setLoader(true);
    setResponse("");
    setFault(false);

    try {
      const Geminidata = await fetchGeminiData(`${query}`);
      setResponse(Geminidata);
      setAllTimeData((prev) => [
        ...prev,
        { userText: query, GeminiResponse: Geminidata },
      ]);
    } catch (error) {
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
        {loader && <span className="text-center">Loading...</span>}
        {fault && <span className="text-red-500 text-center">Something went wrong.</span>}

        {allTimeData.map((data, index) => (
          <div key = {index} className="space-y-2">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs break-words">
                {data.userText}
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-xl max-w-xs break-words">
                {data.GeminiResponse}
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
