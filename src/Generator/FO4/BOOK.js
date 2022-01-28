let {
    def, req, ckFormId, subrecord, uint32, 
    float, struct, flags, uint8, format, 
    bytes, size, union, localized, string, 
    conflictType, opts, record
} = require('../helpers');

module.exports = () => {
    record('BOOK', 'Book', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('MICO'),
            req(def('DESC')),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('FIMD', ckFormId('Featured Item Message', ['MESG'])),
            req(subrecord('DATA', struct('Data', [
                uint32('Value'),
                float('Weight')
            ]))),
            req(subrecord('DNAM', struct('', [
                format(uint8('Flags'), flags({
                    0: 'Advance Actor Value',
                    1: 'Can\'t be Taken',
                    2: 'Add Spell',
                    3: 'Unknown 3',
                    4: 'Add Perk'
                })),
                union('Teaches', 'BOOKTeachesDecider', [
                    size(4, bytes('Unused')),
                    ckFormId('Actor Value', ['AVIF', 'NULL']),
                    ckFormId('Spell', ['SPEL', 'NULL']),
                    ckFormId('Perk', ['PERK', 'NULL'])
                ]),
                struct('Text Offset', [
                    uint32('X'),
                    uint32('Y')
                ])
            ]))),
            opts(subrecord('CNAM', conflictType('Translate', localized(string('Description')))), {
                "transform": "keepcase"
            }),
            subrecord('INAM', ckFormId('Inventory Art', ['STAT']))
        ]
    })
};