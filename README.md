# Wx

This is a simple Ember practice project. I'm pulling data from http://forecast.io

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* A developer API key from https://developer.forecast.io/

## Installation

* `git clone https://github.com/flybayer/wx.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).
* To get weather info for a certain location, you'll need to include your API key and location in the URL like this:

    http://localhost:4200/<API_KEY>/<LATITUDE>,<LONGITUDE>

    Ex: http://localhost:4200/<API_KEY>/43.0419,-90.1967

  * You can find your lat/lon location by going to http://forecast.io

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

