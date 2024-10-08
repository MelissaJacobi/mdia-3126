"use client";
import { useState } from "react";

export default function Page() {
  const DATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const DisplayImage = () => {
    if (data) {
      return (
        <div className="border-4 border-black p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">{data.title}</h2>
          <img
            src={data.url}
            alt={data.title}
            width="600"
            height="400"
            className="mb-4"
          />
          <p>{data.explanation}</p>
        </div>
      );
    } else {
      return (
        <div className="border-4 border-black p-4 mb-4">
          No picture available yet.
        </div>
      );
    }
  };

  return (
    <div className="p-4 bg-blue-300">
      <header className="border-4 border-black p-4 mb-4">
        <h1>Welcome to NASA's Picture of the Day</h1>
        <button
          className="border-neutral-200 bg-black px-6 text-white"
          onClick={fetchData}
        >
          Fetch Picture!
        </button>
      </header>
      <DisplayImage />
    </div>
  );
}
