"use client";
import { useEffect, useState, Suspense, lazy } from "react";
import Header from "@/components/Header";
import ArtistCard from "@/components/ArtistCard";
import data from "@/data/artists.json";
import { useFilter } from "@/context/FilterContext";

const FilterBlock = lazy(() => import("@/components/FilterBlock"));

export default function ArtistListing() {
  const [artists, setArtists] = useState([]);
  const { filters } = useFilter();

  useEffect(() => {
    setArtists(data);
  }, []);
// this is 1st method
//   const filtered = artists.filter((a) => {
//     const matchCategory = filters.category ? a.category === filters.category : true;
//     const matchLocation = filters.location ? a.location === filters.location : true;
//     return matchCategory && matchLocation;
//   });
// this is second method when we write word by bord and ther is no case sensituvty
const filtered = artists.filter((a) => {
    const matchCategory = filters.category
      ? a.category.toLowerCase() === filters.category.toLowerCase()
      : true;

    const matchLocation = filters.location
      ? a.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    return matchCategory && matchLocation;
  });

  return (
    <div>
      <Header />
      <div className="p-4">
        <Suspense fallback={<p>Loading filters...</p>}>
          <FilterBlock />
        </Suspense>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {filtered.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}