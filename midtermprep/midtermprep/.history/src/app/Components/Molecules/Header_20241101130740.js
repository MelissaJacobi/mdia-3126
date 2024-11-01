"use client";
import React from "react";
import Button from "../Atoms/Button";

export default function Header({ loading, onFetchData, onClearData }) {
  return (
    <header>
      Welcome to my midterm prep!
      <br />
      <Button onClick={onFetchData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Art Data!"}
      </Button>
      <Button onClick={onClearData} disabled={!loading && !onFetchData}>
        Clear Art Data
      </Button>
    </header>
  );
}
