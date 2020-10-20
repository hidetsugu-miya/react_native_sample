#!/bin/node
const fs = require('fs');

const env = process.argv[2];
const client = process.argv[3];

fs.copyFile(`./src/stylesheets/clients/${client}.js`, `./src/stylesheets/index.js`, error => {
  if (error) {
    console.log(err.stack);
  } else {
    console.log('Done.');
  }
});

fs.copyFile(`./src/config/environments/${env}.js`, `./src/config/environments/index.js`, error => {
  if (error) {
    console.log(err.stack);
  } else {
    console.log('Done.');
  }
});
