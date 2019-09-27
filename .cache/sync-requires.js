const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/chrisparsons/git/valleyproperty.solutions/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chrisparsons/git/valleyproperty.solutions/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/chrisparsons/git/valleyproperty.solutions/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/chrisparsons/git/valleyproperty.solutions/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chrisparsons/git/valleyproperty.solutions/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/chrisparsons/git/valleyproperty.solutions/src/pages/landing.js")))
}

