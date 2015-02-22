# test-es6-babel-browserify

Experimental application which test couple of tools:
 - **ECMAScript 6** (as new syntax in JavaScript)
 - **Babel.js** as parse and transpiler ES6 to ES5
 - **Browserify** as manager of require modules on frontend part
 - **Babelify** as weld

## Steps

1. Install globaly `browserify`.
2. Install `babelify`

    ```
    npm install --save-dev babelify
    ```

3. Setup name of project.
4. Defined package.json/npm/scripts/ task to build with `babelify`.

    ```
    browserify app/scripts/main.js -t babelify --outfile app/scripts/bundle.js
    ```

5. Create `index.html` which include `bundle.js`
6. Fill `main.js` file with sample content (use ECMAScript 6):

    ```javascript
    class Game {
        constructor() {
            console.log('Game#constructor');
        }

        toString() {
            return '[object Game]'
        }
    }

    var g = new Game();
    console.debug(g.toString());
    ```

7. Run command:

    ```
    npm run build
    ```
to generate `bundle.js` file.
8. Last step in to view results in browser! :)