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
        <h1>Explore the newest uploads here!</h1>
        <br />
        {this.state.allTracks.length
          ? this.state.allTracks.map(track => (
              <>
                <h1>{track.title}</h1>
                <Link to={`/user/${track.user._id}`}>
                  {" "}
                  <p>
                   {track.user.firstName} {track.user.lastName} {" "}
                  </p>
                  {" "}
                </Link>
                <audio controls="contorls" src={track.url}>
                  Play
                </audio>
                <p>{track.desc}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

              </>
            ))
          : null}
      </div>
    );
  }
}

export default Feed;


                // <div className="newsfeed_articlecontainer__article" id="first">
                //   <div className="article_published">
                //     <p>Published in</p>
                //     <a href="#">Sideblog</a>
                //   </div>

                //   <div className="article_title">
                //     <h1>{track.title}</h1>
                //   </div>

                //   <div id="player">
                //     <AudioPlayer
                //       src={track.url}
                //       onPlay={e => console.log("onPlay")}
                //       // other props here
                //     />
                //   </div>

                //   <div className="article_content">
                //     <p>{track.desc}</p>
                //   </div>

                //   <div className="article_profile">
                //     <Link to={`/user/${track.user._id}`}>
                //       <p>
                //         {track.user.firstName} {track.user.lastName}{" "}
                //       </p>
                //     </Link>
                //     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/profile_icon.png" />
                //     <br />
                //     <p>3hrs ago</p>
                //   </div>
                // </div>;




