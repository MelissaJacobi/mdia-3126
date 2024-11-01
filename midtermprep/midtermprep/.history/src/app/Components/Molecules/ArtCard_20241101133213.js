"use client";
import React from "react";
import styles from "./ArtCard.module.css"

export default function ArtCard({ artwork }) {
  return (
    <article className={styles.article}>
      <img className={styles.img} src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
      <h3 className={styles.title}>{artwork.title}</h3>
      <p className={styles.title}>Artist: {artwork.artist_display}</p>
    </article>
  );
}
