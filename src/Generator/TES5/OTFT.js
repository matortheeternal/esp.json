let {
    def, ckFormId, subrecord, array, record
} = require('../helpers');

module.exports = () => {
    record('OTFT', 'Outfit', {
        members: [
            def('EDID'),
            subrecord('INAM', array('Items', 
                ckFormId('Item', ['ARMO', 'LVLI'])
            ))
        ]
    })
};