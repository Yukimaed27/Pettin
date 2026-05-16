import { useState } from "react";
import Card from "../components/Card";
import SwipeCard from "../components/SwipeCard";

function Explore() {

  const [mode, setMode] = useState("gallery"); 
  const [index, setIndex] = useState(0);

  const pets = [
    {
      name: "Luna",
      age: "2 years",
      distance: "2.4 mi",
      match: "98% Match",
      description:
        "Luna is a sweet soul looking for an active family. She loves long walks and chasing butterflies.",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
    },
    {
      name: "Max",
      age: "3 years",
      distance: "1.1 mi",
      match: "95% Match",
      description:
        "Max is energetic and playful. He enjoys running in parks and playing fetch all day.",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
    },
    {
      name: "Bella",
      age: "1 year",
      distance: "3.8 mi",
      match: "97% Match",
      description:
        "Bella is calm, affectionate and loves cuddles on the sofa.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
    }
  ];

  const handleSwipe = (action, pet) => {
    console.log(action, pet.name);
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#faf7fb] flex flex-col items-center py-10 gap-8">


      <h1 className="text-3xl font-bold text-gray-800">
        Explore Pets
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => setMode("gallery")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            mode === "gallery"
              ? "bg-purple-600 text-white"
              : "bg-white shadow text-gray-700"
          }`}
        >
          Galería
        </button>

        <button
          onClick={() => setMode("swipe")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            mode === "swipe"
              ? "bg-purple-600 text-white"
              : "bg-white shadow text-gray-700"
          }`}
        >
          Swipe
        </button>
      </div>


      {mode === "gallery" && (
        <div className="flex flex-wrap justify-center gap-8">
          {pets.map((pet, i) => (
            <Card key={i} pet={pet} />
          ))}
        </div>
      )}

      {mode === "swipe" && (
        <div className="relative w-[420px] h-[600px]">
          {pets.slice(index, index + 1).map((pet, i) => (
            <SwipeCard key={i} pet={pet} onSwipe={handleSwipe} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Explore;