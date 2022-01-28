let {
    def, float, struct, subrecord, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('SBSP', 'Subspace', {
        members: [
            def('EDID'),
            req(subrecord('DNAM', struct('', [
                float('X'),
                float('Y'),
                float('Z')
            ])))
        ]
    })
};