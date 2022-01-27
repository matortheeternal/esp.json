let {
    req, def, string, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('MUSC', 'Music Type', {
        members: [
            req(def('EDID')),
            subrecord('FNAM', string('FileName'))
        ]
    })
};