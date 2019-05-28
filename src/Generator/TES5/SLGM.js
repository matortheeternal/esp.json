let {
    def, uint32, float, subrecord, struct, 
    req, uint8, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SLGM', 'Soul Gem', {
        flags: {
            "17": "Can Hold NPC Soul"
        },
        members: [
            def('EDID'),
            def('OBND'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('', [
                uint32('Value'),
                float('Weight')
            ]))),
            subrecord('SOUL', uint8('Contained Soul', def('SoulGemEnum'))),
            subrecord('SLCP', uint8('Maximum Capacity', def('SoulGemEnum'))),
            subrecord('NAM0', ckFormId('Linked To', ['SLGM']))
        ]
    })
};