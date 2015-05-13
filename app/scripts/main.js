'use strict';

class Application {
    constructor() {
        console.log('Hello world!');
    }

    toString() {
        return '[object Application]'
    }
}

var g = new Application();
console.debug(g.toString());
