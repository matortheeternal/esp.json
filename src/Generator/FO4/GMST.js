let {
    string, conflictType, subrecord, req, opts, 
    localized, int32, float, def, uint32, 
    format, union, record
} = require('../helpers');

module.exports = () => {
    record('GMST', 'Game Setting', {
        members: [
            opts(req(subrecord('EDID', conflictType('Critical', string('Editor ID')))), {
                "afterSet": "GMSTEDIDAfterSet"
            }),
            req(subrecord('DATA', union('Value', 'GMSTUnionDecider', [
                conflictType('Translate', localized(string('Name'))),
                int32('Int'),
                float('Float'),
                format(uint32('Bool'), def('BoolEnum'))
            ])))
        ]
    })
};