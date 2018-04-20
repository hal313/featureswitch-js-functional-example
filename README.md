# [featureswitch-js-functional-example](https://github.com/hal313/featureswitch-js-functional-example)

[![Build Status](http://img.shields.io/travis/hal313/featureswitch-js-functional-example/master.svg?style=flat-square)](https://travis-ci.org/hal313/featureswitch-js-functional-example)
[![Dependency Status](http://img.shields.io/david/hal313/featureswitch-js-functional-example.svg?style=flat-square)](https://david-dm.org/hal313/featureswitch-js-functional-example)

> Functional examples of using the [featureswitch-js](https://github.com/hal313/featureswitch-js) library.

## Introduction
This project shows three common ways to consume the [featureswitch-js](https://github.com/hal313/featureswitch-js)library.

* Traditional JavaScript within an HTML page
* Within a node.js application
* Typescript projects

## Usage
It is useful to consider this project a code playground where code is executed as changes are made. In all cases, the development dependencies will need to be installed:
```
npm install
```

### node.js
In order to use the node.js examples, run this command:
```
npm run start:node
```
As the `node-test.js` file is updated, the console will rerun the node.js code so you can see changes realtime.

### Typescript
In order to use the Typescript examples, run this command:
```
npm run start:typescript
```
As the `typescript-test.ts` file is updated, the console will rerun the Typescript code so you can see changes realtime.

### JavaScript
In order to use the traditional JavaScript examples, a browser will need to be served the content from `src\index.html`. As the `javascript-test.ts` file is updated, browser may need to be refreshed in order to view the content. If using [Visual Studio Code](https://code.visualstudio.com/), [this extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer#review-details) is great for serving content AND automatically reloading when the content changes.

## License
[MIT](https://raw.githubusercontent.com/hal313/featureswitch-js-functional-example/master/LICENSE)

## Table Of Contents
- [featureswitch-js-functional-example](#featureswitch-js-functional-example)
    - [Introduction](#introduction)
    - [Usage](#usage)
        - [node.js](#nodejs)
        - [Typescript](#typescript)
        - [JavaScript](#javascript)
    - [License](#license)
    - [Table Of Contents](#table-of-contents)