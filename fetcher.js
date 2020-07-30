/**
 * Implement a small command line node app called fetcher.js
 * Should take a url as a command line argument
 * Should also take a local file path and download the resource to the specified path
 * 
 * 
 * OUTPUT: 
 * > node fetcher.js http://www.example.edu/ ./index.html
 * Downloaded and saved 3261 bytes to ./index.html
 */

const request = require('request');
const fs = require('fs');
let userInput = process.argv.slice(2);

request(userInput[0], (error, response, body) => {
  if (error) {
    throw error;
  }
  fs.writeFile(userInput[1], body, 'utf8', () => {
    if (error) {
      throw error;
    }
    fs.stat(userInput[1], (error, stats) => {
      if (error) {
        throw error;
      }
      console.log(`Downloaded and saved ${stats.size} bytes ${userInput[1]}`);
    });
  }); 
});
