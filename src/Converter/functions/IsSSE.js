let {functionConverter} = require('../converters'),
    {arr} = require('../helpers');

functionConverter('IsSSE', [
    { type: 'member', name: 'm1' },
    { type: 'member', name: 'm2' }
], ({m1, m2}, converter) => {
    converter.addRequires('IsSSE');
    return `IsSSE(game, ${arr([m1, m2])})`;
});

functionConverter('IsSSE', [
    { type: 'string', name: 's1' },
    { type: 'string', name: 's2' }
], ({s1, s2}, converter) => {
    converter.addRequires('IsSSE');
    return `IsSSE(game, ${arr([`'${s1}'`, `'${s2}'`])})`;
});