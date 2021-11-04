const request = require("request");
const breed = process.argv.splice(2)[0];

const fetchBreedDescription = (breed, cb) => {
  const endPoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(endPoint, (err, res, body) => {
    if (err) return cb(err, null);

    const data = JSON.parse(body)[0];
    if (!data) return cb(`Sorry, ${breed} was not found.`, null);

    const description = data.description;
    return cb(null, description);
  });
};

fetchBreedDescription(breed, (err, description) => {
  const output = err ? err : description;
  console.log(output);
});

module.exports = fetchBreedDescription;