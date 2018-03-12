This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is a counter App, which keeps different counters and mainatains there individual state<br>

![App in Action](https://raw.githubusercontent.com/yesarpit/counterApp/master/public/app.gif)


## Folder Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    app.gif
  src/
    components/
      counterContainer.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```


## Steps to Run

In the project directory, you need to follow below sequence to run the project:

### `npm i`

### `npm start`

For Production : ### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!



## For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.
