const breed = process.argv.splice(2)[0];
const fetchBreedDescription = require("./breedFetcher");

fetchBreedDescription(breed, (err, description) => {
  const output = err ? err : description;
  console.log(output);
});