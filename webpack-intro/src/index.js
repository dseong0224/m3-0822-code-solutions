// What is Webpack ?
// webpack is a module bundler that bundles various files
// It is a tool that takes a collection of JavaScript modules and other assets, such as CSS and images, and bundles them into optimized and efficient assets for use in a web application.

// How do you add a devDependency to a package ?
// npm install --save-dev <package-name>

// What is an NPM script ?
// NPM scripts are defined in a package.json file and can be used to automate a variety of tasks, such as building, testing, or deploying a project

// How do you execute Webpack with npm run ?
// npm run build

const $ = require('jquery');

function updateHeading($h1) {
  if ($h1.is('[webpack]')) {
    $h1.removeAttr('webpack');
    $h1.text('Hello, World!');
  } else {
    $h1.attr('webpack', true);
    $h1.text('Hello, Webpack!');
  }
}

setInterval(updateHeading, 1000, $('#hello-world'));
