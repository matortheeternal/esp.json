let {
    def, localized, string, conflictType, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('WOOP', 'Word of Power', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('TNAM', conflictType('Translate', localized(string('Translation')))))
        ]
    })
};