import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&language=en&category=business`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch business news from NewsData.io");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching business news:", error);
    return NextResponse.json(
      { error: "Failed to fetch business news" },
      { status: 500 }
    );
  }
}
