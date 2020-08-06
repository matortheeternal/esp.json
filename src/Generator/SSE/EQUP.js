let {
    def, formId, array, subrecord, req, 
    enumeration, uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('EQUP', 'Equip Type', {
        members: [
            def('EDID'),
            req(subrecord('PNAM', array('Slot Parents', 
                formId('Can Be Equipped')
            ))),
            subrecord('DATA', format(uint32('Use All Parents'), enumeration({
                0: 'False',
                1: 'True'
            })))
        ]
    })
};