# IconFont4Schools

Custom font providing the iconography for
[Founders4Schools](http://www.founders4schools.org.uk). Made from SVG images
coming from [flaticon.com](http://www.flaticon.com/) and from around the web.

## Installation

This is bower installable using the github shorthand:

    bower install --save founders4schools/iconfont4schools    

## Working on this repository

### Prerequisites

The font is build with
[gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont). You can get all
the needed dependencies with [NPM](https://www.npmjs.com):

    npm install

### Adding a new icon    

It takes just 3 steps:

* Get a SVG version of the image, and save it to `assets/icons` with clean and
unique name (the 'uXXXX-' prefix is added automatically).
* Run `gulp build`, which does the hard work:
  * Generating font files under `fonts/`
  * Generating CSS file under `css/`
  * Minify CSS file for you
* Add your new icon(s) to the example page to showcase and test it.

### Creating a new release

The package is just meant to be referenced from the Github shorthand, you just
need to create a new release on Github, but make sure to keep a clean
versioning:

* Fixing bug with icon: increase patch digit
* New icon: increase the minor digit
* Breaking change: increase major digit

## TODO

* Get the examples page generated automatically when building
* Add a `watch` gulp task
