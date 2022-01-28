let {
    def, uint8, struct, bytes, size, 
    subrecord, uint32, float, req, record
} = require('../helpers');

module.exports = () => {
    record('SGST', 'Sigil Stone', {
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
            def('Effects'),
            req(subrecord('DATA', struct('', [
                uint8('Uses '),
                uint32('Value'),
                float('Weight')
            ])))
        ]
    })
};