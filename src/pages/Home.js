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
            src="https://res.cloudinary.com/dysfmyeoa/image/upload/v1583826498/freerecordz2/piano-4841121_1920_wggtrb.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>What is Freerecordz?</h3>
            <p>Find and license brand new amateur tracks with a few clicks!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dysfmyeoa/image/upload/v1583826498/freerecordz2/saxophone-918904_1920_ylcg59.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Why Freerecordz?</h3>
            <p>Strictly new and amateur Artists</p>
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
              Find the right track, react out, sign the contract, done, so simple!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;