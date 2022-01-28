let {
    def, string, conflictType, int32, float, 
    union, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('GMST', 'Game Setting', {
        members: [
            def('EDID'),
            req(subrecord('DATA', union('Value', 'GMSTUnionDecider', [
                conflictType('Translate', string('')),
                int32(''),
                float('')
            ])))
        ]
    })
};