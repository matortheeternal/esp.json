let {
    def, subrecord, ckFormId, uint32, float, 
    struct, record
} = require('../helpers');

module.exports = () => {
    record('HAZD', 'Hazard', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD', 'NULL'])),
            subrecord('DATA', struct('Data', [
                uint32('Limit'),
                float('Radius'),
                float('Lifetime'),
                float('Image Space Radius'),
                float('Target Interval'),
                uint32('Flags', {
                    "0": "Affects Player Only",
                    "1": "Inherit Duration from Spawn Spell",
                    "2": "Align to Impact Normal",
                    "3": "Inherit Radius from Spawn Spell",
                    "4": "Drop to Ground"
                }),
                ckFormId('Spell', ['SPEL', 'ENCH', 'NULL']),
                ckFormId('Light', ['LIGH', 'NULL']),
                ckFormId('Impact Data Set', ['IPDS', 'NULL']),
                ckFormId('Sound', ['SNDR', 'NULL'])
            ]))
        ]
    })
};