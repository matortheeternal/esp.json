let {
    string, conflictType, subrecord, req, opts, 
    int32, float, union, record
} = require('../helpers');

module.exports = () => {
    record('GMST', 'Game Setting', {
        members: [
            opts(req(subrecord('EDID', conflictType('Critical', string('Editor ID')))), {
                "afterSet": "GMSTEDIDAfterSet"
            }),
            req(subrecord('DATA', union('Value', 'GMSTUnionDecider', [
                conflictType('Translate', string('')),
                int32(''),
                float('')
            ])))
        ]
    })
};