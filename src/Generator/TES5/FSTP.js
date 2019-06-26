let {
    def, subrecord, ckFormId, req, string, 
    record
} = require('../helpers');

module.exports = () => {
    record('FSTP', 'Footstep', {
        members: [
            def('EDID'),
            req(subrecord('DATA', ckFormId('Impact Data Set', ['IPDS', 'NULL']))),
            req(subrecord('ANAM', string('Tag')))
        ]
    })
};