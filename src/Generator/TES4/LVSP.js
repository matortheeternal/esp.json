let {
    def, uint8, subrecord, req, flags, 
    format, int16, bytes, size, ckFormId, 
    sortKey, struct, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('LVSP', 'Leveled Spell', {
        members: [
            def('EDID'),
            req(subrecord('LVLD', uint8('Chance none'))),
            req(subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count',
                2: 'Use all spells'
            })))),
            req(sorted(memberArray('Leveled List Entries', 
                subrecord('LVLO', sortKey([0, 2], struct('Leveled List Entry', [
                    int16('Level'),
                    size(2, bytes('Unused')),
                    ckFormId('Reference', ['SPEL', 'LVSP']),
                    int16('Count'),
                    size(2, bytes('Unused'))
                ])))
            )))
        ]
    })
};