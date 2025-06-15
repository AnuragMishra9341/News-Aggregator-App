import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="text-center mt-10 text-lg text-red-500 dark:text-red-400">
        No article data found. <br />
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-5 py-2 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-20 max-w-6xl mx-auto transition duration-500">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-2xl rounded-2xl p-6 md:p-10 animate-fade-in-up border border-transparent hover:border-purple-500 transition duration-300">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-fuchsia-600 via-red-500 to-orange-400 bg-clip-text text-transparent">
          {article.title}
        </h1>

        { (
          <img
            src={article.image}
            alt="News"
            className="w-full max-h-[500px] object-cover rounded-xl shadow-2xl mb-8 hover:rotate-1 transition-transform duration-500"
          />
        )}

        <div className="text-sm sm:text-base mb-6 flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <strong className="text-pink-600 dark:text-pink-400">
              Source:
            </strong>{" "}
            <a
              href={article.source?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
            >
              {article.source?.name || "Unknown"}
            </a>
          </div>
          <div>
            <strong className="text-green-600 dark:text-green-400">
              Author:
            </strong>{" "}
            {article.author || "Not specified"}
          </div>
          <div>
            <strong className="text-purple-600 dark:text-purple-400">
              Published:
            </strong>{" "}
            {new Date(article.publishedAt).toLocaleString()}
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-pink-500 inline-block text-pink-600 dark:text-pink-400">
            Description
          </h2>
          <p className="leading-relaxed tracking-wide text-gray-800 dark:text-gray-200">
            {article.description || "No description provided."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-yellow-500 inline-block text-yellow-600 dark:text-yellow-400">
            Content
          </h2>
          <p className="leading-relaxed tracking-wide text-gray-800 dark:text-gray-300">
            {article.content || "No additional content available."}
          </p>
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-center mt-8">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-indigo-300 transition-transform duration-300"
          >
            Read Full Article
          </a>

          <Link to='/summary' state={location.state}>
            <button className="relative group px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
              <span className="relative z-10 animate-pulse">
                🧠 AI Summarizer
              </span>
            </button>
          </Link>
          <button onClick={()=>navigate(-1)} className='relative group px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>Go Back</button>
        </div>
      </div>
      
    </div>
  );
};

export default Details;
