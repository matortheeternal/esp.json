let {
    addDef, def, uint32, format, enumeration, 
    int32, sortKey, struct, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('EFIT', 
        req(subrecord('EFIT', sortKey([4, 5], struct('', [
            format(uint32('Magic effect name'), def('Char4')),
            uint32('Magnitude'),
            uint32('Area'),
            uint32('Duration'),
            format(uint32('Type'), enumeration({
                0: 'Self',
                1: 'Touch',
                2: 'Target'
            })),
            format(int32('Actor Value'), def('ActorValueEnum'))
        ]))))
    );
};