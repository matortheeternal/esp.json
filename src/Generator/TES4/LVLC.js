let {
    def, uint8, subrecord, req, flags, 
    format, int16, bytes, size, ckFormId, 
    sortKey, struct, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('LVLC', 'Leveled Creature', {
        members: [
            def('EDID'),
            req(subrecord('LVLD', uint8('Chance none'))),
            req(subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count'
            })))),
            req(sorted(memberArray('Leveled List Entries', 
                subrecord('LVLO', sortKey([0, 2], struct('Leveled List Entry', [
                    int16('Level'),
                    size(2, bytes('Unused')),
                    ckFormId('Reference', [
                        'NPC_', 'CREA', 'LVLC'
                    ]),
                    int16('Count'),
                    size(2, bytes('Unused'))
                ])))
            ))),
            def('SCRI'),
            subrecord('TNAM', ckFormId('Creature template', ['NPC_', 'CREA']))
        ]
    })
};