# IconFont4Schools

Custom font providing the iconography for [Founders4Schools](http://www.founders4schools.org.uk). Made with [Fontastic](http://fontastic.me), using SVG images coming from [flaticon.com](http://www.flaticon.com/) and from around the web.

## Installation

This is bower installable using the github shorthand:

    bower install founders4schools/iconfont4schools

## Adding new icons

This is quite manual, and involve several steps:

* Get a SVG version of the image
* Upload it to the Fontastic account, in the F4S icons set - make sure to _select_ the new icon after uploading
* Give the new icon a clean name in the customize tab
* Head over to publish, and download in the install manually section
* Extract the generated archive in this project as follow:
  * __Overwrite__ the `fonts` folder
  * __Add__ the new generated selector at the end of `iconfont4s.css`. It's important to not overwrite the entire file, the first generic selectors from Fontastic are creating a big margin above the icon, which is not wanted.
* The minified CSS is generated using a very simple [atom plug-in](https://atom.io/packages/atom-minify) that let you call it on demand or on save.
* Add your new icon(s) to the example page to showcase and test it.
* Commit, create a new release, and actually start using it.

## TODO

* Make the whole thing more automated: not rely on Fontastic? There are [several NPM packages](https://www.npmjs.com/search?q=font+svg), and [this one](https://www.npmjs.com/package/gulp-iconfont) seems to do the job.
* Script to create a new release?
