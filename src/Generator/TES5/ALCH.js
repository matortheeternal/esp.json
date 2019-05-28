let {
    def, subrecord, float, req, int32, 
    uint32, formId, ckFormId, struct, record
} = require('../helpers');

module.exports = () => {
    record('ALCH', 'Ingestible', {
        flags: {
            "29": "Medicine"
        },
        members: [
            def('EDID'),
            def('OBNDReq'),
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
                uint32('Flags', {
                    "0": "No Auto-Calc",
                    "1": "Food Item",
                    "2": "Unknown 3",
                    "3": "Unknown 4",
                    "4": "Unknown 5",
                    "5": "Unknown 6",
                    "6": "Unknown 7",
                    "7": "Unknown 8",
                    "8": "Unknown 9",
                    "9": "Unknown 10",
                    "10": "Unknown 11",
                    "11": "Unknown 12",
                    "12": "Unknown 13",
                    "13": "Unknown 14",
                    "14": "Unknown 15",
                    "15": "Unknown 16",
                    "16": "Medicine",
                    "17": "Poison"
                }),
                formId('Addiction'),
                float('Addiction Chance'),
                ckFormId('Sound - Consume', ['SNDR', 'NULL'])
            ]))),
            def('EffectsReq')
        ]
    })
};