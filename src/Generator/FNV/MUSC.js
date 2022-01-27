let {
    req, def, string, subrecord, float, 
    record
} = require('../helpers');

module.exports = () => {
    record('MUSC', 'Music Type', {
        members: [
            req(def('EDID')),
            subrecord('FNAM', string('FileName')),
            subrecord('ANAM', float('dB (positive = Loop)'))
        ]
    })
};