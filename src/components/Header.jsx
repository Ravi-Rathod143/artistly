export default function Header() {
  return (
    <header className="flex justify-between p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-purple-600">Artistly</h1>
      <nav className="flex gap-4 text-gray-700">
        <a href="/home">Home</a>
        <a href="/artists">Artists</a>
        <a href="/onboard">Onboard</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  );
}