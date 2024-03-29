let {
    def, req, localized, string, conflictType, 
    subrecord, opts, flags, uint8, format, 
    enumeration, bytes, size, int32, ckFormId, 
    union, uint32, float, struct, record
} = require('../helpers');

module.exports = () => {
    record('BOOK', 'Book', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            opts(req(subrecord('DESC', conflictType('Translate', localized(string('Book Text'))))), {
                "transform": "keepcase"
            }),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('Data', [
                format(uint8('Flags'), flags({
                    0: 'Teaches Skill',
                    1: 'Can\'t be Taken',
                    2: 'Teaches Spell',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8'
                })),
                format(uint8('Type'), enumeration({
                    0: 'Book/Tome',
                    255: 'Note/Scroll'
                })),
                size(2, bytes('Unused')),
                union('Teaches', 'BOOKTeachesDecider', [
                    format(int32('Skill'), def('SkillEnum')),
                    ckFormId('Spell', ['SPEL', 'NULL'])
                ]),
                uint32('Value'),
                float('Weight')
            ]))),
            subrecord('INAM', ckFormId('Inventory Art', ['STAT'])),
            subrecord('CNAM', conflictType('Translate', localized(string('Description'))))
        ]
    })
};