let {
    def, ckFormId, subrecord, flags, uint8, 
    format, req, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('DOOR', 'Door', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            subrecord('SNAM', ckFormId('Open sound', ['SOUN'])),
            subrecord('ANAM', ckFormId('Close sound', ['SOUN'])),
            subrecord('BNAM', ckFormId('Loop sound', ['SOUN'])),
            req(subrecord('FNAM', format(uint8('Flags'), flags({
                0: 'Oblivion gate',
                1: 'Automatic door',
                2: 'Hidden',
                3: 'Minimal use'
            })))),
            sorted(memberArray('Random teleport destinations', 
                subrecord('TNAM', ckFormId('Destination', ['CELL', 'WRLD']))
            ))
        ]
    })
};