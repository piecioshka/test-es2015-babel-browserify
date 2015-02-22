'use strict';

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
