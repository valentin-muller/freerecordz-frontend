import React, { Component, useReducer } from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import trackService from "../lib/track-service";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class Feed extends Component {
  state = {
    allTracks: []
  };

  componentDidMount() {
    trackService.listAll().then(allData => {
      this.setState({ allTracks: allData });
    });
  }
  render() {
    console.log("this.state.allTracks :", this.state.allTracks);
    //  const { title, desc, bpm, countryOfOrigin, language, releaseYear, budget, recordingEnviroment, genre, instrumentsIncl, mood } = this.state.allTracks;
    return (
      <div>
        <h1>This is a PrivateRoute Page for the Feed</h1>
        <h2>This will be the newsfeed</h2>
        <br />
        {this.state.allTracks.length
          ? this.state.allTracks.map(track => (
            
              
              <>
                <div className="newsfeed_articlecontainer__article" id="first">
                  <div className="article_published">
                    <p>Published in</p>
                    <a href="#">Sideblog</a>
                  </div>
                  
                  <div className="article_title">
                    <h1>{track.title}</h1>
                  </div>

                  
                  <div id="player">
                    <AudioPlayer
                      autoPlay
                      src={track.url}
                      onPlay={e => console.log("onPlay")}
                      // other props here
                    />
                  </div>
                  
                  <div className="article_content">
                    <p>{track.desc}</p>
                  </div>
                  
                  <div className="article_profile">
                    <Link to={`/user/${track.user._id}`}>
                      <p>{track.user.firstName} {track.user.lastName} </p>
                    </Link>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/profile_icon.png" />
                    <br />
                    <p>3hrs ago</p>
                  </div>
                </div>
              </>
            ))
          : null}
      </div>
    );
  }
}

export default Feed;

//  <div>
//    <h1>This is a PrivateRoute Page for the Feed</h1>
//    <h2>This will be the newsfeed</h2>
//    <br />
//    {this.state.allTracks.length
//      ? this.state.allTracks.map(track => (
//          <div>
//            <p>{track.title}</p>
//            <audio controls>
//              <source src={track.url} />
//            </audio>
//            <Link to={`/user/${track.user._id}`}>
//              {track.user.firstName}
//            </Link>
//          </div>
//        ))
//      : null}
//  </div>;



                {/* <h2>{track.title}</h2>
                <AudioPlayer
                  autoPlay
                  src={track.url}
                  onPlay={e => console.log("onPlay")}
                  // other props here
                />
                <h3>
                  {" "}
                  Author:
                  <Link to={`/user/${track.user._id}`}>
                    <p> {track.user.firstName}</p>
                  </Link>
                </h3> */}