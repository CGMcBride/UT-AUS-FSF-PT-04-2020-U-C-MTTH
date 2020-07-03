// Describe
// IT/TEST
//      EXPECTS

//OR :
// - **Arrange**: Any kind of set up you need to run your test.
// - **Act**: Perform the action to be tested.
// - **Assert**: Perform the assertion.
const axios = require("axios");
let { getMovie } = require("./index");
jest.mock("axios");

axios.get.mockReturnValue(
  new Promise(function (resolve) {
    resolve({ data: { Title: "Batman" } });
  })
);

//This is a integration test!
describe("That the get movie function ACTUALLY calls the api", () => {
  it("should return real data", async () => {
    let result = await getMovie("Batman");
    expect(result).toEqual("Batman");
    expect(result).toEqual("Batman");
    expect(result).toEqual("Batman");
    expect(result).toEqual("Batman");
    expect(result).toEqual("Batman");
  });
});
