let {
    def, req, uint8, subrecord, flags, 
    format, ckFormId, uint16, bytes, size, 
    conflictType, sortKey, struct, memberStruct, sorted, 
    memberArray, elementCounter, uint32, array, localized, 
    string, opts, record
} = require('../helpers');

module.exports = () => {
    record('LVLI', 'Leveled Item', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('LVLD'),
            subrecord('LVLM', uint8('Max Count')),
            req(subrecord('LVLF', format(uint8('Flags'), flags({
                0: 'Calculate from all levels <= player\'s level',
                1: 'Calculate for each item in count',
                2: 'Use All'
            })))),
            subrecord('LVLG', ckFormId('Use Global', ['GLOB'])),
            def('LLCT'),
            elementCounter('LLCT - Count', 
                sorted(memberArray('Leveled List Entries', 
                    sortKey([0], memberStruct('Leveled List Entry', [
                        subrecord('LVLO', sortKey([0, 2], struct('Base Data', [
                            uint16('Level'),
                            conflictType('Ignore', size(2, bytes('Unused'))),
                            ckFormId('Reference', def('sigBaseObjects')),
                            uint16('Count'),
                            uint8('Chance None'),
                            conflictType('Ignore', size(1, bytes('Unused')))
                        ]))),
                        def('COED')
                    ]))
                ))
            ),
            subrecord('LLKC', sorted(array('Filter Keyword Chances', 
                sortKey([0], struct('Filter', [
                    ckFormId('Keyword', ['KYWD']),
                    uint32('Chance')
                ]))
            ))),
            subrecord('LVSG', ckFormId('Epic Loot Chance', ['GLOB'])),
            opts(subrecord('ONAM', conflictType('Translate', localized(string('Override Name')))), {
                "transform": "keepcase"
            })
        ]
    })
};