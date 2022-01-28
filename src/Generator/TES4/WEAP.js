let {
    def, uint16, subrecord, enumeration, uint32, 
    format, float, flags, struct, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('WEAP', 'Weapon', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('ENAM'),
            subrecord('ANAM', uint16('Enchantment Points')),
            req(subrecord('DATA', struct('', [
                format(uint32('Type'), enumeration({
                    0: 'Blade One Hand',
                    1: 'Blade Two Hand',
                    2: 'Blunt One Hand',
                    3: 'Blunt Two Hand',
                    4: 'Staff',
                    5: 'Bow'
                })),
                float('Speed'),
                float('Reach'),
                format(uint32('Flags'), flags({
                    0: 'Ignores Normal Weapon Resistance'
                })),
                uint32('Value'),
                uint32('Health'),
                float('Weight'),
                uint16('Damage')
            ])))
        ]
    })
};