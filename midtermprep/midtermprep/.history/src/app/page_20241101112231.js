"use client" // Don't forget this!
import { useState } from "react";

// Midterm TODO
// - add button
// - fetch data
// - function to add data to state
// - responsive
// - Display the data
// - function to clear data
// - components for empty state
// - component for data state
// - error handling if the data doesn't come back (keener marks STRETCH GOALS)

// Everything is built right in this page but it's up to you on the midterm to organize it all with atomic design

export default function Home() {

  const [artData, setArtData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchArtData() {
    setLoading(true);
    const response = await fetch("https://api.artic.edu/api/v1/artworks?limit=3&fields=id,title,artist_display,image_id");
    const data = await response.json();
    
    setArtData(data.data); // assuming data.data is an array of artworks
    setLoading(false); 
  }

  const DisplayArtData = () => {
    if (loading) return <div>Loading!</div>;

    if (artData) {
      const artDataFormatted = artData.map((artwork, i) => (
        <article key={i}>
          <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <p>Artist: {artwork.artist_display}</p>
        </article>
      ));

      return <section>{artDataFormatted}</section>;
    }

    return <div>Empty, no data fetched!</div>;
  };

  const Header = () => {
    return (
      <header>
        Welcome to my midterm prep!
        <br />
        <button
          className="border-white border-solid border-2 p-2 m-2"
          disabled={loading}
          onClick={fetchArtData}
        >
          {loading ? 'Fetching...' : "Fetch Art Data!"}
        </button>
      </header>
    );
  };

  return (
    <div className="m-8">
      <Header />
      <DisplayArtData />
    </div>
  );
}
