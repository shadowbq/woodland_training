# Woodland

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Prerequisites Install for Ubuntu

Install node.js and npm without using sudo to run them.  I have create a nice tutorial for this please visit this link:
     Installing node.js with Node Version Manager

Once you have followed the link above and successfully installed both node.js and npm the next step is to install ember-cli:
  $ npm install -g ember-cli

Next we need to install bower, a package manager for front-end dependencies (like the famous bootstrap 3):
  $ npm install -g bower

Next we will install "watchman"  because it provides ember-cli a more effective way for watching project changes.
You have to install python first:

  $ sudo apt-get install python-dev
  $ sudo apt-get install automake autoconf

then, follow this command from facebook watchman guide:
  $ git clone https://github.com/facebook/watchman.git
  $ cd watchman
  $ git checkout v4.1.0  # the latest stable release
  $ ./autogen.sh
  $ ./configure
  $ make
  $ sudo make install

There is an issue with watchman if you are using debian distro like Ubuntu.  When you run ember server command you
will get an error:  "error is not defined ReferenceError: error is not defined".  For more information check this link.

Just run this command for the fix:

  $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  $ watchman shutdown-server

Install phantomjs for your test runner:
  $ npm install -g phantomjs

That should install ember-cli now.  Let's test it by creating our first ember-cli project:
  $ ember server

Navigate to http://localhost:4200 to check out your application.
Navigate to http://localhost:4200/tests to see your results in action.

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
