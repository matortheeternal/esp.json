let {
    def, float, uint8, format, bytes, 
    size, struct, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('AORU', 'Attraction Rule', {
        members: [
            def('EDID'),
            req(subrecord('AOR2', struct('Data', [
                float('Radius'),
                float('Min Delay'),
                float('Max Delay'),
                format(uint8('Requires Line of Sight'), def('BoolEnum')),
                format(uint8('Combat Target'), def('BoolEnum')),
                size(2, bytes('Unused'))
            ])))
        ]
    })
};