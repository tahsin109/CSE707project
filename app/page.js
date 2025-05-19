import BusinessNews from "./components/BusinessNews";
import HeadlineNews from "./components/HeadlineNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Global News Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay informed with the latest headlines and business news from
            around the world. Real-time updates on politics, business, and
            current events.
          </p>
        </div>
      </div>

      {/* News Sections */}
      <div className="space-y-8">
        <HeadlineNews />
        <BusinessNews />
      </div>
    </main>
  );
}
