let {
    addDef, record, def, req, subrecord, 
    lstring, struct, flags8, enum8, bytes, 
    union, enumS32, ckFormId, uint32, float
} = require('../helpers');

module.exports = game => {
    addDef(record('BOOK', 'Book', {
        elements: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            req(subrecord('DESC', lstring('Book Text'))),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('Data', [
                flags8('Flags', [
                    'Teaches Skill',                        // 0x01
                    'Can\'t be Taken',                      // 0x02
                    'Teaches Spell',                        // 0x04
                    'Unknown 4',                            // 0x08
                    'Unknown 5',                            // 0x10
                    'Unknown 6',                            // 0x20
                    'Unknown 7',                            // 0x40
                    'Unknown 8',                            // 0x80
                ]),
                enum8('Type', [
                    {
                        '0': 'Book/Tome',
                        '255': 'Note/Scroll',
                    }
                ]),
                bytes('Unused', 2),
                union('Teaches', 'BOOKTeachesDecider', [
                    enumS32('Skill', def('SkillEnum')),
                    ckFormId('Spell', ['SPEL', 'NULL']),
                ]),
                uint32('Value'),
                float('Weight'),
            ]))),
            subrecord('INAM', ckFormId('Inventory Art', ['STAT'])),
            subrecord('CNAM', lstring('Description')),
        ]
    }));
};