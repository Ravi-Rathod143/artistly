export default function CategoryCard({ name, image }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
    </div>
  );
}