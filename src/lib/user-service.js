import axios from "axios";

class User {
  constructor() {
    this.user = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  listAll({ title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment }) {
    return this.user
      .post("/", { title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }


  findById({ title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment }) {
    return this.user
      .post("/:id", { title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }


  delete() {
    // return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  
  upload({ title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment }) {
    return this.user
      .post("/upload", { title, desc, bpm, genre, countryOfOrigin, language, insturmentsIncl, releaseYear, mood, budget, recordingEnviroment })
      // .then(({ data }) => data);
      .then((response) => response.data);
  }


}

const userService = new User(); // DO I NEED THIS?????
// `authService` is the object with the above axios request methods

export default userService;
