"use client";

import { useEffect, useState } from "react";
import { getHeadlineNews, formatHeadlineArticle } from "../services/newsApi";
import NewsMarquee from "./NewsMarquee";

export default function HeadlineNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const data = await getHeadlineNews();
        setNews(data.results.map(formatHeadlineArticle));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading news: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Headline News</h2>
      <NewsMarquee articles={news} />
    </div>
  );
}
