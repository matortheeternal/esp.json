let {
    def, bytes, size, subrecord, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('FURN', 'Furniture', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            req(subrecord('MNAM', size(0, bytes('Marker Flags'))))
        ]
    })
};