let {
    req, def, bytes, size, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('FURN', 'Furniture', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            req(def('MODL')),
            def('SCRI'),
            def('DEST'),
            req(subrecord('MNAM', size(0, bytes('Marker Flags'))))
        ]
    })
};