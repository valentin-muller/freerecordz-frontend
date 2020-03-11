import React from 'react';
// import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dysfmyeoa/image/upload/v1583826498/freerecordz2/saxophone-918904_1920_ylcg59.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>What is Freerecordz?</h3>
            <p>
              Freecords is an innovative music label with the goal of helping
              new and emerging artists not signed by major record labels reach
              success through a streaming app specifically dedicated to
              discovering music.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dysfmyeoa/image/upload/v1583826498/freerecordz2/piano-4841121_1920_wggtrb.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Why Freerecordz?</h3>
            <p>
              Search filters enable users to discover the undiscovered music
              based purely on the criteria they select
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dysfmyeoa/image/upload/v1583826498/freerecordz2/guitar-1836655_1920_qigxeb.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>How to?</h3>
            <p>
              Find the right track, react out, sign the contract, done, so
              simple!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;