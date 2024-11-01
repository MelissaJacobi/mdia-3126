"use client";
import React from "react";
import Loading from "../atoms/Loading";
import ArtCard from "../molecules/ArtCard";
import styles from "./Home.module.css";

export default function ArtDisplay({ loading, artData }) {
  if (loading) return <Loading />;

  if (artData && artData.length > 0) {
    return (
      <section className={styles.artDisplay}>
        {artData.map((artwork, i) => (
          <ArtCard key={i} artwork={artwork} />
        ))}
      </section>
    );
  }

  return <div>Empty, no data fetched!</div>;
}
