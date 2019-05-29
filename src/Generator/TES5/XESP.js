let {
    addDef, ckFormId, uint8, format, bytes, 
    subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('XESP', 
        subrecord('XESP', struct('Enable Parent', [
            ckFormId('Reference', [
                'PLYR',    'ACHR',    'REFR',    'PGRE',    'PHZD',
                'PMIS',    'PARW',    'PBAR',    'PBEA',    'PCON',
                'PFLA'
            ]),
            format(uint8('Flags'), {
                0: 'Set Enable State to Opposite of Parent',
                1: 'Pop In'
            }),
            bytes('Unused', 3)
        ]))
    );
};