let {
    def, req, unknown, conflict, subrecord, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound Marker', {
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('FNAM', conflict('Ignore', unknown())),
            subrecord('SNDD', conflict('Ignore', unknown())),
            subrecord('SDSC', ckFormId('Sound Descriptor', ['SNDR', 'NULL']))
        ]
    })
};