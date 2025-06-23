export default function Hero() {
  return (
    <section className="text-center py-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Artistly</h1>
      <p className="text-lg mb-6">Discover & book top performing artists</p>
      <a href="/artists" className="bg-white text-purple-600 px-6 py-2 rounded font-semibold">
        Explore Artists
      </a>
    </section>
  );
}