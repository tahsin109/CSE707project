/**
 * Fetches top business headlines from NewsAPI.org
 * @param {string} country - The country code to fetch news for (default: 'us')
 * @returns {Promise<Object>} The news data
 */
export async function getTopBusinessHeadlines(country = "us") {
  try {
    const response = await fetch(`/api/news?country=${country}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

/**
 * Fetches headline news from NewsData.io
 * @param {string} country - The country code to fetch news for (default: 'us')
 * @returns {Promise<Object>} The news data
 */
export async function getHeadlineNews(country = "us") {
  try {
    const response = await fetch(`/api/news-headlines?country=${country}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching headline news:", error);
    throw error;
  }
}

/**
 * Formats the article data for display
 * @param {Object} article - The article data from the API
 * @returns {Object} Formatted article data
 */
export function formatArticle(article) {
  return {
    title: article.title,
    description: article.description,
    url: article.url,
    imageUrl: article.urlToImage,
    source: article.source.name,
    publishedAt: new Date(article.publishedAt).toLocaleDateString(),
    author: article.author || "Unknown",
  };
}

/**
 * Formats the headline news article data for display
 * @param {Object} article - The article data from NewsData.io
 * @returns {Object} Formatted article data
 */
export function formatHeadlineArticle(article) {
  return {
    title: article.title,
    description: article.description,
    url: article.link,
    imageUrl: article.image_url,
    source: article.source_name,
    publishedAt: new Date(article.pubDate).toLocaleDateString(),
    author: article.creator ? article.creator[0] : "Unknown",
  };
}
