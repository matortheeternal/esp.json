let {
    def, req, flags, uint8, format, 
    subrecord, ckFormId, uint16, bytes, size, 
    sortKey, struct, memberStruct, sorted, memberArray, 
    elementCounter, record
} = require('../helpers');

module.exports = () => {
    record('LVLI', 'Leveled Item', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('LVLD'),
            req(subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count',
                2: 'Use All',
                3: 'Special Loot'
            })))),
            subrecord('LVLG', ckFormId('Global', ['GLOB'])),
            def('LLCT'),
            req(elementCounter('LLCT - Count', 
                sorted(memberArray('Leveled List Entries', 
                    sortKey([0], memberStruct('Leveled List Entry', [
                        subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                            uint16('Level'),
                            req(size(2, bytes('Unknown'))),
                            ckFormId('Reference', [
                                'ARMO', 'AMMO', 'APPA', 'MISC', 'WEAP',
                                'BOOK', 'LVLI', 'KEYM', 'ALCH', 'LIGH',
                                'INGR', 'SLGM', 'SCRL'
                            ]),
                            uint16('Count'),
                            req(size(2, bytes('Unknown')))
                        ]))),
                        def('COED')
                    ]))
                ))
            ))
        ]
    })
};