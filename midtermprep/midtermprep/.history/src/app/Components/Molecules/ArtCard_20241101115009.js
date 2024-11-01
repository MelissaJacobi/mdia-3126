"use client";
import React from "react";
import styles from "./Home.module.css";

export default function ArtCard({ artwork }) {
  return (
    <article className={styles.artCard}>
      <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist_display}</p>
    </article>
  );
}
