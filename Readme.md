![Fast Nunjucks](/build/img/fast-nunjucks-logo.png)

---

A simple boilerplate to create projects with Nunjucks, Stylus, Gulp, Browser-sync and more.

Maybe you want to read about them:
- [GulpJS](http://gulpjs.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Stylus](http://learnboost.github.io/stylus/)
- [Browser-sync](http://www.browsersync.io/)

For grid system I use [Jeet](http://jeet.gs/) with some help from [Kouto Swiss](http://kouto-swiss.io/) for animations, reset and a lot of great mixins. And for responsive utilities, [Rupture](https://github.com/jenius/rupture) is awesome =)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)


```sh
# Clone this repository
$ git clone git://github.com/willianjusten/Fast-nunjucks.git new_project
$ cd new_project

# install dependencies
$ npm install
```

With the commands above, you have everything to start.

### Folders and Files

```sh
new_project -
    /build -
        /css
            main.css
        /img
        /js
            main.js
    /src -
        /img
        /js
        /styl
        /templates
        .editorconfig
        .gitignore
        Gulpfile.js
        package.json
        Readme.md
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:8080)
- `gulp js`: execute js files
- `gulp nunjucks`: compile nunjucks templates
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp watch`: call for watch files
- `gulp -p`: minify all files for production