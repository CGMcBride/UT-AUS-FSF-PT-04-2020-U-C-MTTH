const axios = require("axios");

async function getMovie(movie) {
  try {
    // const movie = "batman";

    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    );

    return data.Title;
  } catch (err) {
    // console.log(err);
    return err;
  }
}

getMovie("Batman");
module.exports = { getMovie };
