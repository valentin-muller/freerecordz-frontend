import React, { Component, useReducer } from "react";
import { render } from "@testing-library/react";
// import { Link } from "react-router-dom";
import trackService from "../lib/track-service";


class Feed extends Component {
  state = {
    allTracks: []
  }
 
  componentDidMount() {

   trackService.listAll().then(allData => {
    this.setState({allTracks: allData}); 
   })
 }
 render() {
   console.log('this.state.allTracks :', this.state.allTracks);
  //  const { title, desc, bpm, countryOfOrigin, language, releaseYear, budget, recordingEnviroment, genre, instrumentsIncl, mood } = this.state.allTracks;
  return (
    <div>
      <h1>This is a PrivateRoute Page for the Feed</h1>
      <h2>This will be the newsfeed</h2>
      <br />
      {this.state.allTracks.map(track => (
        <h1>
        {track.title}
        <h3>
          by {track.user}
        </h3>
        <br />
          <audio controls>
            <source src={track.url} />
          </audio>
        </h1>
      ))}
    </div>
  );
 
  }
}

export default Feed;  // Here this will be wrapped to its front-end service
