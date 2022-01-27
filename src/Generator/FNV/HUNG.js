let {
    req, def, uint32, ckFormId, struct, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('HUNG', 'Hunger Stage', {
        members: [
            req(def('EDID')),
            req(subrecord('DATA', struct('', [
                uint32('Trigger Threshold'),
                ckFormId('Actor Effect', ['SPEL'])
            ])))
        ]
    })
};