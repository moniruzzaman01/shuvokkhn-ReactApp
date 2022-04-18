import React from "react";

const Blogs = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
      }}
      className="container my-5 d-flex align-items-center"
    >
      <div>
        <h4>Difference between authentication and authorization.</h4>
        <p>
          Authentication means to confirm one's identity but other hand
          authorization means to get access in a restricted system. simply we
          can say, authorization gives you some special activity access and
          authentication veifies who you are.
        </p>
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
        <h4>
          What other services does firebase provide other than authentication?
        </h4>
        <p>
          Firebase has various services like:
          <ol>
            <li>Firebase analytic</li>
            <li>Firebase real-time database</li>
            <li>Firebase cloud messaging</li>
            <li>Firebase test labs</li>
            <li>Firebase app indexing</li>
            <li>Firebase dynamic links etc.</li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
