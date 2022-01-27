let {
    req, def, enumeration, uint32, format, 
    bytes, size, flags, uint8, struct, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ENCH', 'Object Effect', {
        members: [
            req(def('EDID')),
            def('FULL'),
            req(subrecord('ENIT', struct('Effect Data', [
                format(uint32('Type'), enumeration({
                    0: '',
                    1: '',
                    2: 'Weapon',
                    3: 'Apparel'
                })),
                size(4, bytes('Unused')),
                size(4, bytes('Unused')),
                format(uint8('Flags'), flags({
                    0: 'No Auto-Calc',
                    1: '',
                    2: 'Hide Effect'
                })),
                size(3, bytes('Unused'))
            ]))),
            req(def('Effects'))
        ]
    })
};