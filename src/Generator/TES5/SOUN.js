let {
    def, req, unknown, conflictType, subrecord, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound Marker', {
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('FNAM', conflictType('Ignore', unknown())),
            subrecord('SNDD', conflictType('Ignore', unknown())),
            subrecord('SDSC', ckFormId('Sound Descriptor', ['SNDR', 'NULL']))
        ]
    })
};