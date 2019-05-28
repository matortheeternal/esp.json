let {
    def, req, subrecord, ckFormId, formId, 
    float, uint32, format, struct, record
} = require('../helpers');

module.exports = () => {
    record('EXPL', 'Explosion', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('EITM'),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD'])),
            req(subrecord('DATA', struct('Data', [
                ckFormId('Light', ['LIGH', 'NULL']),
                ckFormId('Sound 1', ['SNDR', 'NULL']),
                ckFormId('Sound 2', ['SNDR', 'NULL']),
                ckFormId('Impact Data Set', ['IPDS', 'NULL']),
                formId('Placed Object'),
                ckFormId('Spawn Projectile', ['PROJ', 'NULL']),
                float('Force'),
                float('Damage'),
                float('Radius'),
                float('IS Radius'),
                float('Vertical Offset Mult'),
                format(uint32('Flags'), {
                    "0": "Unknown 0",
                    "1": "Always Uses World Orientation",
                    "2": "Knock Down - Always",
                    "3": "Knock Down - By Formula",
                    "4": "Ignore LOS Check",
                    "5": "Push Explosion Source Ref Only",
                    "6": "Ignore Image Space Swap",
                    "7": "Chain",
                    "8": "No Controller Vibration"
                }),
                format(uint32('Sound Level'), def('SoundLevelEnum'))
            ])))
        ]
    })
};