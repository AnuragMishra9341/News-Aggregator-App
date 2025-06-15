import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import fetchGeminiData from '../fetchGeminiData.js';

const AiSummarizer = () => {
  const location = useLocation();
  const article = location.state?.article;
  const description = article?.description;
  const navigate = useNavigate();
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetchGeminiData(
          `Summarize the following news content into exactly 10 crisp and informative bullet points. Each bullet point should:
- Start from a new line with a "•" symbol.
- Be concise, relevant, and fact-based.
- Include line spacing between bullet points for better readability.
- Focus only on the key highlights or takeaways.
- Avoid any extra introduction or conclusion text.

News Content:
${description}`
        );
        setSummary(response);
      } catch (err) {
        setError('Failed to summarize the article.');
      } finally {
        setLoading(false);
      }
    };

    if (description) {
      fetchSummary();
    }
  }, [description]);

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto">
      {loading ? (
        <p className="text-gray-600 dark:text-gray-300 text-center animate-pulse text-lg sm:text-xl">
          Summarizing article...
        </p>
      ) : error ? (
        <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-transparent dark:border-gray-700"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            🧠 AI-Powered Summary
          </h2>

          <ul className="list-disc pl-6 sm:pl-8 text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
            {summary
              .split('\n')
              .filter(line => line.trim() !== '')
              .map((point, index) => (
                <li key={index} className="transition-all duration-200 hover:scale-[1.02]">
                  {point.replace(/^•\s*/, '')}
                </li>
              ))}
          </ul>

        </motion.div>
      )}
      <button onClick={()=>navigate(-1)} className='relative group px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mt-3'>Go Back</button>
    </div>
  );
};

export default AiSummarizer;
