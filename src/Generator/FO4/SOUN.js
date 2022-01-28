let {
    def, req, ckFormId, subrecord, float, 
    uint8, format, struct, record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound Marker', {
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('SDSC', ckFormId('Sound Descriptor', ['SNDR', 'NULL'])),
            subrecord('REPT', struct('Repeat', [
                float('Min Time'),
                float('Max Time'),
                format(uint8('Stackable'), def('BoolEnum'))
            ]))
        ]
    })
};