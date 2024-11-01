"use client";
import React from "react";
import Button from "../atoms/Button";

export default function Header({ loading, onFetchData }) {
  return (
    <header>
      Welcome to my midterm prep!
      <br />
      <Button onClick={onFetchData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Art Data!"}
      </Button>
    </header>
  );
}
