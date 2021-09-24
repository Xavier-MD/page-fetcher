const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

const Url = args[0];
const Path = args[1];


request(Url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(Path, body, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    } else {
      const size = fs.statSync(Path).size;
      console.log(`Downloaded and saved ${size} bytes to ${Path}`);
    }
  });
});