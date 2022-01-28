let {
    def, req, ckFormId, subrecord, uint32, 
    float, flags, format, struct, record
} = require('../helpers');

module.exports = () => {
    record('HAZD', 'Hazard', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD', 'NULL'])),
            subrecord('DNAM', struct('Data', [
                uint32('Limit'),
                float('Radius'),
                float('Lifetime'),
                float('Image Space Radius'),
                float('Target Interval'),
                format(uint32('Flags'), flags({
                    0: 'Affects Player Only',
                    1: 'Inherit Duration from Spawn Spell',
                    2: 'Align to Impact Normal',
                    3: 'Inherit Radius from Spawn Spell',
                    4: 'Drop to Ground',
                    5: 'Taper Effectiveness by Proximity'
                })),
                ckFormId('Effect', [
                    'SPEL', 'ENCH', 'NULL'
                ]),
                ckFormId('Light', ['LIGH', 'NULL']),
                ckFormId('Impact Data Set', ['IPDS', 'NULL']),
                ckFormId('Sound', ['SNDR', 'NULL']),
                struct('Taper Effectiveness', [
                    float('Full Effect Radius'),
                    float('Taper Weight'),
                    float('Taper Curse')
                ])
            ]))
        ]
    })
};