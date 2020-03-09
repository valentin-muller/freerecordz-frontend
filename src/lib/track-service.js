import axios from "axios";

class Track {
  constructor() {
    this.track = axios.create({
      baseURL: "http://localhost:5000/track",
      withCredentials: true
    });
  }

  listAll() {
    return this.track
      .get("/")
      .then(({ data }) => data)
      .catch((err) => console.log(err))
  }

//   findById({ title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment }) {
//     return this.track
//       .post("/:id", { title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment })
//       .then(({ data }) => data);
//     // .then((response) => response.data);
//   }


//   delete() {
//     // return this.auth.post("/auth/logout", {}).then(({ data }) => data);
//     // return this.auth.post("/auth/logout", {}).then((response) => response.data);
//   }


  upload( url, title, desc, bpm, countryOfOrigin, language, releaseYear, budget, recordingEnviroment, genre, instrumentsIncl, mood ) {
    return this.track
      .post("/upload", { url, title, desc, bpm, countryOfOrigin, language, releaseYear, budget, recordingEnviroment, genre, instrumentsIncl, mood })
      .then(({ data }) => {
          console.log('data :', data)
          return data
      });
}
  getUrl( file ) {
    return this.track
      .post("/upload/url", file )
      .then(({ data }) => {
          console.log('data :', data)
          return data
      });
}


}

const trackService = new Track(); 
// `trackService` is the object with the above axios request methods

export default trackService;
