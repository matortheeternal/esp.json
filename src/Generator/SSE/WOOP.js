let {
    def, localized, string, conflict, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('WOOP', 'Word of Power', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('TNAM', conflict('Translate', localized(string('Translation')))))
        ]
    })
};