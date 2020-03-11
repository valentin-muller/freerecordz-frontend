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
      genre: "Alternative",
      countryOfOrigin: "",
      language: "",
      insturmentsIncl: "Banjo",
      releaseYear: "",
      mood: "Chill",
      budget: "Low",
      recordingEnviroment: "Bedroom studio",
      user: "",
      errorMessage: undefined
    };
    this.fileInput = React.createRef();
  }

  // handleFormSubmit = event => {
  //   console.log('event :', event);
  //   const file = event.target.files[0];
  //   const fd = new FormData();
  //   fd.append("file", file);
  //   trackService
  //     .getUrl(fd)
  //     .then(response => {
  //       this.setState(
  //         { url: response.fileUrl, errorMessage: undefined },
  //         () => {
  //           event.preventDefault();
  //           const {
  //             url,
  //             title,
  //             desc,
  //             bpm,
  //             countryOfOrigin,
  //             language,
  //             releaseYear,
  //             budget,
  //             recordingEnviroment,
  //             genre,
  //             instrumentsIncl,
  //             mood
  //           } = this.state;
  //           console.log(url)
  //           trackService.upload(
  //             url,
  //             title,
  //             desc,
  //             bpm,
  //             countryOfOrigin,
  //             language,
  //             releaseYear,
  //             budget,
  //             recordingEnviroment,
  //             genre,
  //             instrumentsIncl,
  //             mood
  //           );
  //           }
  //       );
  //     })
  //     .catch(err => {
  //       if (err.response.status === 400) {
  //         this.resetFileInput();
  //         this.setState({
  //           url: undefined,
  //           errorMessage: err.response.data.message
  //         });
  //       } else {
  //         this.resetFileInput();
  //         this.setState({
  //           url: undefined,
  //           errorMessage: "Error in uploading the file."
  //         });
  //       }
  //       console.log(err.response);
  //       console.log(err.response.data.message);
  //     });
  // };
  handleFormSubmit = event => {
    console.log("event :", event);
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
    console.log(url);
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
    )
      .then(newTrack => {
        console.log(newTrack);
        
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
  };

  fileOnChange = event => {
    const file = event.target.files[0];
    const fd = new FormData();
    fd.append("file", file);
    trackService
      .getUrl(fd)
      .then(response => {
        this.setState({ url: response.fileUrl, errorMessage: undefined });
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
        <Form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>File</label>
          <input
            type="file"
            name="url"
            onChange={this.fileOnChange}
            ref={ref => (this.fileInput = ref)}
          />
          {this.state.errorMessage ? (
            <Alert variant={"danger"}> {this.state.errorMessage} </Alert>
          ) : null}

          <div>
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
                <option value="Alternative">Alternative</option>
                <option value="Ambient">Ambient</option>
                <option value="Blues">Blues</option>
                <option value="Cinematic">Cinematic</option>
                <option value="Country">Country</option>
                <option value="Electronic">Electronic</option>
                <option value="Folk">Folk</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Indie">Indie</option>
                <option value="Jazz">Jazz</option>
                <option value="Pop">Pop</option>
                <option value="Post Rock">Post Rock</option>
                <option value="R&B">R&B</option>
                <option value="Rock">Rock</option>
                <option value="Singer-Songwriter">Singer-Songwriter</option>
                <option value="Spoken Word">Spoken Word</option>
                <option value="Vintage">Vintage</option>
                <option value="World">World</option>
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
            {/* <Form.Group controlId="formBasicInstrumentsIncl">
              <Form.Label>Instruments Included</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="insturmentsIncl"
                value={insturmentsIncl}
                onChange={this.handleChange}
              >
                <option value="Acoustic Guitar">Acoustic Guitar</option>
                <option value="Ambient Sounds">Ambient Sounds</option>
                <option value="Banjo">Banjo</option>
                <option value="Bass">Bass</option>
                <option value="Bells">Bells</option>
                <option value="Cello">Cello</option>
                <option value="Claps">Claps</option>
                <option value="Clav">Clav</option>
                <option value="Drums">Drums</option>
                <option value="Electric Guitar">Electric Guitar</option>
                <option value="Harmonica">Harmonica</option>
                <option value="Harp">Harp</option>
                <option value="Harpsichord">Harpsichord</option>
                <option value="Horns">Horns</option>
                <option value="Hummig">Hummig</option>
                <option value="Kazoo">Kazoo</option>
                <option value="Mandolin">Mandolin</option>
                <option value="Nature Sounds">Nature Sounds</option>
                <option value="Organ">Organ</option>
                <option value="Precussion">Precussion</option>
                <option value="Piano">Piano</option>
                <option value="Rhodes">Rhodes</option>
                <option value="Saxophone">Saxophone</option>
                <option value="Sound FX">Sound FX</option>
                <option value="Steel Guitar">Steel Guitar</option>
                <option value="Stomps">Stomps</option>
                <option value="String Bass">String Bass</option>
                <option value="Strings">Strings</option>
                <option value="Synth">Synth</option>
                <option value="Turntable">Turntable</option>
                <option value="Ukulele">Ukulele</option>
                <option value="Viola">Viola</option>
                <option value="Violin">Violin</option>
                <option value="Vocals">Vocals</option>
                <option value="Vocoder">Vocoder</option>
                <option value="Whistling">Whistling</option>
                <option value="Woodwinds">Woodwinds</option>
                <option value="Wurlitzer">Wurlitzer</option>
              </Form.Control>
            </Form.Group> */}

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

            {/* <Form.Group controlId="formBasicMood">
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
            </Form.Group> */}

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
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Upload;
