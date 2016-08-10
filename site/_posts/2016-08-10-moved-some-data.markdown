---
layout: post
title:  "Moved some data"
date:   2016-08-10 23:57:54 +0200
categories: news update
---

#### Setup for use

Ok, so i wanted to set this branch up for use. The whole idea was to move the _sass folder from the build files cause github did not like my source folder move.
In the end i found i built the data wrong. I took some liberty to use the [bootstrap][bootstrap] git page as an example, i moved my sass files to a scss file folder and built it with grunt.
Moved them once created to the site folder so jekyll could move them. Pushed my branch and my site was again empty, wtf. I knew and wished github was an all knowing beast.

So i read some more and found a wonderful [grunt-build-control][grunt-build-control] wich [bootstrap][bootstrap] also uses. This just pushes my created pages to the
gh-pages branch. So i moved my data back to my master branch and updated my pages.

Now all is well again.

#### browserify

Also, since i moves my scss outside my root folder i also moves my javascript and moved it to a [grunt-browserify][grunt-browserify] location.
So i can use and create es6 modules when i want, next time. I like clean code.

[grunt-build-control]: https://github.com/robwierzbowski/grunt-build-control
[bootstrap]: https://github.com/disjfa/bootstrap/
[grunt-browserify]: https://github.com/jmreidy/grunt-browserify