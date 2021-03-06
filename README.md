[![devDependency Status](https://david-dm.org/founders4schools/iconfont4schools/dev-status.svg)](https://david-dm.org/founders4schools/iconfont4schools#info=devDependencies) [![Build Status](https://travis-ci.org/founders4schools/iconfont4schools.svg?branch=master)](https://travis-ci.org/founders4schools/iconfont4schools)

# IconFont4Schools

Custom font providing the iconography for
[Founders4Schools](http://www.founders4schools.org.uk). Made from SVG images
coming from [flaticon.com](http://www.flaticon.com/) and from around the web. See available icons [on the (very basic) example page](https://rawgit.com/founders4schools/iconfont4schools/master/examples/index.html).

## Installation

This is bower and npm installable using the github shorthand:

    bower install --save founders4schools/iconfont4schools  
    npm install --save founders4schools/iconfont4schools
    yarn add founders4schools/iconfont4schools 

## Working on this repository

### Prerequisites

The font is build with
[gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont). You can get all
the needed dependencies with [NPM](https://www.npmjs.com):

    npm install

### Adding a new icon    

It takes just 2 steps:

* Get a SVG version of the image, and save it to `assets/icons/` with clean and
unique name.
* Run `gulp build` (there is also a `watch` task), which does the hard work:
  * Assign a character and add a prefix to your new icon.
  * Generating font files under `fonts/`
  * Generating CSS file under `css/`
  * Minify CSS file for you
  * Generating the updated example page
* Open `examples/index.html` and verify that your new icon is present and
renders as expected

### Creating a new release

The package is just meant to be referenced from the Github shorthand, you just
need to create a tag on Github, but make sure to keep a clean versioning:

* Fixing bug with icon: increase patch digit
* New icon: increase the minor digit
* Breaking change: increase major digit

We use [`version-bump-prompt`](https://www.npmjs.com/package/version-bump-prompt) for that,
which is installed locally. You can run it directly with [npx](https://github.com/zkat/npx):

    npx bump [major|minor|patch] --commit --tag

As you might expect this will commit & tag your new version. Omit the commit/tag options 
if you want to look at what's going on. Once it looks good, push your changes with the 
tag you just created.
