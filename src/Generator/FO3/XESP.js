let {
    addDef, ckFormId, flags, uint8, format, 
    bytes, size, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XESP', 
        subrecord('XESP', struct('Enable Parent', [
            ckFormId('Reference', [
                'PLYR', 'REFR', 'ACRE', 'ACHR', 'PGRE',
                'PMIS', 'PBEA'
            ]),
            format(uint8('Flags'), flags({
                0: 'Set Enable State to Opposite of Parent',
                1: 'Pop In'
            })),
            size(3, bytes('Unused'))
        ]))
    );
};