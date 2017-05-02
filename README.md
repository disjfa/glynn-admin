# glynn-admin

[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]

A simple and useful admin page interface. An example can be found here: [glynn-admin](https://disjfa.github.io/glynn-admin/).

# instalation

```
npm install glynn-admin
```

# usage

Create a base scss file. Add this to the main file.

```scss
@import "glynn-admin/scss/glynn-admin";
```

And go and create a super website.

#### grunt

Don't forget to setup a loadFile on the base project. In my gruntfile i have these options on the scss loader:
```js
sass: {
    dist: {
        options: {
            loadPath: 'node_modules'
        }
    }
}
```

#### the hard way

Copy the files from the dist folder. Located here;

```css
glynn-admin/dist/css/glynn-admin.css
```

For the javascript. Just use the default bootstrap, jquery and thether javascript to include in your project.

# usage

[unsplash](https://unsplash.com/)
[Bootstrap v4](http://getbootstrap.com/)
[Font Awesome](http://fontawesome.io/)
[Social Buttons for Bootstrap](https://lipis.github.io/bootstrap-social/)
[Chart.js](http://www.chartjs.org/)

#issues

Issues can be reported [here](https://github.com/disjfa/glynn-admin/issues)

[version-badge]: https://img.shields.io/npm/v/glynn-admin.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/glynn-admin.svg?style=flat-square