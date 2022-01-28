let {
    def, uint8, struct, bytes, size, 
    subrecord, enumeration, uint32, format, flags, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('ENCH', 'Enchantment', {
        members: [
            def('EDID'),
            subrecord('OBME', struct('Oblivion Magic Extender', [
                uint8('Record Version'),
                struct('OBME Version', [
                    uint8('Beta'),
                    uint8('Minor'),
                    uint8('Major')
                ]),
                size(28, bytes('Unused'))
            ])),
            def('FULL'),
            req(subrecord('ENIT', struct('', [
                format(uint32('Type'), enumeration({
                    0: 'Scroll',
                    1: 'Staff',
                    2: 'Weapon',
                    3: 'Apparel'
                })),
                uint32('Charge Amount'),
                uint32('Enchant Cost'),
                format(uint8('Flags'), flags({
                    0: 'Manual Enchant Cost (Autocalc Off)'
                })),
                size(3, bytes('Unused'))
            ]))),
            def('Effects')
        ]
    })
};