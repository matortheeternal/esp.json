let {
    addDef, record, def, req, subrecord, 
    float, struct, int32, flags32, formId, 
    ckFormId
} = require('../helpers');

module.exports = () => {
    addDef(record('ALCH', 'Ingestible', {
        flags: {
            29: 'Medicine',                                 // 0x20000000
        },
        elements: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('DESC'),
            def('MODL'),
            def('DEST'),
            def('ICON'),
            def('YNAM'),
            def('ZNAM'),
            def('ETYP'),
            req(subrecord('DATA', float('Weight'))),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Value'),
                flags32('Flags', [
                    'No Auto-Calc',                         // 0x00000001
                    'Food Item',                            // 0x00000002
                    'Unknown 3',                            // 0x00000004
                    'Unknown 4',                            // 0x00000008
                    'Unknown 5',                            // 0x00000010
                    'Unknown 6',                            // 0x00000020
                    'Unknown 7',                            // 0x00000040
                    'Unknown 8',                            // 0x00000080
                    'Unknown 9',                            // 0x00000100
                    'Unknown 10',                           // 0x00000200
                    'Unknown 11',                           // 0x00000400
                    'Unknown 12',                           // 0x00000800
                    'Unknown 13',                           // 0x00001000
                    'Unknown 14',                           // 0x00002000
                    'Unknown 15',                           // 0x00004000
                    'Unknown 16',                           // 0x00008000
                    'Medicine',                             // 0x00010000
                    'Poison',                               // 0x00020000
                ]),
                formId('Addiction'),
                float('Addiction Chance'),
                ckFormId('Sound - Consume', ['SNDR', 'NULL']),
            ]))),
            req(def('Effects')),
        ]
    }));
};