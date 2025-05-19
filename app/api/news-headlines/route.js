import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_874340a6310513e6a5e3e279867c0ebea9a04&category=politics&country=us",
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
      throw new Error("Failed to fetch news from NewsData.io");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
