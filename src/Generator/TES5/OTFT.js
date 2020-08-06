let {
    def, ckFormId, sorted, array, subrecord, 
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