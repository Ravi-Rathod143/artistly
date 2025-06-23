import { useFilter } from "@/context/FilterContext";
export default function FilterBlock() {
  const { filters, updateFilter } = useFilter();

  return (
    <div className="flex flex-wrap gap-4">
      <select
        className="border p-2 rounded"
        value={filters.category}
        onChange={(e) => updateFilter("category", e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Singers">Singers</option>
        <option value="Dancers">Dancers</option>
        <option value="DJs">DJs</option>
        <option value="Speakers">Speakers</option>
      </select>
      <input
        type="text"
        placeholder="Location"
        className="border p-2 rounded"
        value={filters.location}
        onChange={(e) => updateFilter("location", e.target.value)}
      />
    </div>
  );
}
