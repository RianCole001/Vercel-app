// src/components/Preloader.js
import React from "react";
import { Spinner } from "react-bootstrap";

export default function Preloader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark text-light"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
      }}
    >
      <div className="text-center">
        <Spinner animation="border" variant="warning" style={{ width: "4rem", height: "4rem" }} />
        <p className="mt-3 fs-5 fw-semibold">Loading BlackBear Projects...</p>
      </div>
    </div>
  );
}
