const axios = require("axios");
const MovieSearch = require("../movieSearch");

jest.mock("axios");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      axios.get.mockReturnValue(
        new Promise(function (resolve) {
<<<<<<< HEAD
          resolve({ data: { yearRelease: "2003" } });
        })
      );

      expect(movie.search(name)).resolves.toEqual({ data: { yearReleased: "2003" } });
=======
          resolve({ data: { yearReleased: "2003" } });
        })
      );

      expect(movie.search(name)).resolves.toEqual({
        data: { yearReleased: "2003" },
      });
>>>>>>> 7fc1acf8cb77c8638fa3bfb257eb78540fbfc74c
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });
});
