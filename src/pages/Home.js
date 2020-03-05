import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Landing page, accessible without login</h1>
      <h2>This will be the newsfeed</h2>
      <>
      <Link to="/private">
        <button className="navbar-button">Profile</button>{" "}
      </Link>
      </>
    </div>
  );
}

export default Home;