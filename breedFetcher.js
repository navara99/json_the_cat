const request = require("request");


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

module.exports = fetchBreedDescription;