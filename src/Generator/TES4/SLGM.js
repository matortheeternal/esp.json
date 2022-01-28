let {
    def, uint32, float, struct, subrecord, 
    req, uint8, format, record
} = require('../helpers');

module.exports = () => {
    record('SLGM', 'Soul Gem', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(subrecord('DATA', struct('', [
                uint32('Value'),
                float('Weight')
            ]))),
            req(subrecord('SOUL', format(uint8('Contained Soul'), def('SoulGemEnum')))),
            req(subrecord('SLCP', format(uint8('Maximum Capacity'), def('SoulGemEnum'))))
        ]
    })
};