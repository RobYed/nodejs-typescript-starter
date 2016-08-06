# NodeJS TypeScript Starter

[![Build Status](https://travis-ci.org/RobYed/nodejs-typescript-starter.svg?branch=master)](https://travis-ci.org/RobYed/nodejs-typescript-starter)
[![Dependencies](https://david-dm.org/RobYed/nodejs-typescript-starter.svg)](https://david-dm.org/robyed/nodejs-typescript-starter)
[![Known Vulnerabilities](https://snyk.io/test/github/RobYed/nodejs-typescript-starter/badge.svg)](https://snyk.io/test/github/RobYed/nodejs-typescript-starter)

**A thin starter template for NodeJS / Express projects written in TypeScript + ES6.**

The goal of this project is to provide a basic template for new NodeJS projects based on Express and written in TypeScript + ES6. 
It features a simple example Express app, npm build scripts, Jasmine test examples, TypeScript linting and more.

## Features
* Example Express 4.x app (coming soon)
    - MVC project structure
    - Logging with winston
* TypeScript
* ES6 modules
* NPM as build tool
* Nodemon for live-reload during development
* Debugging Integration for Visual Studio Code
* Unit-Testing with Jasmine
* TSLint Linting
* Code coverage with Istanbul
* Security vulnerability monitoring with Snyk
* Prepared for Travis CI


## Usage

1. Clone this Repository and change into its directory

    `git clone --depth=1 https://github.com/RobYed/nodejs-typescript-starter.git your-project-name`

    `cd your-project-name`
2. Install NodeJS > v5.0.0. It is suggested to use Node Version Manager to install NodeJS:
    [NVM at Github](https://github.com/creationix/nvm)
3. Install global dependencies:

    `npm install -g typescript typings`
4. Install project dependencies (`npm install` and `typings install`), build and start dev server:

    `npm start`

## Folder Structure
coming soon

## Visual Studio Code
It is recommended to use a code editor or IDE with great NodeJS and TypeScript support. 
[Visual Studio Code](https://code.visualstudio.com) has one of the best integrations for both technologies and is open-source.
Recommended Extensions for Visual Studio Code in combination with this starter template are:
* [TSLint Extension](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [Jasmine Code Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)

## License, Copyright etc.
Copyright 2016 [Robert Dey](https://github.com/RobYed/) Licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT). Please share with your neighbor.