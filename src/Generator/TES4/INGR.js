let {
    def, uint8, struct, bytes, size, 
    subrecord, float, req, int32, flags, 
    format, record
} = require('../helpers');

module.exports = () => {
    record('INGR', 'Ingredient', {
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
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(subrecord('DATA', float('Weight'))),
            req(subrecord('ENIT', struct('', [
                int32('Value'),
                format(uint8('Flags'), flags({
                    0: 'No auto-calculation',
                    1: 'Food item'
                })),
                size(3, bytes('Unused'))
            ]))),
            def('Effects')
        ]
    })
};