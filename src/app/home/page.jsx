"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  const categories = [
    { name: "Singers", image: "/images/singer.jpg" },
    { name: "Dancers", image: "/images/dancer.jpg" },
    { name: "DJs", image: "/images/dj.jpg" },
    { name: "Speakers", image: "/images/speaker.jpg" },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} image={cat.image} />
        ))}
      </section>
    </div>
  );
}