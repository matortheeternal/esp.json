let {
    addDef, ckFormId, bytes, size, flags, 
    uint8, format, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XOWN', 
        subrecord('XOWN', struct('Owner', [
            ckFormId('Owner', [
                'FACT', 'ACHR', 'NPC_'
            ]),
            size(4, bytes('Unknown')),
            format(uint8('Flags'), flags({
                0: 'No Crime'
            })),
            size(3, bytes('Unused'))
        ]))
    );
};