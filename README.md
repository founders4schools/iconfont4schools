[![devDependency Status](https://david-dm.org/founders4schools/iconfont4schools/dev-status.svg)](https://david-dm.org/founders4schools/iconfont4schools#info=devDependencies)

# IconFont4Schools

Custom font providing the iconography for
[Founders4Schools](http://www.founders4schools.org.uk). Made from SVG images
coming from [flaticon.com](http://www.flaticon.com/) and from around the web. See available icons [on the (very basic) example page](https://rawgit.com/founders4schools/iconfont4schools/master/examples/index.html).

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
 
The easier way to do it is with the `bower verson` command:

    bower version [ major | minor | patch ]

Then push your changes ande tag you just created.
