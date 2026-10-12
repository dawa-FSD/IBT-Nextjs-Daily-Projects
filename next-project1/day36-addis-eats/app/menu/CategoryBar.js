"use client";

import { useState } from "react";

const categories = ["All", "Ethiopian", "Pizza", "Burgers", "Drinks"];

export default function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`category ${activeCategory === category ? "active" : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
