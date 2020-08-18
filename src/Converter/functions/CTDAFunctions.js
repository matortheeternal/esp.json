let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('CTDAFunctions', [
    args.ctdaFunctions
], (args) => args.ctdaFunctions);
