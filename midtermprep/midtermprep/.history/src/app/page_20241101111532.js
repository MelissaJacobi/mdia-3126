import { useState } from 'react';

// Define the Met Museum API URL (we'll use the 'public domain' endpoint)
const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
const FALLBACK_IMAGE = 'https://via.placeholder.com/300x400?text=Image+Not+Available'; // Fallback image URL

function ArtDisplay() {
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status

  // Function to fetch data from the Met API
  const fetchArtData = async () => {
    setLoading(true); // Set loading to true when fetch starts
    setError(null); // Reset any previous error
    setArtwork(null); // Clear previous artwork display

    try {
      // Fetch a list of object IDs for public domain artworks
      const response = await fetch(`${API_URL}?q=paintings`);
      const data = await response.json();

      if (data.objectIDs && data.objectIDs.length > 0) {
        // Fetch details for a specific object using one of the returned IDs
        const artResponse = await fetch(`${API_URL}/${data.objectIDs[0]}`);
        const artData = await artResponse.json();

        setArtwork(artData); // Save the artwork details to state
      } else {
        throw new Error('No artwork found');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Set loading to false once fetch completes
    }
  };

  return (
    <div>
      <h1>The Met Museum Artwork Display</h1>

      {/* Button to fetch new artwork */}
      <button onClick={fetchArtData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch New Artwork'}
      </button>

      {/* Display error message if there's an error */}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {/* Display artwork details when available */}
      {artwork && !loading && (
        <div>
          <h2>{artwork.title}</h2>
          <p><strong>Artist:</strong> {artwork.artistDisplayName || 'Unknown'}</p>
          <p><strong>Date:</strong> {artwork.objectDate || 'Unknown'}</p>
          <img
            src={artwork.primaryImageSmall || FALLBACK_IMAGE} // Use fallback if image URL is empty
            alt={artwork.title}
            onError={(e) => e.target.src = FALLBACK_IMAGE} // Set fallback on error
            style={{ width: '300px', height: 'auto' }}
          />
          <p><strong>Medium:</strong> {artwork.medium}</p>
          <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
        </div>
      )}

      {/* Display a loading message when loading is true */}
      {loading && <p>Loading artwork...</p>}
    </div>
  );
}

export default ArtDisplay;
