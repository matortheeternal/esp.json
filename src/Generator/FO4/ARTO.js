let {
    def, req, enumeration, uint32, format, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ARTO', 'Art Object', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('PTRN'),
            def('KSIZ'),
            def('KWDAs'),
            def('MODL'),
            subrecord('DNAM', format(uint32('Art Type'), enumeration({
                0: 'Magic Casting',
                1: 'Magic Hit Effect',
                2: 'Enchantment Effect'
            })))
        ]
    })
};