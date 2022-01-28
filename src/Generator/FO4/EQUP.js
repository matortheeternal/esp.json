let {
    def, ckFormId, array, subrecord, flags, 
    uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('EQUP', 'Equip Type', {
        members: [
            def('EDID'),
            subrecord('PNAM', array('Slot Parents', 
                ckFormId('Parent', ['EQUP'])
            )),
            subrecord('DATA', format(uint32('Flags'), flags({
                0: 'Use All Parents',
                1: 'Parents Optional',
                2: 'Item Slot'
            }))),
            subrecord('ANAM', ckFormId('Condition Actor Value', [
                'AVIF', 'NULL', 'FFFF'
            ]))
        ]
    })
};