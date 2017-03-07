module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "extends": [
    "standard",
    "plugin:jasmine/recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "standard",
    "promise",
    "babel",
    "jasmine",
    "react"
  ],
  "env": {
    "jasmine": true
  }
};
