let {
    def, uint8, bytes, subrecord, struct, 
    req, ckFormId, uint32, float, array, 
    multiStruct, arrayOfSubrecord, sortKey, lstring, uint16, 
    record
} = require('../helpers');

module.exports = () => {
    record('REGN', 'Region', {
        flags: {
            "6": "Border Region"
        },
        members: [
            def('EDID'),
            req(subrecord('RCLR', struct('Map Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                bytes('Unknown', 1)
            ]))),
            subrecord('WNAM', ckFormId('Worldspace', ['WRLD'])),
            arrayOfSubrecord('Region Areas', undefined),
            arrayOfSubrecord('Region Data Entries', sortKey([0], multiStruct('Region Data Entry', undefined)))
        ]
    })
};