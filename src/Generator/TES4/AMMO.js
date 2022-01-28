let {
    def, ckFormId, subrecord, uint16, float, 
    flags, uint8, format, bytes, size, 
    uint32, struct, req, record
} = require('../helpers');

module.exports = () => {
    record('AMMO', 'Ammunition', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            subrecord('ENAM', ckFormId('Enchantment', ['ENCH'])),
            subrecord('ANAM', uint16('Enchantment Points')),
            req(subrecord('DATA', struct('', [
                float('Speed'),
                format(uint8('Flags'), flags({
                    0: 'Ignores Normal Weapon Resistance'
                })),
                size(3, bytes('Unused')),
                uint32('Value'),
                float('Weight'),
                uint16('Damage')
            ])))
        ]
    })
};