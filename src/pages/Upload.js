import React, { Component } from "react";



class Upload extends Component {

  state = { url:"", title:"", desc:"", bpm:"", genre:"", countryOfOrigin:"", language:"", insturmentsIncl:"", releaseYear:"", mood:"", budget:"", recordingEnviroment:"", user:""}

  handleFormSubmit = event => {
    event.preventDefault();
    // const { url, title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment, user  } = this.state;

    // this.props.upload(url, title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment, user);
  };

  handleChange = event => {
    const {name, value } = event.target;
    this.setState({[name]: value});
  };

    render() {
      const { title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment} = this.state;
        return (
          <div>
            <h1>Upload Track</h1>

            <form onSubmit={this.handleFormSubmit}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
              />

              <br />

              <label>Description</label>
              <input
                type="text"
                name="desc"
                value={desc}
                onChange={this.handleChange}
              />

              <br />

              <label>BPM</label>
              <input
                type="text"
                name="bpm"
                value={bpm}
                onChange={this.handleChange}
              />

              <br />

              <label>Genre</label>
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={this.handleChange}
              />

              <br />

              <label>Country of Origin</label>
              <input
                type="text"
                name="countryOfOrigin"
                value={countryOfOrigin}
                onChange={this.handleChange}
              />

              <br />

              <label>Language</label>
              <input
                type="text"
                name="language"
                value={language}
                onChange={this.handleChange}
              />

              <br />

              <label>instrumentsIncl</label>
              <input
                type="text"
                name="insturmentsIncl"
                value={insturmentsIncl}
                onChange={this.handleChange}
              />

              <br />

              <label>Release Year</label>
              <input
                type="text"
                name="releaseYear"
                value={releaseYear}
                onChange={this.handleChange}
              />

              <br />

              <label>Mood</label>
              <input
                type="text"
                name="mood "
                value={mood}
                onChange={this.handleChange}
              />

              <br />

              <label>Budget</label>
              <input
                type="text"
                name="budget"
                value={budget}
                onChange={this.handleChange}
              />

              <br />

              <label>Recording Enviroment</label>
              <input
                type="text"
                name="recordingEnviroment"
                value={recordingEnviroment}
                onChange={this.handleChange}
              />

              <br />
              
              <input type="submit" value="Upload" />
            </form>
          </div>
        );
    }
}

export default Upload;