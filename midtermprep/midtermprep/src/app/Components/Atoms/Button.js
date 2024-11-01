"use client";
import React from "react";
import styles from "./Button.module.css";

export default function Button({ onClick, disabled, children }) {
  return (
    <button
      className={`border-solid border-2 p-2 m-2 rounded-full ${styles.button}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
