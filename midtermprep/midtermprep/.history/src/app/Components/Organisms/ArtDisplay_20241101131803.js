"use client";
import React from "react";
import Loading from "../Atoms/Loading";
import ArtCard from "../Molecules/ArtCard";
import styles from "./ArtDisplay.module.css"

export default function ArtDisplay({ loading, artData }) {
  if (loading) return <Loading />;

  if (artData && artData.length > 0) {
    return (
      <section className={styles.article}>
        {artData.map((artwork, i) => (
          <ArtCard key={i} artwork={artwork} />
        ))}
      </section>
    );
  }

  return <div>Empty, no data fetched!</div>;
}
