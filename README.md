# glynn-admin

[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

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

[package]: https://www.npmjs.com/package/glynn-admin
[version-badge]: https://img.shields.io/npm/v/glynn-admin.svg?style=flat-square
[license]: https://github.com/disjfa/glynn-admin/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/glynn-admin.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/disjfa/glynn-admin.svg?style=social
[github-watch]: https://github.com/disjfa/glynn-admin/watchers
[github-star-badge]: https://img.shields.io/github/stars/disjfa/glynn-admin.svg?style=social
[github-star]: https://github.com/disjfa/glynn-admin/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20glynn-admin!%20-%20Cool%20admin%20template!%20Thanks%20@disjfa%20https://github.com/disjfa/glynn-admin%20%F0%9F%A4%97
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/disjfa/glynn-admin.svg?style=social