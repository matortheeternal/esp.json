let {
    def, uint16, subrecord, flags, uint8, 
    format, int8, uint32, float, struct, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('BOOK', 'Book', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('ENAM'),
            subrecord('ANAM', uint16('Enchantment Points')),
            def('DESC'),
            req(subrecord('DATA', struct('', [
                format(uint8('Flags'), flags({
                    0: 'Scroll',
                    1: 'Can\'t be taken'
                })),
                format(int8('Teaches'), def('SkillEnum')),
                uint32('Value'),
                float('Weight')
            ])))
        ]
    })
};