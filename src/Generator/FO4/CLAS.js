let {
    def, req, bytes, size, float, 
    struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('CLAS', 'Class', {
        members: [
            def('EDID'),
            req(def('FULL')),
            req(def('DESC')),
            def('ICON'),
            def('PRPS'),
            subrecord('DATA', struct('Data', [
                size(4, bytes('Unknown')),
                float('Bleedout Default')
            ]))
        ]
    })
};