let {
    flags, def, req, float, subrecord, 
    int32, uint32, format, formId, ckFormId, 
    struct, localized, string, conflictType, opts, 
    record
} = require('../helpers');

module.exports = () => {
    record('ALCH', 'Ingestible', {
        flags: flags({
            12: 'Ignored',
            29: 'Medicine'
        }),
        members: [
            def('EDID'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('MODL'),
            def('ICON'),
            def('MICO'),
            def('YNAM'),
            def('ZNAM'),
            def('ETYP'),
            def('CUSD'),
            def('DEST'),
            def('DESC'),
            req(subrecord('DATA', float('Weight'))),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Value'),
                format(uint32('Flags'), flags({
                    0: 'No Auto-Calc',
                    1: 'Food Item',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8',
                    8: 'Unknown 9',
                    9: 'Unknown 10',
                    10: 'Unknown 11',
                    11: 'Unknown 12',
                    12: 'Unknown 13',
                    13: 'Unknown 14',
                    14: 'Unknown 15',
                    15: 'Unknown 16',
                    16: 'Medicine',
                    17: 'Poison'
                })),
                formId('Addiction'),
                float('Addiction Chance'),
                ckFormId('Sound - Consume', ['SNDR', 'NULL'])
            ]))),
            opts(subrecord('DNAM', conflictType('Translate', localized(string('Addiction Name')))), {
                "transform": "keepcase"
            }),
            req(def('Effects'))
        ]
    })
};