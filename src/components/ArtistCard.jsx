export default function ArtistCard({ artist }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full aspect-[4/3] object-cover mb-2 rounded"
      />
      <h3 className="text-xl font-bold">{artist.name}</h3>
      <p className="text-sm text-gray-600">
        {artist.category} | {artist.location}
      </p>
      <p className="text-sm text-purple-600 font-semibold">₹{artist.price}</p>
      <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">
        Ask for Quote
      </button>
    </div>
  );
}
