"use client";
import React from "react";

export default function Button({ onClick, disabled, children }) {
  return (
    <button
      className="border-white border-solid border-2 p-2 m-2"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
