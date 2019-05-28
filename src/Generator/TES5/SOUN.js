let {
    def, subrecord, unknown, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound Marker', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            subrecord('FNAM', unknown()),
            subrecord('SNDD', unknown()),
            subrecord('SDSC', ckFormId('Sound Descriptor', ['SNDR', 'NULL']))
        ]
    })
};