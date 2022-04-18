import React from "react";
import { Spinner } from "react-bootstrap";

const Spineer = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        left: "47%",
        top: "10%",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Spinner variant="warning" animation="border" />
    </div>
  );
};

export default Spineer;
