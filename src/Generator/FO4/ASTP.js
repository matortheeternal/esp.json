let {
    def, string, subrecord, flags, uint32, 
    format, record
} = require('../helpers');

module.exports = () => {
    record('ASTP', 'Association Type', {
        members: [
            def('EDID'),
            subrecord('MPRT', string('Male Parent Title')),
            subrecord('FPRT', string('Female Parent Title')),
            subrecord('MCHT', string('Male Child Title')),
            subrecord('FCHT', string('Female Child Title')),
            subrecord('DATA', format(uint32('Flags'), flags({
                0: 'Family Association'
            })))
        ]
    })
};