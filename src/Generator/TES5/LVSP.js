let {
    def, req, flags, subrecord, uint8, 
    format, uint16, bytes, size, ckFormId, 
    sortKey, struct, memberStruct, sorted, memberArray, 
    record
} = require('../helpers');

module.exports = () => {
    record('LVSP', 'Leveled Spell', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('LVLD'),
            subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count',
                2: 'Use All Spells'
            }))),
            def('LLCT'),
            req(sorted(memberArray('Leveled List Entries', 
                sortKey([0], memberStruct('Leveled List Entry', [
                    subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                        uint16('Level'),
                        size(2, bytes('Unknown')),
                        ckFormId('Reference', ['SPEL', 'LVSP']),
                        uint16('Count'),
                        size(2, bytes('Unknown'))
                    ])))
                ]))
            )))
        ]
    })
};