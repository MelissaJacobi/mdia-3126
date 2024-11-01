"use client";
import React from "react";
import styles from "./ArtCard.module.css"

export default function ArtCard({ artwork }) {
  return (
    <article>
      <img className={styles.img} src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist_display}</p>
    </article>
  );
}