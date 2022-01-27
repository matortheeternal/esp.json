let {
    addDef, uint32, enumeration, format, def, 
    sortKey, struct, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('EFIT', 
        req(subrecord('EFIT', sortKey([3, 4], struct('', [
            uint32('Magnitude'),
            uint32('Area'),
            uint32('Duration'),
            format(uint32('Type'), enumeration({
                0: 'Self',
                1: 'Touch',
                2: 'Target'
            })),
            def('ActorValue')
        ]))))
    );
};