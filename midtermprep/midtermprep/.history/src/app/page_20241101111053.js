import { useEffect, useState } from 'react';

// Define the Met Museum API URL (we'll use the 'public domain' endpoint)
const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

function ArtDisplay() {
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data from the Met API
  useEffect(() => {
    const fetchArtData = async () => {
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
      }
    };

    fetchArtData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>The Met Museum Artwork Display</h1>
      {artwork ? (
        <div>
          <h2>{artwork.title}</h2>
          <p><strong>Artist:</strong> {artwork.artistDisplayName || 'Unknown'}</p>
          <p><strong>Date:</strong> {artwork.objectDate || 'Unknown'}</p>
          <img
            src={artwork.primaryImageSmall}
            alt={artwork.title}
            style={{ width: '300px', height: 'auto' }}
          />
          <p><strong>Medium:</strong> {artwork.medium}</p>
          <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
        </div>
      ) : (
        <p>Loading artwork...</p>
      )}
    </div>
  );
}

export default ArtDisplay;
