"use client";
import { useState } from "react";
import Header from "../Molecules/Header";
import ArtDisplay from "../Organisms/ArtDisplay";

export default function Home() {
  const [artData, setArtData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchArtData() {
    setLoading(true);
    const response = await fetch("https://api.artic.edu/api/v1/artworks?limit=6&fields=id,title,artist_display,image_id");
    const data = await response.json();
    
    setArtData(data.data);
    setLoading(false);
  }

  function clearArtData() {
    setArtData(null);
  }

  return (
    <div className="m-8">
      <Header loading={loading} onFetchData={fetchArtData} onClearData={clearArtData} />
      <ArtDisplay loading={loading} artData={artData} />
    </div>
  );
}
