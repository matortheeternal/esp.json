let {
    def, ckFormId, subrecord, sorted, array, 
    record
} = require('../helpers');

module.exports = () => {
    record('OTFT', 'Outfit', {
        members: [
            def('EDID'),
            subrecord('INAM', sorted(array('Items', 
                ckFormId('Item', ['ARMO', 'LVLI'])
            )))
        ]
    })
};