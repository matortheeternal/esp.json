let {
    req, def, uint8, subrecord, flags, 
    format, int16, bytes, size, ckFormId, 
    sortKey, struct, memberStruct, sorted, memberArray, 
    record
} = require('../helpers');

module.exports = () => {
    record('LVLC', 'Leveled Creature', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(subrecord('LVLD', uint8('Chance none'))),
            req(subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count'
            })))),
            req(sorted(memberArray('Leveled List Entries', 
                sortKey([0], memberStruct('Leveled List Entry', [
                    subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                        int16('Level'),
                        size(2, bytes('Unused')),
                        ckFormId('Reference', ['CREA', 'LVLC']),
                        int16('Count'),
                        size(2, bytes('Unused'))
                    ]))),
                    def('COED')
                ]))
            ))),
            def('MODL')
        ]
    })
};