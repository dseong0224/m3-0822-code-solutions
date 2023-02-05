// https://stackoverflow.com/questions/27599614/var-express-requireexpress-var-app-express-what-is-express-is-it#:~:text=require('express')%20returns,object%20returned%20by%20express().

const express = require('express');
const path = require('path');

const app = express();

const dirPath = path.join(__dirname, 'public');
console.log(__dirname);
// console.log('express: ', express, 'path: ', path, 'app: ', app);
console.log('dirPath: ', dirPath);

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
  console.log('hello');
});
