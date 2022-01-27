let {
    req, def, int32, uint32, uint8, 
    struct, flags, format, float, subrecord, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('LIGH', 'Light', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('MODL'),
            def('SCRI'),
            def('DEST'),
            def('FULL'),
            def('ICON'),
            req(subrecord('DATA', struct('', [
                int32('Time'),
                uint32('Radius'),
                struct('Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    uint8('Unused')
                ]),
                format(uint32('Flags'), flags({
                    0: 'Dynamic',
                    1: 'Can be Carried',
                    2: 'Negative',
                    3: 'Flicker',
                    4: 'Unused',
                    5: 'Off By Default',
                    6: 'Flicker Slow',
                    7: 'Pulse',
                    8: 'Pulse Slow',
                    9: 'Spot Light',
                    10: 'Spot Shadow'
                })),
                float('Falloff Exponent'),
                float('FOV'),
                uint32('Value'),
                float('Weight')
            ]))),
            req(subrecord('FNAM', float('Fade value'))),
            subrecord('SNAM', ckFormId('Sound', ['SOUN']))
        ]
    })
};