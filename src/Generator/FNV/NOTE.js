let {
    req, def, enumeration, uint8, format, 
    subrecord, ckFormId, sorted, memberArray, string, 
    opts, union, record
} = require('../helpers');

module.exports = () => {
    record('NOTE', 'Note', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', format(uint8('Type'), enumeration({
                0: 'Sound',
                1: 'Text',
                2: 'Image',
                3: 'Voice'
            })))),
            sorted(memberArray('Quests', 
                subrecord('ONAM', ckFormId('Quest', ['QUST']))
            )),
            subrecord('XNAM', string('Texture')),
            subrecord('TNAM', union('Text / Topic', 'NOTETNAMDecide', [
                opts(string('Text'), {
                    "transform": "keepcase"
                }),
                ckFormId('Topic', ['DIAL'])
            ])),
            subrecord('SNAM', union('Sound / NPC', 'NOTESNAMDecide', [
                ckFormId('Sound', ['SOUN']),
                ckFormId('Actor', ['NPC_', 'CREA'])
            ]))
        ]
    })
};