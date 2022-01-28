let {
    def, enumeration, uint8, format, uint32, 
    float, struct, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('APPA', 'Alchemical Apparatus', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(subrecord('DATA', struct('', [
                format(uint8('Type'), enumeration({
                    0: 'Mortar and Pestle',
                    1: 'Alembic',
                    2: 'Calcinator',
                    3: 'Retort'
                })),
                uint32('Value'),
                float('Weight'),
                float('Quality')
            ])))
        ]
    })
};