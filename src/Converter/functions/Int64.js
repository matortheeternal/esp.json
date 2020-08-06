let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('Int64', [args.number], args => args.values[0]);