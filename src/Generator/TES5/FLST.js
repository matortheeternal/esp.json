let {
    subrecord, cstring, req, formId, arrayOfSubrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('FLST', 'FormID List', {
        members: [
            req(subrecord('EDID', cstring('Editor ID'))),
            req(arrayOfSubrecord('FormIDs', subrecord('LNAM', formId('FormID'))))
        ]
    })
};