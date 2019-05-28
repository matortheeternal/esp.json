let {
    subrecord, string, req, formId, arrayOfSubrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('FLST', 'FormID List', {
        members: [
            req(subrecord('EDID', string('Editor ID'))),
            req(arrayOfSubrecord('FormIDs', subrecord('LNAM', formId('FormID'))))
        ]
    })
};