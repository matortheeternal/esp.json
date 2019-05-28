let {
    subrecord, cstring, req, string, int32, 
    float, uint32, format, union, record
} = require('../helpers');

module.exports = () => {
    record('GMST', 'Game Setting', {
        members: [
            req(subrecord('EDID', cstring('Editor ID'))),
            req(subrecord('DATA', union('Value', [
                string('Name'),
                int32('Int'),
                float('Float'),
                format(uint32('Bool'), {
                    "0": "False",
                    "1": "True"
                })
            ])))
        ]
    })
};