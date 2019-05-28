let {
    def, formId, subrecord, array, uint32, 
    record
} = require('../helpers');

module.exports = () => {
    record('EQUP', 'Equip Type', {
        members: [
            def('EDID'),
            subrecord('PNAM', array('Slot Parents', formId('Can Be Equipped'), 0)),
            subrecord('DATA', uint32('Use All Parents', {
                "0": "False",
                "1": "True"
            }))
        ]
    })
};