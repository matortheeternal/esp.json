let {
    def, ckFormId, flags, uint32, format, 
    struct, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('RFCT', 'Visual Effect', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('Effect Data', [
                ckFormId('Effect Art', ['ARTO', 'NULL']),
                ckFormId('Shader', ['EFSH', 'NULL']),
                format(uint32('Flags'), flags({
                    0: 'Rotate to Face Target',
                    1: 'Attach to Camera',
                    2: 'Inherit Rotation'
                }))
            ])))
        ]
    })
};