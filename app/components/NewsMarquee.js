"use client";

export default function NewsMarquee({ articles }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-600 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-800 to-transparent z-10"></div>
      <marquee
        className="animate-marquee whitespace-nowrap text-lg font-medium"
        behavior="scroll"
        scrollamount="5"
      >
        {articles.map((article, index) => (
          <span key={index} className="inline-block mx-6">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-200 flex items-center"
            >
              <span className="text-yellow-300 mr-2">•</span>
              {article.title}
            </a>
          </span>
        ))}
      </marquee>
    </div>
  );
}
