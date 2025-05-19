const API_TOKEN = "InGD8Mbmc3klZJSCx8cq3kE4Nzmps73Sb5yqHufX";
const BASE_URL = "https://api.thenewsapi.com/v1";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country") || "us";

    const response = await fetch(
      `${BASE_URL}/news/headlines?locale=${country}&language=en&api_token=${API_TOKEN}`,
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
