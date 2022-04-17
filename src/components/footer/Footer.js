import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "20vh",
        color: "#fff",
      }}
      className="bg-dark mt-5"
    >
      <div>
        <p>colyright@{year}</p>
      </div>
      <div>
        <p>Contact Me:</p>
        <small>123/32 Rush Road, Hungary.</small>
        <br />
        <small>Mobile: 2345633243</small>
      </div>
    </div>
  );
};

export default Footer;
