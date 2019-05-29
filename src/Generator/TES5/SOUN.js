let {
    def, req, subrecord, unknown, ckFormId, 
    record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound Marker', {
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('FNAM', unknown()),
            subrecord('SNDD', unknown()),
            subrecord('SDSC', ckFormId('Sound Descriptor', ['SNDR', 'NULL']))
        ]
    })
};