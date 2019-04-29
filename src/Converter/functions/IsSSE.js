let {addRequires, functionConverter} = require('../converter'),
    {arr} = require('../helpers');

functionConverter('IsSSE', [
    { type: 'member', name: 'm1' },
    { type: 'member', name: 'm2' }
], ({m1, m2}) => {
    addRequires('IsSSE');
    return `IsSSE(game, ${arr([m1, m2])})`;
});