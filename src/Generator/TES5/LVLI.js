let {
    def, req, subrecord, uint8, format, 
    ckFormId, uint16, bytes, sortKey, multiStruct, 
    arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('LVLI', 'Leveled Item', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('LVLD'),
            subrecord('LVLF', format(uint8('Flags'), {
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count',
                2: 'Use All',
                3: 'Special Loot'
            })),
            subrecord('LVLG', ckFormId('Global', ['GLOB'])),
            def('LLCT'),
            req(arrayOfSubrecord('Leveled List Entries', 
                sortKey([0], multiStruct('Leveled List Entry', [
                    subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                        uint16('Level'),
                        bytes('Unknown', 2),
                        ckFormId('Reference', [
                            'ARMO',    'AMMO',    'APPA',    'MISC',    'WEAP',
                            'BOOK',    'LVLI',    'KEYM',    'ALCH',    'LIGH',
                            'INGR',    'SLGM',    'SCRL'
                        ]),
                        uint16('Count'),
                        bytes('Unknown', 2)
                    ]))),
                    def('COED')
                ]))
            ))
        ]
    })
};