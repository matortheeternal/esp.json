let {
    def, subrecord, cstring, uint32, format, 
    record
} = require('../helpers');

module.exports = () => {
    record('ASTP', 'Association Type', {
        members: [
            def('EDID'),
            subrecord('MPRT', cstring('Male Parent Title')),
            subrecord('FPRT', cstring('Female Parent Title')),
            subrecord('MCHT', cstring('Male Child Title')),
            subrecord('FCHT', cstring('Female Child Title')),
            subrecord('DATA', format(uint32('Flags'), {
                0: 'Family Association'
            }))
        ]
    })
};