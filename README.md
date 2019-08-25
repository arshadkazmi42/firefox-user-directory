# firefox-user-directory

[![Build](https://img.shields.io/travis/com/arshadkazmi42/firefox-user-directory.svg)](https://travis-ci.com/arshadkazmi42/firefox-user-directory/)

Get firefox user directory crossplatform

## Install

```
npm i firefox-user-directory
```

## Usage

```javascript

const firefoxUserDirectory = require('firefox-user-directory');

const path = firefoxUserDirectory('darwin');
console.log(path);

// Output
// /Users/arshad/Library/Application Support/Firefox

```

## API

- **from(url)**
  - Returns domain name from input url

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/firefox-user-directory/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
