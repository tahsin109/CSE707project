const API_KEY = "f3b4bfa31c1d418cb4863890dcc5eba4";
const BASE_URL = "https://newsapi.org/v2";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country") || "us";

    const response = await fetch(
      `${BASE_URL}/top-headlines?country=${country}&category=business&apiKey=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600, // Revalidate every hour
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
