const request = require("request");
const breed = process.argv.splice(2)[0];

const getBreedDetails = (breed) => {
  const endPoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(endPoint, (err, res, body) => {
    if (err) return console.log("Error details: ", err);

    const data = JSON.parse(body);

    if (data.length === 0) return console.log(`Sorry, we could not find information for the breed ${breed}.`);

    const description = data[0].description;
    console.log(description);
  });
};

getBreedDetails(breed)