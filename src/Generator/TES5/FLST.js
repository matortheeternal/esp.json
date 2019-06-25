let {
    subrecord, string, req, formId, sorted, 
    arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('FLST', 'FormID List', {
        members: [
            req(subrecord('EDID', string('Editor ID'))),
            req(sorted(arrayOfSubrecord('FormIDs', 
                subrecord('LNAM', formId('FormID'))
            )))
        ]
    })
};