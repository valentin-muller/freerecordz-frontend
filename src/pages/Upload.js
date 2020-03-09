import React, { Component } from "react";
import trackService from "../lib/track-service";


class Upload extends Component {

  state = { url:"", title:"", desc:"", bpm:"", genre:"", countryOfOrigin:"", language:"", insturmentsIncl:"", releaseYear:"", mood:"", budget:"", recordingEnviroment:"", user:""}

  handleFormSubmit = event => {
    event.preventDefault();
    const { url, title, desc, bpm, countryOfOrigin, language, releaseYear, budget, recordingEnviroment, genre, instrumentsIncl, mood  } = this.state;
    console.log('url :', url);
    trackService.upload(url, title, desc, bpm, countryOfOrigin, language, releaseYear, budget, recordingEnviroment, genre, instrumentsIncl, mood);
  };

  handleChange = event => {
    const {name, value } = event.target;
    this.setState({[name]: value});
  };



  fileOnchange = event => {    
    const file = event.target.files[0];
    console.log('file :', file);
    const uploadData = new FormData();
    uploadData.append('url', file)
    console.log('uploadData :', uploadData);
  //  this.setState({ url: uploadData });
    trackService.getUrl(uploadData)
      .then((videoUrl) => console.log(videoUrl)
      )
  }





    render() {
      const { title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment} = this.state;

        return (
          <div>
            <h1>Upload Track</h1>

            <form
              onSubmit={this.handleFormSubmit}
              encType="multipart/form-data"
            >
              <label>File</label>
              <input type="file" name="url" onChange={this.fileOnchange} />

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
                name="mood"
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