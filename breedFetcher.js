const request = require("request");
const breed = process.argv.splice(2)[0];

const getBreedDetails = (breed , errorHandler) => {
  const endPoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(endPoint, (err, res, body) => {
    if (err) return errorHandler(err,breed);

    const data = JSON.parse(body);

    if (data.length === 0) return errorHandler(err, breed);

    const description = data[0].description;
    console.log(description);
  });
};

getBreedDetails(breed , (err,breed)=> {
  const output = err ? `Error details: ${err}` : `Sorry, we could not find information for the breed ${breed}.`;
  console.log(output);
});