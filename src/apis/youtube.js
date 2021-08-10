import axios from "axios";

const KEY = "AIzaSyDKphFUSRV0yi_7ngs0rKmA005HQ44KTW4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
