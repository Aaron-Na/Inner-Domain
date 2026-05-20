export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Inner Domain</h1>
        <p className="text-xl text-gray-400 mb-8">
          Train your body. Master your mind.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200">
          Enter the Domain
        </button>
      </section>
    </main>
  );
}