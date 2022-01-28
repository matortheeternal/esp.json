let {
    def, uint32, subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('CMPO', 'Component', {
        members: [
            def('EDID'),
            def('OBND'),
            def('FULL'),
            def('CUSD'),
            subrecord('DATA', uint32('Auto Calc Value')),
            subrecord('MNAM', ckFormId('Scrap Item', ['MISC'])),
            subrecord('GNAM', ckFormId('Mod Scrap Scalar', ['GLOB']))
        ]
    })
};