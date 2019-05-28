let {
    subrecord, string, req, lstring, int32, 
    float, uint32, union, record
} = require('../helpers');

module.exports = () => {
    record('GMST', 'Game Setting', {
        members: [
            req(subrecord('EDID', string('Editor ID'))),
            req(subrecord('DATA', union('Value', [
                lstring(Name),
                int32('Int'),
                float('Float'),
                uint32('Bool', {
                    "0": "False",
                    "1": "True"
                })
            ])))
        ]
    })
};