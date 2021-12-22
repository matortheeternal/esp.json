let {
    def, req, flags, uint8, format, 
    subrecord, ckFormId, int16, bytes, size, 
    conflict, sortKey, struct, memberStruct, sorted, 
    memberArray, elementCounter, record
} = require('../helpers');

module.exports = () => {
    record('LVLN', 'Leveled NPC', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('LVLD'),
            req(subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count'
            })))),
            subrecord('LVLG', ckFormId('Global', ['GLOB'])),
            def('LLCT'),
            elementCounter('LLCT - Count', 
                sorted(memberArray('Leveled List Entries', 
                    sortKey([0], memberStruct('Leveled List Entry', [
                        subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                            int16('Level'),
                            conflict('Ignore', size(2, bytes('Unknown'))),
                            ckFormId('Reference', ['NPC_', 'LVLN']),
                            int16('Count'),
                            conflict('Ignore', size(2, bytes('Unknown')))
                        ]))),
                        def('COED')
                    ]))
                ))
            ),
            def('MODL')
        ]
    })
};