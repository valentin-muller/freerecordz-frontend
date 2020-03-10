import React, { Component } from "react";
import trackService from "../lib/track-service";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: undefined,
      file: null,
      title: "",
      desc: "",
      bpm: "",
      genre: "",
      countryOfOrigin: "",
      language: "",
      insturmentsIncl: "",
      releaseYear: "",
      mood: "",
      budget: "",
      recordingEnviroment: "",
      user: "",
      errorMessage: undefined
    };
    this.fileInput = React.createRef();
  }
    
  handleFormSubmit = event => {
    event.preventDefault();
    const {
      url,
      title,
      desc,
      bpm,
      countryOfOrigin,
      language,
      releaseYear,
      budget,
      recordingEnviroment,
      genre,
      instrumentsIncl,
      mood
    } = this.state;
    trackService.upload(
      url,
      title,
      desc,
      bpm,
      countryOfOrigin,
      language,
      releaseYear,
      budget,
      recordingEnviroment,
      genre,
      instrumentsIncl,
      mood
    );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // fileOnchange = event => {
  //   const file = event.target.files[0];
  //   this.setState({ file: file }, () => {
  //     const uploadData = new FormData();
  //     uploadData.append('file', this.state.file);
  //     console.log("uploadData :", uploadData);
  //     //  this.setState({ url: uploadData });
  //     trackService.getUrl(uploadData).then(videoUrl => console.log(videoUrl));
  //   })

  // File input handler //

  resetFileInput = () => {
     this.fileInput.value = null;
  }
  
  
  fileOnChange = event => {
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append("file", file);
    trackService
      .getUrl(fd)
      .then(response => {
        this.setState({ url: response.fileUrl, errorMessage: undefined })
      })
      .catch(err => {
        if (err.response.status === 400) {
          this.resetFileInput();
          this.setState({
            url: undefined,
            errorMessage: err.response.data.message
          });
        } else {
          this.resetFileInput();
          this.setState({
            url: undefined,
            errorMessage: "Error in uploading the file."
          });
        }
        console.log(err.response);
        console.log(err.response.data.message);
      });
  };

  // console.log("file :", file);
  // const uploadData = new FormData();
  // uploadData.append("url", file);
  // console.log("uploadData :", uploadData);
  // //  this.setState({ url: uploadData });
  // trackService.getUrl(uploadData).then(videoUrl => console.log(videoUrl));
  //};

  render() {
    const {
      title,
      desc,
      bpm,
      genre,
      countryOfOrigin,
      language,
      insturmentsIncl,
      releaseYear,
      mood,
      budget,
      recordingEnviroment
    } = this.state;

    return (
      <div>
        <h1>Upload Track</h1>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data" >
          <label>File</label>
          <input type="file" name="url" onChange={this.fileOnChange} ref={ref=> this.fileInput = ref} />
          {this.state.errorMessage 
            ? <Alert  variant={'danger'}> {this.state.errorMessage} </Alert>
            : null
          }

          <div>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group controlId="formBasicFname">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="The description goes here.."
                  rows="3"
                  name="desc"
                  value={desc}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicFname">
                <Form.Label>BPM</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the bpm"
                  name="bpm"
                  value={bpm}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  as="select"
                  name="genre"
                  value={genre}
                  onChange={this.handleChange}
                >
                  <option>Alternative</option>
                  <option>Ambient</option>
                  <option>Blues</option>
                  <option>Cinematic</option>
                  <option>Country</option>
                  <option>Electronic</option>
                  <option>Folk</option>
                  <option>Hip Hop</option>
                  <option>Indie</option>
                  <option>Jazz</option>
                  <option>Pop</option>
                  <option>Post Rock</option>
                  <option>R&B</option>
                  <option>Rock</option>
                  <option>Singer-Songwriter</option>
                  <option>Spoken Word</option>
                  <option>Vintage</option>
                  <option>World</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicCountryOfOrigin">
                <Form.Label>Country of Origin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Which country is the track originated from?"
                  name="countryOfOrigin"
                  value={countryOfOrigin}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="language"
                  name="language"
                  value={language}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicInstrumentsIncl">
                <Form.Label>Instruments Included</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  name="insturmentsIncl"
                  value={insturmentsIncl}
                  onChange={this.handleChange}
                >
                  <option>Acoustic Guitar</option>
                  <option>Ambient Sounds</option>
                  <option>Banjo</option>
                  <option>Bass</option>
                  <option>Bells</option>
                  <option>Cello</option>
                  <option>Claps</option>
                  <option>Clav</option>
                  <option>Drums</option>
                  <option>Electric Guitar</option>
                  <option>Harmonica</option>
                  <option>Harp</option>
                  <option>Harpsichord</option>
                  <option>Horns</option>
                  <option>Hummig</option>
                  <option>Kazoo</option>
                  <option>Mandolin</option>
                  <option>Nature Sounds</option>
                  <option>Organ</option>
                  <option>Precussion</option>
                  <option>Piano</option>
                  <option>Rhodes</option>
                  <option>Saxophone</option>
                  <option>Sound FX</option>
                  <option>Steel Guitar</option>
                  <option>Stomps</option>
                  <option>String Bass</option>
                  <option>Strings</option>
                  <option>Synth</option>
                  <option>Turntable</option>
                  <option>Ukulele</option>
                  <option>Viola</option>
                  <option>Violin</option>
                  <option>Vocals</option>
                  <option>Vocoder</option>
                  <option>Whistling</option>
                  <option>Woodwinds</option>
                  <option>Wurlitzer</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicReleaseYear">
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the release year"
                  name="releaseYear"
                  value={releaseYear}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicMood">
                <Form.Label>Instruments Included</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  name="mood"
                  value={mood}
                  onChange={this.handleChange}
                >
                  <option>Angry</option>
                  <option>Carefree</option>
                  <option>Chill</option>
                  <option>Contemplative</option>
                  <option>Ecstatic</option>
                  <option>Eerie</option>
                  <option>Happy</option>
                  <option>Love</option>
                  <option>Peaceful</option>
                  <option>Sad</option>
                  <option>Serious</option>
                  <option>Somber</option>
                  <option>Tense</option>
                  <option>Uplifting</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicBudget">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  as="select"
                  name="budget"
                  value={budget}
                  onChange={this.handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicRecordingEnviroment">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  as="select"
                  name="recordingEnviroment"
                  value={recordingEnviroment}
                  onChange={this.handleChange}
                >
                  <option>Bedroom studio</option>
                  <option>Home studio</option>
                  <option>Professional studio</option>
                  <option>State of the art studio</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}

export default Upload;
