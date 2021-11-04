const request = require("request");

const endPoint = "https://api.thecatapi.com/v1/breeds/search?q=sib";

request(endPoint,(err,res,body)=> {
  const data = JSON.parse(body);
  const description = data[0].description;

  console.log(description);

});