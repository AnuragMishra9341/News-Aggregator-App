import { useEffect, useState, useRef, useContext } from 'react';
import getData from "../fetchData.js";
import { NewsContext } from '../context/NewsContext.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeNewsCards = () => {
  const { text } = useContext(NewsContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const previousTextRef = useRef('');

  useEffect(() => {
    if (previousTextRef.current === text) {
      console.log("same text has been re-rendered",text);
      return;
    }

    previousTextRef.current = text;
    setCurrentPage(1);

    const fetchNews = async () => {
      setLoading(true);
      const newsData = await getData(text);
      setData(newsData);
      setLoading(false);
    };

    fetchNews();
  }, [text]);

  const paginateArticles = () => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return data?.articles?.slice(startIndex, endIndex) || [];
  };

  const totalPages = Math.ceil((data?.articles?.length || 0) / articlesPerPage);

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-center py-4 text-3xl font-extrabold text-indigo-600 dark:text-yellow-400 drop-shadow">
        🔥 News Feed for <span className="underline decoration-pink-500">{text}</span>
      </h1>

      {loading ? (
        <p className="text-center text-lg font-medium text-gray-600 dark:text-gray-300">Loading...</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {paginateArticles().map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  rotateY: 8,
                  rotateX: 8,
                  scale: 1.06,
                  transition: { type: 'spring', stiffness: 180, damping: 14 }
                }}
                className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-blue-500/30 hover:shadow-indigo-400 rounded-xl overflow-hidden w-[90%] sm:w-[260px] md:w-[300px] transform transition-transform duration-300"
              >
                <Link to="/details" state={{ article }}>
                  <img
                    src={article.image}
                    alt="news"
                    className="w-full h-[200px] object-cover"
                  />
                </Link>
                <div className="p-4">
                  <p className="text-sm text-center text-gray-800 dark:text-gray-200 break-words line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold rounded-lg disabled:opacity-50 transition duration-300 hover:brightness-110"
            >
              ⬅️ Previous
            </button>

            <span className="font-medium text-lg text-indigo-800 dark:text-yellow-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-semibold rounded-lg disabled:opacity-50 transition duration-300 hover:brightness-110"
            >
              Next ➡️
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeNewsCards;
